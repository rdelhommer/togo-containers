import { el, RedomComponent } from 'redom';
import { Overlay } from './components/overlay';
import { Map } from './components/map';
import { staticData} from './services/static-data';
import './styles.css';

interface ILocation {
  lat: number;
  lng: number;
}

export class App implements RedomComponent {
  data
  el: HTMLElement
  locations: ILocation[]
  overlay: Overlay
  map: Map

  constructor() {
      this.data = [];

      this.el = el(
        "div", 
          this.overlay = new Overlay(),
          this.map = new Map()
      )
  }

  onmount() {
    setTimeout(() => {
      this.map.update({
        center: [45.512230,-122.658722],
        restaurants: staticData
      })
    })
    // setTimeout(() => {
    //   this.overlay.update({ 
    //     visible: true, 
    //     content: 'Loading...'
    //   });

    //   setTimeout(() => {
    //     this.overlay.update({ 
    //       visible: false, 
    //       content: 'Loading...'
    //     });
    //   }, 2000)
    // }, 1000);
  }

  update(data) {
      
  }
}