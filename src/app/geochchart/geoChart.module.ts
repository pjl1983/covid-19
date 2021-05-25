import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { GoogleChartsModule } from 'angular-google-charts';
import { GeoChartComponent } from './geoChart.component';

@NgModule({
  imports: [BrowserModule, GoogleChartsModule, MaterialModule],
  declarations: [GeoChartComponent],
  exports: [GeoChartComponent]
})
export class GeoChartModule {
}
