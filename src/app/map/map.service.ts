import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { MapComponent } from './map.component';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private componentRefs: Map<number, ComponentRef<MapComponent>> = new Map();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createComponent(container?: ViewContainerRef, id?: number, activateParam?: any, mapId?: string): ComponentRef<MapComponent> {
    if (!container || id === undefined || mapId === undefined) {
      throw new Error('Container not found or id is undefined!');
    }
    if (this.componentRefs.has(id)) {
      // Return the existing component reference
      const component = this.componentRefs.get(id)!; // Add '!' to assert that it is not undefined
      if (activateParam) component.instance.activateParam = activateParam;
      return component;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MapComponent);
    const componentRef = container.createComponent(componentFactory);
    componentRef.instance.id = id;
    componentRef.instance.activateParam = activateParam;
    componentRef.instance.mapId = mapId;
    this.componentRefs.set(id, componentRef);
    return componentRef;
  }

  destroyComponent(id: number): void {
    const componentRef = this.componentRefs.get(id);
    if (componentRef) {
      componentRef.destroy();
      this.componentRefs.delete(id);
    }
  }
}
