import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { Side1Component } from './side1/side1.component';
import { Side2Component } from './side2/side2.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, MapComponent, Side1Component, Side2Component],
  imports: [BrowserModule, LazyElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
