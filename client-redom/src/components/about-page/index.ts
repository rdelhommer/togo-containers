import { el } from 'redom';
import './styles.css';
import { IRedomComponent } from '../interfaces';

export class AboutPage implements IRedomComponent {
  el: HTMLElement

  constructor() {
    this.el = el(`div.tray--tabbed__page.tray--tabbed__page--about`, 'About')
  }
}
