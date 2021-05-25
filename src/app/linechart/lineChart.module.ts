import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { LineChartComponent } from './lineChart.component';


@NgModule({
  imports: [BrowserModule, MaterialModule],
  declarations: [LineChartComponent],
  exports: [LineChartComponent]
})
export class LineChartModule {
}
