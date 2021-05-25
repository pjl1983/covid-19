import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { GeoChartDataModel } from '../models/chart-data.model';


@Component({
  selector: 'geo-chart',
  templateUrl: './geoChart.component.html',
  styleUrls: ['./geoChart.component.scss']
})

export class GeoChartComponent {
  @Input() data: [string, string][];
  chart: GeoChartDataModel = {
    title: 'Covid-19',
    type: ChartType.GeoChart,
    options: {
      region: '150',
      backgroundColor: '#FFFFFF',
      datalessRegionColor: '#FFFFFF',
    }
  };
}
