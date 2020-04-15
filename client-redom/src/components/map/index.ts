import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import * as L from 'leaflet';
import { IRedomComponent } from '../interfaces';
import { el } from 'redom';
import './styles.css'

export interface IMapData {
  center: [number, number]
}

export class Map implements IRedomComponent {
  el: HTMLElement
  map: L.Map;
  center: [number, number] = [51.508, -0.11]

  constructor() {
    this.el = el("div.map")
  }

  onmount() {
    this.map = L.map(this.el).setView(this.center, 11);

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'osm.test'
    }).addTo(this.map);
    
    this.randomSeed();
  }

  randomSeed() {
    for (let i = 0; i < 100; i++) {
      let markerType = Math.floor(Math.random() * 8)
      let loc: [number, number] = [this.center[0] + (((Math.random() * 12) - 6) * 0.01), this.center[1] + (((Math.random() * 12) - 6) * 0.01)]
      switch (markerType) {
        case 0:
        case 1:
        case 2:
        case 3:
          L.marker(loc).addTo(this.map)
          break;
        case 4:
        case 5:
          L.marker(loc).addTo(this.map)
          break;
        case 6:
          L.marker(loc).addTo(this.map)
          break;
        case 7:
          L.marker(loc).addTo(this.map)
          break;
      }
    }
  }
}