import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import * as L from 'leaflet';
import { IRedomComponent } from '../interfaces';
import { el } from 'redom';
import './styles.css'
import { RestaurantRead } from 'express-react-ts-starter-shared';
import { TabTray } from '../tab-tray';

export interface IMapData {
  center?: [number, number]
  restaurants?: RestaurantRead.IRestaurant[]
  overwriteExisting?: boolean
}

export class Map implements IRedomComponent {
  el: HTMLElement
  mapEl: HTMLElement
  map: L.Map
  currentMarkers: L.Marker[] = []
  tray: TabTray

  constructor() {
    this.el = 
      el("div.map-container",
        this.mapEl = el('div.map'),
        this.tray = new TabTray()
      )
  }

  onmount() {
    this.map = L.map(this.mapEl)

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'osm.test'
    }).addTo(this.map);
  }

  update(data: IMapData) {
    this.map.setView(data.center, 11);

    if (data.overwriteExisting) {
      this.currentMarkers.forEach(x => {
        this.map.removeLayer(x)
      })

      this.currentMarkers = []
    }

    data.restaurants.forEach(x => {
      let marker = L.marker(x.latLng).addTo(this.map)
      
      marker.on('click', () => {
        this.tray.update({
          isOpen: true,
          selectedTab: '#detail',
          pageData: { restaurant: x }
        })
      });

      this.currentMarkers.push(marker)
    });
  }

}