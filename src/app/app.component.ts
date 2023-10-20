import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSide1 = false;
  showSide2 = false;

  showMapSide1(): void {
    this.showSide1 = true;
    this.showSide2 = false;
  }

  showMapSide2(): void {
    this.showSide1 = false;
    this.showSide2 = true;
  }

  hideAll(): void {
    this.showSide1 = false;
    this.showSide2 = false;
  }
}
