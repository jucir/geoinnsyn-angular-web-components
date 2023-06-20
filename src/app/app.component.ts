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
  }
}
