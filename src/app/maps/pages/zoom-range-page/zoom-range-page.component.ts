import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { Map, LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {



  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom = 10;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-71.30861695051603, -33.603413310387545)

  ngAfterViewInit(): void {

    if ( !this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.lngLat, // starting position [lng, lat]
    zoom: this.zoom, // starting zoom
  });

  this.mapListeners();
}


ngOnDestroy(): void {
  this.map?.remove();
}

mapListeners(){
  if (!this.map) throw 'mapa no inicializado';

  this.map.on('zoom', (ev)=>{
    this.zoom = this.map!.getZoom();
  });

  this.map.on('zoomend', (ev)=>{
    if ( this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
  });

  this.map.on('move', () => {
    this.lngLat = this.map!.getCenter();
    const {lng , lat} = this.lngLat;
    console.log({lng, lat});


  })
}

zoomIn(){
  this.map?.zoomIn();
}

zoomOut(){
  this.map?.zoomOut();
}

zoomChanged( value: string){
  this.zoom = Number(value);
  this.map?.zoomTo(this.zoom);
}

}

