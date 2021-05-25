import { ChartType } from 'angular-google-charts';

export class GeoChartDataModel {
  title: string;
  type: ChartType.GeoChart;
  options: {
    region: string;
    backgroundColor: string;
    datalessRegionColor: string;
  };
}
