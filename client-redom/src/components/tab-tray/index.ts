import './styles.css'
import { ITrayData, ITrayConfig, Tray } from '../tray';
import { setChildren, mount, el, unmount } from 'redom';
import { Button } from '../button';

export interface ITabTrayData extends ITrayData {
}

export interface ITabTrayConfig extends ITrayConfig {
}

export class TabTray extends Tray {
  tabButtons: Button[]

  constructor(config?: ITabTrayConfig) {
    super(config);

    unmount(this.tray, this.trayCloser)
    
    this.tabButtons = [
      new Button({ 
        icon: 'icon-search',
        title: 'Search',
        onClick: () => {
          this.update({ isOpen: true })
        }
      }),
      new Button({ 
        icon: 'icon-info',
        title: 'About',
        onClick: () => {
          this.update({ isOpen: true })
        }
      }),
      new Button({ 
        icon: 'icon-spoon-knife',
        title: 'Restaurant Detail',
        onClick: () => {
          this.update({ isOpen: true })
        }
      })
    ]

    this.el.classList.add('tray--tabbed')
  }

  onmount() {
    let closerContainer = el('div', this.trayCloser)
    let buttonContainer = el('div.tab-tray__button-container', 
      [ el('div.tab-tray__button-container--tabs', this.tabButtons), closerContainer ]
    )

    mount(this.tray, buttonContainer)

    this.tabButtons.forEach(x => {
      x.el.classList.add('button--tray-tab')
    })

    this.trayCloser.el.classList.add('button--tray-tab')
  }

  update(data: ITabTrayData) {
    super.update(data);
  }
}