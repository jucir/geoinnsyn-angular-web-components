import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  configUrl =
    'https://geoinnsyn.no/?project=Plandialog&application=demo&apiKey=qwerty1234';
  moduleUrl = '../assets/js/geo-innsyn-web-components.js';
  _giParams: any;
  get giParams(): any {
    return this._giParams;
  }

  set giParams(value: any) {
    this._giParams = JSON.stringify(value);
  }

  mapoutput(event: any): void {
    const eventDetail = event.detail;
    if (!eventDetail) return;
    console.log('eventDetail', eventDetail);
    if (eventDetail['mapOutputId'] === 'mapCenter') {
      console.log('mapCenter', eventDetail['mapCenter']);
    }
  }

  setCenter(): void {
    this.giParams = {
      giParamId: 'setCenter',
      epsg: 'EPSG:32632',
      lat: 6742848.280273437,
      lon: 586521.8266601556,
      scale: 2500,
      zoom: 15,
      showMarker: true,
      markerColor: 'rgba(255, 147, 0, 1)',
    };
  }

  getCenter(): void {
    this.giParams = { giParamId: 'getCenter' };
  }

  testGiParamsArray(): void {
    this.giParams = [
      {
        giParamId: 'setMapAnimation',
        active: false,
      },
      {
        giParamId: 'getVisibleLayers',
        active: true,
      },
      {
        giParamId: 'setCenter',
        epsg: 'EPSG:32632',
        lat: 6942848.280273437,
        lon: 596521.8266601556,
        scale: 2500,
        zoom: 15,
      },
    ];
  }
}
