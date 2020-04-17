import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import * as L from 'leaflet';
import { IRedomComponent } from '../interfaces';
import { el } from 'redom';
import './styles.css'
import { RestaurantRead } from 'express-react-ts-starter-shared';
import { MapButton } from '../map-button';

export interface IMapData {
  center?: [number, number]
  restaurants?: RestaurantRead.IRestaurant[]
  overwriteExisting?: boolean
}

export class Map implements IRedomComponent {
  el: HTMLElement
  map: L.Map
  currentMarkers: L.Marker[] = []

  constructor() {
    this.el = el("div.map")
  }

  onmount() {
    this.map = L.map(this.el)

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'osm.test'
    }).addTo(this.map);

    new MapButton({ 
      position: 'topright',
      icon: 'icon-search',
      text: 'Search',
      onClick: () => {
        console.log('object');
      }
    }).leafletControl.addTo(this.map);

    new MapButton({ 
      position: 'topright',
      icon: 'icon-info',
      text: 'Info',
      onClick: () => {
        console.log('object');
      }
    }).leafletControl.addTo(this.map);
  }

  // TODO: add disclaimer that some paper and plant fiber containers can be composted at home
  private getPopupMarkup(restaurant: RestaurantRead.IRestaurant) {
    return `
      <div class="restaurant-popup">
        <h2 class="restaurant-popup__header">
          ${restaurant.name}
        </h2>

        <div class="restaurant-popup__address">
          <h3>
            Address
          </h3>
          <p>
            ${restaurant.address.street}
            <br/>
            ${restaurant.address.city}, ${restaurant.address.state} ${restaurant.address.zip}
          </p>
        </div>
        <div class="restaurant-popup__menu">
        </div>
      </div>
    `
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
      let marker = L.marker(x.latLng).addTo(this.map).bindPopup(this.getPopupMarkup(x))
      marker.on('click', () => {
        marker.openPopup();
      });

      this.currentMarkers.push(marker)
    });
  }

}