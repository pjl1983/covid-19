import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CovidDataService } from './services/covidData.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    CovidDataService
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
