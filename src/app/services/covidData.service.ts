import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovidRequestModel } from '../models/covid-request.model';

@Injectable({providedIn: 'root'})

export class CovidDataService {

  constructor(
    private http: HttpClient) {
  }

  getCovidData(): Observable<CovidRequestModel[]> {
    return this.http.get<CovidRequestModel[]>('/api/statistics');
  }

  getCovidHistory(region: string = 'europe'): Observable<CovidRequestModel[]> {
    return this.http.get<CovidRequestModel[]>(`/api/history?region=${region}`);
  }
}
