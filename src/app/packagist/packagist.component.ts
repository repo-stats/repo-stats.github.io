import { Component, OnInit } from '@angular/core';

import {
  PackagistService,
} from './packagist.service';
import ResolvedNumberFormatOptions = Intl.ResolvedNumberFormatOptions;

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

interface VersionDownloads {
  version: string;
  downloads: number;
}

@Component({
  selector: 'app-packagist',
  templateUrl: './packagist.component.html',
  styleUrls: ['./packagist.component.scss']
})
export class PackagistComponent implements OnInit {
  public fromDate: Date;
  public toDate: Date;
  public packageName = 'friendsofphp/php-cs-fixer';
  public versions: VersionDownloads[] | undefined;
  public poolCounter: PoolCounter | undefined;
  public totalDownloads: number | undefined;
  public grouping: 'MAJOR' | 'MINOR' | 'PATCH' = 'MINOR';
  public possibleGroupings = [
    {
      value: 'MAJOR',
      label: 'MAJOR',
    },
    {
      value: 'MINOR',
      label: 'MINOR',
    },
    {
      value: 'PATCH',
      label: 'PATCH',
    },
  ];

  public constructor(
    private packagistService: PackagistService,
  ) {
    this.fromDate = new Date();
    this.fromDate.setMonth(this.fromDate.getMonth() - 1);
    this.fromDate.setDate(this.fromDate.getDate() - 7);

    this.toDate = new Date();
    this.toDate.setDate(this.toDate.getDate() - 7);
  }

  public ngOnInit() {
  }

  public check() {
    this.versions = undefined;
    this.totalDownloads = undefined;
    this.poolCounter = undefined;

    const fromDate = this.fromDate.toISOString().substring(0, 10);
    const toDate = this.toDate.toISOString().substring(0, 10);

    this.packagistService.getPackageVersions(this.packageName).subscribe(
      (versions: string[]): void => {
        this.poolCounter = new PoolCounter(versions.length);
        const versionsPromises = versions.map((version: string): Promise<VersionDownloads> => {
          return this.packagistService.getPackageVersionDownloads(this.packageName, version, fromDate, toDate)
            .toPromise()
            .then((downloads: number): VersionDownloads => {
              if (this.poolCounter) {
                this.poolCounter.increase();
              }

              return { version, downloads };
            });
        });

        Promise.all(versionsPromises)
          .then((versionsDownloads: VersionDownloads[]): void => {
            this.totalDownloads = versionsDownloads.reduce(
              (previous: number, item: VersionDownloads): number => (previous + item.downloads),
              0,
            );
            const versionsMap = versionsDownloads.reduce((container: {}, item: VersionDownloads): {} => {
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

      },
      (error: any) => {
        alert('error happen');
        alert(JSON.stringify(error));
        console.error('error', error);
      }
    );
  }

  private extractGroupedVersion(version: string) {
    let groupedVersion = version.replace(/^v/, '');

    if ('MAJOR' === this.grouping) {
      groupedVersion = groupedVersion.replace(/^(\d+).*$/, '$1.*');
    } else if ('MINOR' === this.grouping) {
      groupedVersion = groupedVersion.replace(/^(\d+\.\d+).*$/, '$1.*');
    } else {
      groupedVersion = groupedVersion.replace(/^(\d+\.\d+\.\d+).*$/, '$1.*');
    }

    return groupedVersion;
  }
}
