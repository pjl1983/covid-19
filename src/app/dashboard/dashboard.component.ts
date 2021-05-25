import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CovidDataService } from '../services/covidData.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CovidRequestModel } from '../models/covid-request.model';
import { EuropeanCountriesList } from './european-countries-list';
import { CovidData } from '../mocks/covid-data';
import { MatSort } from '@angular/material/sort';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  covidData: CovidRequestModel[] = [];

  geoChartData: [string, string][] = [['Country', ''], ['', '']];
  regionHistory: CovidRequestModel[] = [];
  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(private covidDataService: CovidDataService) {
  }

  ngOnInit() {
    this.covidDataService.getCovidHistory().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((history: CovidRequestModel[]) => {
      this.regionHistory = history;
    });

    const response: CovidRequestModel[] = CovidData; // remove this line when done testing
    const labels: [string, string][] = [['Country', '']];
    const geoChartData: [string, string][] = [];

    response.forEach((covidRequestModel: CovidRequestModel) => {
      const twoDigitCountCode: string = EuropeanCountriesList[covidRequestModel.country];
      if (twoDigitCountCode) {
        this.covidData.push(covidRequestModel);
        const amount = formatNumber(covidRequestModel.cases.total, 'en-US', '1.0-0');
        geoChartData.push([twoDigitCountCode, `${covidRequestModel.country}: ${amount}`]);
      }
    });
    this.geoChartData = [...labels, ...geoChartData];
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
