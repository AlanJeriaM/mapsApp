import { Component } from '@angular/core';


interface MenuItem{
  name: string,
  route: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
      { name: 'FullScreen', route: '/maps/fullscreen' },
      { name: 'Markers', route: '/maps/markers' },
      { name: 'Zoom-Range', route: '/maps/zoom-range' },
      { name: 'Houses'    , route: '/maps/properties' },
  ];



}
