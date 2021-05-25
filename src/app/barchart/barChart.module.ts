import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { BarChartComponent } from './barChart.component';


@NgModule({
  imports: [BrowserModule, MaterialModule],
  declarations: [BarChartComponent],
  exports: [BarChartComponent]
})
export class BarChartModule {
}
