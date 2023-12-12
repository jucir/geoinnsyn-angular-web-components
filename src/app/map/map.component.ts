import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  EElementsParams,
  EMapOutputParams,
} from '../enums/custom-element-params';
import { IActivateParam, IExtent, IHide, IMapCenter, IRemoveLayer, IRemoveLayers, ISaksInfoParam, IShowHideLayer, IShowLayers, ITransformCoordinates, IUploadDrawingGeoJson, IUploadGeoJson } from '../interfaces/map-params';
import { geoJsonFeatureInfoTest, geojsonTest, geojsonTest1, jsonStyleTest, jsonStyleTestCopy, routeGeoJson } from '../testData/testData';
import { EDrawPanelId, EGeometryType } from '../enums/draw-tool-params';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
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

  _giParamsDraw: any;
  get giParamsDraw(): any {
    return this._giParamsDraw;
  }

  set giParamsDraw(value: any) {
    this._giParamsDraw = JSON.stringify(value);
  }

  _activateParam: any = undefined;
  @Input() set activateParam(param: any) {
    this._activateParam = param;
  }
  @Input() id: number = 0;
  @Input() mapId: string = 'mapX';
  @Input() keyParam: string = 'test';
  @Input() componentId: number = 20;

  ngOnInit(): void {
    console.log('KeyParam: ', this.keyParam);
    console.log('componentId: ', this.mapId);
  }

  ngOnDestroy(): void {
    console.log('Destroy map component: ', this.mapId);
  }

  mapoutput(event: any): void {
    const eventDetail = event.detail;
    if (!eventDetail) return;
    console.log('eventDetail', eventDetail);
    if (eventDetail['mapOutputId'] === 'mapCenter') {
      console.log('mapCenter', eventDetail['mapCenter']);
    }
    if (eventDetail['mapOutputId'] === 'mapLoaded') {
      if (eventDetail['mapLoaded'] === true) {      
        if (this._activateParam) {
          this.giParams = this._activateParam;
        }
      }
      // if (eventDetail['mapLoaded'] === false) {
      //   console.log('mapLoaded false');
      //   this.giParams = undefined;
      // }
    }
    if (eventDetail['mapOutputId'] === 'mapMoveEnd') {
      console.log('mapMoveEnd', eventDetail['mapMoveEnd']);
      this.uploadGeoJson2();
    }
  }

  setCenter(): void {
    this.giParams = {
      giParamId: EElementsParams.SETCENTER,
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
    this.giParams = { giParamId: EElementsParams.GETCENTER };
  }

  testGiParamsArray(): void {
    this.giParams = [
      {
        giParamId: EElementsParams.SETMAPANIMATION,
        active: false,
      },
      {
        giParamId: EElementsParams.GETVISIBLELAYERS,
        active: true,
      },
      {
        giParamId: EElementsParams.SETCENTER,
        epsg: 'EPSG:32632',
        lat: 6942848.280273437,
        lon: 596521.8266601556,
        scale: 2500,
        zoom: 15,
      },
    ];
  }

  showProperty(): void {
    const visParams = {
      giParamId: EElementsParams.SHOWPROPERTY,
      bruksnummer: '289',
      festenummer: '',
      gaardsnummer: '116',
      kommunenummer: '3005',
      seksjonsnummer: '',
    };
    this.giParams = visParams;
  }

  showNeighbors(): void {
    const visParams = {
      giParamId: EElementsParams.SHOWNEIGHBORS,
      bruksnummer: '289',
      festenummer: '',
      gaardsnummer: '116',
      kommunenummer: '3005',
      seksjonsnummer: '',
    };
    this.giParams = visParams;
  }

  hideMarker(): void {
    this.giParams = { giParamId: EElementsParams.HIDEMARKER };
  }

  removeSelection(): void {
    this.giParams = {
      giParamId: EElementsParams.DEACTIVATESHOWNEIGHBORS,
    };
  }

  mapOutputData(data: any): void {
    console.log('MAP OUTPUT DATA: ', data);
    if (data['mapOutputId'] === 'mapLoaded') {
      if (data['mapLoaded'] === true) {
        const map = document.getElementById('map');
        if (map) {
          map.style.height = '800px';
        }
      }
    }
  }

  getMapLayers(): void {
    this.giParams = { giParamId: EElementsParams.GETMAPLAYERS };
  }

  getVisibleLayers(): void {
    this.giParams = {
      giParamId: EElementsParams.GETVISIBLELAYERS,
      active: true,
    };
  }

  showLayer(): void {
    this.giParams = {
      giParamId: EElementsParams.SHOWLAYER,
      guid: '4549-456c-db37-2e8d',
    };
  }

  showLayerByName(): void {
    this.giParams = {
      giParamId: EElementsParams.SHOWLAYERBYNAME,
      name: 'test',
    };
  }

  hideLayer(): void {
    this.giParams = {
      giParamId: EElementsParams.HIDELAYER,
      guid: '4549-456c-db37-2e8d',
    };
  }

  hideLayerByName(): void {
    this.giParams = {
      giParamId: EElementsParams.HIDELAYERBYNAME,
      name: 'test',
    };
  }

  showMarkerWhenClick(): void {
    this.giParams = {
      giParamId: EElementsParams.SHOWMARKERWHENCLICK,
      active: true,
      markerColor: 'rgba(34, 215, 141, 1)',
    };
  }

  hideMarkerWhenClick(): void {
    this.giParams = {
      giParamId: EElementsParams.SHOWMARKERWHENCLICK,
      active: false,
    };
  }

  testgiParamsArray(): void {
    this.giParams = [
      {
        giParamId: 'showProperty',
        bruksnummer: '199',
        festenummer: undefined,
        gaardsnummer: '67',
        kommunenummer: '3407',
        seksjonsnummer: undefined,
      },
      {
        giParamId: EElementsParams.GETVISIBLELAYERS,
        active: true,
      } as IActivateParam,
      {
        giParamId: EElementsParams.SHOWLAYER,
        guid: '4549-456c-db37-2e8d',
      } as IShowHideLayer,
    ];
  }

  getClickCoordinates(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETCLICKCOORDINATES,
      active: value,
    } as IActivateParam;
  }

  getPropertyInfo(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETPROPERTYINFO,
      active: value,
    } as IActivateParam;
  }

  getPointInfo(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETPOINTINFO,
      active: value,
    } as IActivateParam;
  }

  hideAllVisibleLayers(): void {
    this.giParams = {
      giParamId: EElementsParams.HIDEALLVISIBLELAYERS,
    };
  }

  showLayers(): void {
    this.giParams = {
      giParamId: EElementsParams.SHOWLAYERS,
      guids: ['4549-456c-db37-2e8d', '1c52-abde-4553-e879'],
    } as IShowLayers;
  }

  resizeMap(): void {
    this.giParams = { giParamId: EElementsParams.RESIZEMAP };
  }

  getObjectGeometry(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETOBJECTGEOMETRY,
      active: value,
    } as IActivateParam;
  }

  mapAnimation(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.SETMAPANIMATION,
      active: value,
    } as IActivateParam;
  }

  getProjectConfig(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETPROJECTCONFIG,
      active: value,
    } as IActivateParam;
  }

  // getSaksInfo(): void {
  //   this.showFeatureInfoChart = true;
  //   this.giParams = {
  //     giParamId: EElementsParams.GETSAKSINFO,
  //     knr: '3407',
  //     planid: '0453',
  //   } as ISaksInfoParam;
  // }

  setExtent(): void {
    this.giParams = {
      giParamId: EElementsParams.SETEXTENT,
      epsg: 'EPSG:32632',
      extent: [
        599241.9651565553, 6743969.178014754, 601538.7405471803,
        6745581.019811629,
      ],
    } as IExtent;
  }

  getExtent(): void {
    this.giParams = { giParamId: EElementsParams.GETEXTENT };
  }

  setCenter1(): void {
    this.giParams = {
      giParamId: EElementsParams.SETCENTER,
      epsg: 'EPSG:32632',
      lat: 6942848.280273437,
      lon: 596521.8266601556,
      scale: 2500,
      zoom: 12,
      showMarker: true,
    } as IMapCenter;
  }

  uploadGeoJson(): void {
    this.giParams = [
      {
        giParamId: EElementsParams.UPLOADGEOJSON,
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
      } as IUploadGeoJson,
    ];
  }

  uploadGeoJsonCopy(): void {
    this.giParams = [
      {
        giParamId: EElementsParams.UPLOADGEOJSON,
        layerName: 'test',
        features: JSON.stringify(geojsonTest),
        jsonStyle: JSON.stringify(jsonStyleTestCopy),
        cluster: true,
        clusterdistance: 30,
        clustercount: true,
        clusterstyleurl:
          'https://test.geoinnsyn.no/services/ISY.GIS.IsyGeoinnsynConfig/api/v2/style?application=demo&name=NorconsultOffices',
        featureInfoElements: JSON.stringify(geoJsonFeatureInfoTest),
        featureInfoTitle: 'Feature Info Name',
        layerOrder: -99,
      } as IUploadGeoJson,
    ];
  }

  uploadGeoJson2(): void {
    this.giParams = [
      {
        giParamId: EElementsParams.UPLOADGEOJSON,
        layerName: 'test2',
        features: JSON.stringify(geojsonTest1),
        jsonStyle: JSON.stringify(jsonStyleTest),
        cluster: false,
        clusterdistance: 8,
        clustercount: false,
        clusterstyleurl:
          'https://test.geoinnsyn.no/services/ISY.GIS.IsyGeoinnsynConfig/api/v2/style?application=demo&name=NorconsultOffices',
        featureInfoElements: JSON.stringify(geoJsonFeatureInfoTest),
        featureInfoTitle: 'Feature Info Name',
      } as IUploadGeoJson,
    ];
  }

  uploadGeoJsonRoute(): void {
    this.giParams = [
      {
        giParamId: EElementsParams.UPLOADGEOJSON,
        layerName: 'routeTest',
        features: JSON.stringify(routeGeoJson),
        jsonStyle: JSON.stringify(jsonStyleTest),
        cluster: false,
        clusterdistance: 30,
        clustercount: false,
        featureInfoElements: JSON.stringify(geoJsonFeatureInfoTest),
        featureInfoTitle: 'Feature Info Name',
      } as IUploadGeoJson,
    ];
  }

  // removeDrawingGeoJson(): void {
  //   this.giParams = {
  //     giParamId: EElementsParams.REMOVEDRAWINGGEOJSON,
  //   };
  // }

  zoomOut(): void {
    setTimeout(() => {
      this.giParams = { giParamId: EElementsParams.ZOOMOUT };
    });
  }

  getChosenSearchResult(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GETCHOSENSEARCHRESULT,
      active: value,
    } as IActivateParam;
  }

  transformCoordinates(): void {
    this.giParams = {
      giParamId: EElementsParams.GETTRANSFORMCOORDINATES,
      fromEpsg: 'EPSG:32632',
      toEpsg: 'EPSG:4326',
      coordinates: [562247.0545959469, 6630364.923614501],
    } as ITransformCoordinates;
  }

  mapMoveStartActive(): void {
    this.giParams = {
      giParamId: EElementsParams.GETMAPMOVESTART,
      active: true,
    } as IActivateParam;
  }

  mapMoveEndActive(): void {
    this.giParams = {
      giParamId: EElementsParams.GETMAPMOVEEND,
      active: true,
    } as IActivateParam;
  }

  removeLayer(): void {
    this.giParams = {
      giParamId: EElementsParams.REMOVELAYER,
      name: 'test',
    } as IRemoveLayer;
  }

  removeLayers(): void {
    this.giParams = {
      giParamId: EElementsParams.REMOVELAYERS,
      names: ['test', 'test2'],
    } as IRemoveLayers;
  }

  geolocation(value: boolean): void {
    this.giParams = {
      giParamId: EElementsParams.GEOLOCATION,
      active: value,
    } as IActivateParam;
  }

  showDrawTool(value: boolean): void {
    this.giParamsDraw = {
      giParamId: EElementsParams.SHOWDRAWTOOLUI,
      show: value,
      drawPanels: [EDrawPanelId.POINT, EDrawPanelId.LINE, EDrawPanelId.POLYGON]
    };
  }

  startDraw(): void {
    const draw = {
      giParamId: EElementsParams.STARTDRAW,
      type: EGeometryType.LINE,
      snapGuides: false
    };
    this.giParamsDraw = draw;
  }

  modifyDraw(): void {
    const draw = {
      giParamId: EElementsParams.MODIFYDRAW,
      // type: EGeometryType.LINE
    };
    this.giParamsDraw = draw;
  }

  changeDraw(): void {
    const draw = {
      giParamId: EElementsParams.MODIFYDRAW,
      style: {
        fill: {
          color: "rgba(0,0,0,1)"
        },
        stroke: {
          color: "rgba(245,166,35,1)",
          width: 2,
          lineDash: [10, 10]
        },
        image: {
          radius: 7,
          fill: {
            color: "rgba(245,166,35,1)"
          }
        },
      },
    };
    this.giParamsDraw = draw;
  }

  removeSelectedObject(): void {
    const draw = {
      giParamId: EElementsParams.REMOVESELECTEDOBJECT,
      // mode: EMode.REMOVE,
    };
    this.giParamsDraw = draw;
  }

  removeAllDrawings(): void {
    const draw = {
      giParamId: EElementsParams.REMOVEALLDRAWINGS,
      // mode: EMode.REMOVEALL,
    };
    this.giParamsDraw = draw;
  }

  stopDraw(): void {
    const stopDraw = {
      giParamId: EElementsParams.STOPDRAW,
    }
    this.giParamsDraw = stopDraw;
  }

  uploadDrawingGeoJson(): void {
    const TASKS = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [10.424242651312149, 63.43525321967451],
          },
          properties: {
            style: {
              fill: { color: 'rgba(0,0,0,0.75)' },
              stroke: { color: 'rgba(0,0,0,1)', width: 2 },
              image: { radius: 7, fill: { color: 'rgba(0,0,0,1)' } },
              text: '',
              textSize: 16,
            },
          },
          id: '3d34a05a-6e26-6943-10e7-ba8a3e48ba34',
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [10.402755653274973, 63.431979217703535],
          },
          properties: {
            style: {
              fill: { color: 'rgba(0,0,0,0.75)' },
              stroke: { color: 'rgba(0,0,0,1)', width: 2 },
              image: { radius: 7, fill: { color: 'rgba(0,0,0,1)' } },
              text: '',
              textSize: 16,
            },
          },
          id: 'e4a5c347-6d40-9d5f-eaaf-4a534483287b',
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [10.38908582574433, 63.432112651326385],
          },
          properties: {
            style: {
              fill: { color: 'rgba(0,0,0,0.75)' },
              stroke: { color: 'rgba(0,0,0,1)', width: 2 },
              image: { radius: 7, fill: { color: 'rgba(0,0,0,1)' } },
              text: '',
              textSize: 16,
            },
          },
          id: 'd11948e0-10bc-e63b-aa13-d446f2b3ecd3',
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [10.393829001109438, 63.43581773195873],
              [10.393475707073044, 63.428546193721324],
              [10.409482783683933, 63.42996028063373],
              [10.409807425271936, 63.43548755392117],
              [10.401569136624744, 63.43556852482524],
            ],
          },
          properties: {
            measurement: '2644.87 m',
            style: {
              fill: { color: 'rgba(0,0,0,1)' },
              stroke: { color: 'rgba(74,144,226,1)', width: 2 },
              image: { radius: 7, fill: { color: 'rgba(74,144,226,1)' } },
              text: '',
              textSize: 16,
            },
          },
          id: '44b267b9-f6da-5616-bbcc-3238bb22a3bd',
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [10.379584985990343, 63.43172353573288],
                [10.355928122408958, 63.42752197542931],
                [10.38423925261085, 63.42667443917932],
                [10.381005271040024, 63.42877164793275],
                [10.379584985990343, 63.43172353573288],
              ],
            ],
          },
          properties: {
            measurement: '366219.15 m²',
            style: {
              fill: { color: 'rgba(208,2,27,1)' },
              stroke: { color: 'rgba(208,2,27,1)', width: 2 },
              image: { radius: 7, fill: { color: 'rgba(208,2,27,1)' } },
              text: '',
              textSize: 16,
            },
          },
          id: '18e30c6f-cbcd-c7d6-3d6e-21201082028d',
        },
      ],
    };
    const uploadDrawingGeoJson = {
      giParamId: EElementsParams.UPLOADDRAWINGGEOJSON,
      data: JSON.stringify(TASKS),
    } as IUploadDrawingGeoJson;
    this.giParamsDraw = uploadDrawingGeoJson;
  }

  downlaodDrawingGeoJson(): void {
    const downloadDrawingGeoJson = {
      giParamId: EElementsParams.DOWNLOADDRAWINGGEOJSON,
    };
    this.giParamsDraw = downloadDrawingGeoJson;
  }
}
