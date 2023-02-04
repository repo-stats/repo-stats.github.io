import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

interface VersionInfo {
  version: string;
}

interface VersionsCollection {
  [K: string]: VersionInfo;
}

interface PackageVersionsCollection {
  packages: {
    [packageName: string]: VersionsCollection;
  };
}

@Injectable()
export class PackagistService {
  constructor(
    private http: HttpClient,
  ) { }

  public getPackageVersions(name: string): Observable<string[]> {
    return this.http.get(
      `https://packagist.org/p/${name}.json`,
    ).pipe(
      map((data: PackageVersionsCollection): string[] => {
        return Object.keys(data.packages[name]);
      }),
    );
  }

  public getPackageVersionDownloads(name: string, version: string, from: string, to: string): Observable<number> {
    return this.http.get(
      `https://packagist.org/packages/${name}/stats/${version}.json?average=daily&from=${from}&to=${to}`
    ).pipe(
      map((data: any): number => {
        return data.values[version]
          .map((a: null | undefined | string | number): number => {
            if (!a) {
              return 0;
            }

            if (typeof a === 'string') {
              return parseInt(a, 10);
            }

            return a;
          })
          .reduce((a: number, b: number): number => a + b, 0);
      }),
    );
  }
}
