export interface IMapCenter {
  giParamId?: string;
  epsg: string;
  lat: number;
  lon: number;
  scale?: number;
  zoom: number;
  showMarker: boolean;
  markerColor?: string; 
}

export class MapSetCenter implements IMapCenter {
  epsg: string;
  lat: number;
  lon: number;
  scale?: number;
  zoom: number;
  showMarker: boolean;
  constructor(lon: number, lat: number, epsg: string, zoom: number, showMarker: boolean) {
    this.lon = lon;
    this.lat = lat;
    this.epsg = epsg;
    this.zoom = zoom;
    this.showMarker = showMarker;
  }
}

export interface IMapProperty {
  giParamId: string;
  bruksnummer: string;
  festenummer: string;
  gaardsnummer: string;
  kommunenummer: string;
  seksjonsnummer: string;
}

export class MapShowProperty implements IMapProperty {
  giParamId: string;
  bruksnummer: string;
  festenummer: string;
  funksjon: string;
  gaardsnummer: string;
  kommunenummer: string;
  seksjonsnummer: string;
  constructor(showPropertyParam: IMapProperty) {
    this.giParamId = showPropertyParam.giParamId;
    this.bruksnummer = showPropertyParam.bruksnummer;
    this.festenummer = showPropertyParam.festenummer;
    this.funksjon = 'viseiendom';
    this.gaardsnummer = showPropertyParam.gaardsnummer;
    this.kommunenummer = showPropertyParam.kommunenummer;
    this.seksjonsnummer = showPropertyParam.seksjonsnummer;
  }
}

export interface IShowHideLayer {
  giParamId: string;
  guid: string;
}

export interface IShowHideLayerByName {
  giParamId: string;
  name: string;
}

export interface IShowLayers {
  giParamId: string;
  guids: string[];
}

export interface IActivateParam {
  giParamId: string;
  active: boolean;
}

export interface IHide {
  giParamId: string;
  hide: boolean;
}

export type IRemoveLayer = IRemoveLayerByGuid | IRemoveLayerByName;
export type IRemoveLayers = IRemoveLayerByGuids | IRemoveLayerByNames;

export interface IRemoveLayerByGuid {
  giParamId: string;
  guid: string;
  name?: string;
}

export interface IRemoveLayerByName {
  giParamId: string;
  guid?: string;
  name: string;
}

export interface IRemoveLayerByGuids {
  giParamId: string;
  guids: string[];
  names?: string[];
}

export interface IRemoveLayerByNames {
  giParamId: string;
  guids?: string[];
  names: string[];
}

export interface IClickPixelTolerance {
  giParamId: string;
  clickPixelTolerance: number;
}

export interface IPopoverParams {
  giParamId: string;
  layerName: string;
  template: string;
  popoverColor: string;
}

export interface ILanguage {
  giParamId: string;
  language: string;
}

export interface IShowMarker {
  giParamId: string;
  active: boolean;
  markerColor: string;
}

export interface ISaksInfoParam {
  giParamId: string;
  knr: string;
  planid: string;
}
export interface IExtent {
  giParamId: string;
  epsg?: string;
  extent?: number[];
}

export interface IUploadGeoJson {
  giParamId: string;
  layerName: string;
  features: string;
  jsonStyle?: string;
  featureInfoElements?: string;
  featureInfoTitle?: string;
  version?: string;
  typeName?: string;
  cluster?: boolean;
  clustercount?: boolean;
  clusterdistance?: number;
  clusterstyleurl?: string;
  layerOrder?: number;
}

export interface IUploadDrawingGeoJson {
  giParamId: string;
  data: any;
}

export interface IJwt {
  giParamId: string;
  token: string;
}

export interface ITransformCoordinates {
  giParamId: string;
  fromEpsg: string;
  toEpsg: string;
  coordinates: number[];
}

export interface IGeolocation {
  giParamId: string;
  active: boolean;
  accuracyCircleFillColor?: string;
  geolocationImageSrc?: string;
  geolocationImageScale?: number;
}
