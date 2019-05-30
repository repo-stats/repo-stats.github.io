import { Component, OnInit } from '@angular/core';

import {
  AccessLogService,
  AccessLogDownloadSchema,
} from './access-log.service';
import ResolvedNumberFormatOptions = Intl.ResolvedNumberFormatOptions;

interface VersionDownloads {
  version: string;
  downloads: number;
}

class PoolCounter {
  private _step = 0;

  constructor(private _max: number) { }

  public get step() {
    return this._step;
  }

  public get max() {
    return this._max;
  }

  public increase() {
    ++this._step;
  }
}

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.scss']
})
export class AccessLogComponent implements OnInit {
  public fromDate: Date;
  public toDate: Date;
  public packageName: string = 'friendsofphp/php-cs-fixer';
  public versions: VersionDownloads[] | undefined;
  public poolCounter: PoolCounter | undefined;
  public totalDownloads: number | undefined;
  public grouping: 'MAJOR' | 'MINOR' = 'MINOR';
  public possibleGroupings = [
    {
      value: 'MAJOR',
      label: 'MAJOR',
    },
    {
      value: 'MINOR',
      label: 'MINOR',
    },
  ];

  public constructor(
    private accessLogService: AccessLogService,
  ) {
    this.fromDate = new Date();
    this.fromDate.setMonth(this.fromDate.getMonth() - 1);
    this.fromDate.setDate(this.fromDate.getDate() - 7);

    this.toDate = new Date();
    this.toDate.setDate(this.toDate.getDate() - 7);
  }

  public ngOnInit() {
    (async () => {
      this.packageName = await this.accessLogService.getPackageName();
      this.fromDate = await this.accessLogService.getDateFrom();
      this.toDate = await this.accessLogService.getDateTo();
    })();
  }

  public check() {
    this.versions = undefined;
    this.totalDownloads = undefined;
    this.poolCounter = undefined;

    this.accessLogService.getDownloads()
      .then((input: AccessLogDownloadSchema): VersionDownloads[] => {
        let data: VersionDownloads[] = [];
        for (let k in input) {
          data.push({version: k, downloads: input[k]});
        }

        return data;
      })
      .then((versionsDownloads: VersionDownloads[]): void => {
        this.totalDownloads = versionsDownloads.reduce(
          (previous: number, item: VersionDownloads): number => (previous + item.downloads),
          0,
        );
        this.poolCounter = new PoolCounter(versionsDownloads.length);

        const versionsMap = versionsDownloads.reduce((container: {}, item: VersionDownloads): {} => {
          if (this.poolCounter) {
            this.poolCounter.increase();
          }

          const groupVersion = this.extractGroupedVersion(item.version);
          if (undefined === container[groupVersion]) {
            container[groupVersion] = 0;
          }
          container[groupVersion] += item.downloads;
          return container;
        }, {});

        this.versions = Object.keys(versionsMap)
          .sort((left: string, right: string): number => {
            const leftParts = left.split('.');
            const rightParts = right.split('.');
            if (leftParts.length !== rightParts.length) {
              return left.localeCompare(right);
            }

            let leftPart, rightPart;

            do {
              leftPart = leftParts.shift();
              rightPart = rightParts.shift();
            } while (leftPart === rightPart);

            const leftInt = parseInt(leftPart, 10);
            const rightInt = parseInt(rightPart, 10);

            return leftInt - rightInt;
          })
          .reverse()
          .map((version: string): VersionDownloads => {
            return {
              version: version,
              downloads: versionsMap[version],
            };
          });
      });
  }

  private extractGroupedVersion(version: string) {
    let groupedVersion = version.replace(/^v/, '');

    if ('MAJOR' === this.grouping) {
      groupedVersion = groupedVersion.replace(/^(\d+).*$/, '$1.*');
    } else {
      groupedVersion = groupedVersion.replace(/^(\d+\.\d+).*$/, '$1.*');
    }

    return groupedVersion;
  }
}
