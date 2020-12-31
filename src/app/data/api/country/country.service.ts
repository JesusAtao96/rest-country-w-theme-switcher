import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    /* return this.http.get<any>(`${environment.api}/all?fields=name;capital;population;flag;region`); */
    return this.http.get<any>(`${environment.api}/region/Africa?fields=name;capital;population;flag;region`);
  }

  searchByRegion(param: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/region/${ param }?fields=name;capital;population;flag;region`);
  }

  searchByCountry(param: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/name/${ param }`);
  }
}
