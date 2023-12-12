import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { geoJsonFeatureInfoTest, geojsonTest, geojsonTest1, jsonStyleTest, jsonStyleTestCopy, routeGeoJson } from '../testData/testData';
import { MapService } from '../map/map.service';
@Component({
  selector: 'app-side1',
  templateUrl: './side1.component.html',
  styleUrls: ['./side1.component.scss']
})
export class Side1Component implements OnInit, OnDestroy, AfterViewInit {

  testParam: any = undefined;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  componentId = 1;
  mapId = 'map1';
  constructor(private mapService: MapService) { }

  loadComponent() {
    // this.mapService.createComponent(this.container, this.componentId, this.testParam, this.mapId);
  }

  unloadComponent() {
    // this.mapService.destroyComponent(this.componentId);
  }

  ngOnInit(): void {
    console.log('Acitave side1');
      this.testParam = [
        { giParamId: 'deactivateHoverInfo', hide: true },
        {
        giParamId: 'setExtent',
        epsg: 'EPSG:32632',
        extent: [
          599241.9651565553, 6743969.178014754, 601538.7405471803,
          6745581.019811629,
        ],
      },
        { giParamId: 'getMapMoveEnd', active: true },
        {
          giParamId: 'getObjectGeometry',
          active: true,
        },
        {
          giParamId: 'uploadGeoJson',
          layerName: 'test',
          features: JSON.stringify(geojsonTest),
          jsonStyle: JSON.stringify(jsonStyleTest),
          cluster: true,
          clusterdistance: 30,
          clustercount: true,
          clusterstyleurl:
            'https://test.geoinnsyn.no/services/ISY.GIS.IsyGeoinnsynConfig/api/v2/style?application=demo&name=NorconsultOffices',
          featureInfoElements: JSON.stringify(geoJsonFeatureInfoTest),
          featureInfoTitle: 'Feature Info Name',
          layerOrder: -99,
        }
    ];
  }

  ngAfterViewInit(): void {
    // this.loadComponent();
    // setTimeout(() => {
    //   this.loadComponent();
    // }, 1);
    
  }

  ngOnDestroy(): void {
    // this.unloadComponent();
    console.log('Deactivate side1');
    this.testParam = undefined;
    // this.unloadComponent();
  }
}
