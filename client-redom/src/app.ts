import { el, RedomComponent } from 'redom';
import { Overlay } from './components/overlay';
import { Map } from './components/map';

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

      this.locations = [{
        lat: 45.524071,
        lng: -122.583747
      }]
  }

  onmount() {
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