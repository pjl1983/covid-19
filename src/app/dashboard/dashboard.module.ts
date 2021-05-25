import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material-module';
import { GeoChartModule } from '../geochchart/geoChart.module';
import { LineChartModule } from '../linechart/lineChart.module';
import { BarChartModule } from '../barchart/barChart.module';

@NgModule({
  imports: [BrowserModule, MaterialModule, GeoChartModule, LineChartModule, BarChartModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
