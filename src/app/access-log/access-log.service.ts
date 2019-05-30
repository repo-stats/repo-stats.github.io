import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface AccessLogDownloadSchema {
  [K: string]: number,
}

export interface AccessLogSchema {
  "date-from": string,
  "date-to": string,
  "package-name": string,
  downloads: AccessLogDownloadSchema,
}

@Injectable()
export class AccessLogService {
  private loadedData: undefined | Promise<AccessLogSchema> = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  public async getPackageName(): Promise<string> {
    return (await this.loadData())["package-name"];
  }

  public async getDateFrom(): Promise<Date> {
    return new Date((await this.loadData())["date-from"]);
  }

  public async getDateTo(): Promise<Date> {
    return new Date((await this.loadData())["date-to"]);
  }

  public async getDownloads(): Promise<AccessLogDownloadSchema> {
    return (await this.loadData()).downloads;
  }

  private loadData(): Promise<AccessLogSchema> {
    if (!this.loadedData) {
      this.loadedData = this.http.get("./access-log/phar-stats_20190405-20190504.json").toPromise() as Promise<AccessLogSchema>;
    }

    return this.loadedData;
  }
}
