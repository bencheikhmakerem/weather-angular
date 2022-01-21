import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeatherserviceService } from "./weatherservice.service";
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';




@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [WeatherserviceService],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
