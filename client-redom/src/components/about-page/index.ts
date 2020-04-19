import { el } from 'redom';
import './styles.css';
import { IRedomComponent } from '../interfaces';

export class AboutPage implements IRedomComponent {
  el: HTMLElement

  constructor() {
    this.el = 
      el(`div.tray--tabbed__page.tray--tabbed__page--about`, [
        el(`h2`, `The To-Go Container Project`),
        el('p', 
          `The To-Go Container Project is a map that attempts to catalogue the containers used for 
          to-go orders from restaurants across the United States of America. We record container information 
          for each menu item and additionally provide a composite score for the entire restaurant to help you 
          make informed decisions about the types of containers that your food will be packaged in.`),
        el('p',
        `Data is provided by people like you! A team of volunteers determines how specific containers can be disposed of
        based on the laws and regulations of the municipalities in which each restaurant is located.`),
        el('h3', `Want to contribute?`),
        el('p', [
          `Is your favorite restaurant not on our map?  Email us at `,
          el('a', { href: 'mailto:TODO' }, 'TODO'),
          ` or submit information about or latest order `,
          el('a', { href: 'TODO' }, 'here')
        ])
      ]);
  }
}
