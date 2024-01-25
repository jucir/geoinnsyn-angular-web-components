import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { geoJsonFeatureInfoTest, geojsonTest, geojsonTest1, jsonStyleTest, jsonStyleTestCopy, routeGeoJson } from '../testData/testData';
import { MapService } from '../map/map.service';
@Component({
  selector: 'app-side2',
  templateUrl: './side2.component.html',
  styleUrls: ['./side2.component.scss']
})
export class Side2Component implements OnInit, AfterViewInit, OnDestroy {
  testParam: any = undefined;

  @ViewChild('container2', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  private mapId = 'map2';
  constructor(private mapService: MapService) { }

  // loadComponent() {
  //   this.mapService.createComponent(this.container, this.componentId, undefined, this.mapId);
  // }

  // unloadComponent() {
  //   this.mapService.destroyComponent(this.componentId);
  // }

  ngOnInit(): void {
    console.log('Acitave side2');
    this.testParam = [
      { giParamId: 'deactivateHoverInfo', hide: true },
      {
        giParamId: 'setCenter',
        epsg: 'EPSG:32632',
        lat: 6742848.280273437,
        lon: 586521.8266601556,
        scale: 2500,
        zoom: 15,
        showMarker: true,
        markerColor: 'rgba(255, 147, 0, 1)',
      },
      { giParamId: 'getMapMoveEnd', active: true },
      // {
      //   giParamId: 'getObjectGeometry',
      //   active: true,
      // },
      // {
      //   giParamId: 'uploadGeoJson',
      //   layerName: 'test',
      //   features: JSON.stringify(geojsonTest),
      //   jsonStyle: JSON.stringify(jsonStyleTest),
      //   cluster: true,
      //   clusterdistance: 30,
      //   clustercount: true,
      //   clusterstyleurl:
      //     'https://test.geoinnsyn.no/services/ISY.GIS.IsyGeoinnsynConfig/api/v2/style?application=demo&name=NorconsultOffices',
      //   featureInfoElements: JSON.stringify(geoJsonFeatureInfoTest),
      //   featureInfoTitle: 'Feature Info Name',
      //   layerOrder: -99,
      // }
    ];
  }

  ngAfterViewInit(): void {
    // this.loadComponent();
    // setTimeout(() => {
    //   this.loadComponent();
    //   },1);
  }

  ngOnDestroy(): void {
    // this.unloadComponent();
    console.log('Deactivate side2');
    this.testParam = undefined;
  }
}
