import * as L from 'leaflet';
import { el } from 'redom';
import './styles.css';
import { IButtonOptions, Button } from '../button';

export interface IMapButtonOptions extends L.ControlOptions, IButtonOptions {
}

export class MapButton {
  leafletControl: L.Control

  constructor(options?: IMapButtonOptions) {
    let ctor = L.Control.extend({
      onAdd: function(map) {
        let ret = new Button(options);
        ret.el.classList.add('button--map')
        if (!options.text) {
        ret.el.classList.add('button--map--icon-only')
        }

        return ret.el;
      },
    
      onRemove: function(map) {
          // Nothing to do here
      }
    });

    this.leafletControl = new ctor(options);
  }
}
