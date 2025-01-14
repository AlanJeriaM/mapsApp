import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;
  public lngLat: LngLat = new LngLat(-71.30861695051603, -33.603413310387545)

  ngAfterViewInit(): void {

    if ( !this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.lngLat, // starting position [lng, lat]
    zoom: 10, // starting zoom
  });

  const marker = new Marker()
    .setLngLat( this.lngLat)
    .addTo( this.map);
}


}
