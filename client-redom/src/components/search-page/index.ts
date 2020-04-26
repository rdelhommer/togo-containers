import { el } from 'redom';
import './styles.css';
import { IRedomComponent } from '../interfaces';

export class SearchPage implements IRedomComponent {
  el: HTMLElement

  constructor() {
    this.el = el(`div.tray--tabbed__page.tray--tabbed__page--search`, 'Search')
  }

  update(data) {
  }
}
