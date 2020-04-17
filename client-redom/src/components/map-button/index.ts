import * as L from 'leaflet';
import { el } from 'redom';
import './styles.css';

export interface IMapButtonOptions extends L.ControlOptions {
  text: string;
  icon: string;
  onClick: () => void;
}

export class MapButton {
  leafletControl: L.Control

  constructor(options?: IMapButtonOptions) {
    let ctor = L.Control.extend({
      onAdd: function(map) {
        let buttonTextContainer: HTMLSpanElement;

        let ret = el(
          'button.map-button',
            el(`i.${options.icon}`, { 'aria-hidden': true }),
            buttonTextContainer = el('span')
        );
        buttonTextContainer.textContent = options.text;

        ret.onclick = () => {
          options.onClick();
        };

        // This prevents the map from zooming
        ret.ondblclick = (e) => {
          e.stopPropagation();
        }

        return ret;
      },
    
      onRemove: function(map) {
          // Nothing to do here
      }
    });

    this.leafletControl = new ctor(options);
  }
}
