import { IRedomComponent } from '../interfaces';
import { el, setAttr } from 'redom';
import './styles.css'
import { Overlay } from '../overlay';
import { Button } from '../button';

export interface ITrayData {
  isOpen: boolean
}

export interface ITrayConfig {
  orientation: 'left' | 'right' | 'up' | 'down'
}

export class Tray implements IRedomComponent {
  el: HTMLElement
  tray: HTMLElement
  overlay: Overlay
  trayCloser: Button

  constructor(config?: ITrayConfig) {
    let orientationClass = config?.orientation ? '.tray--' + config.orientation : ''

    this.el = 
      el(`div.tray-container${orientationClass}`,
        this.overlay = new Overlay(),
        this.tray = el(`div.tray.tray--closed`, 
          this.trayCloser = new Button({ 
            icon: 'icon-plus',
            onClick: () => {
              this.update({ isOpen: false })
            }
          })),
      )

    this.trayCloser.el.classList.add('tray__closer')
  }

  onmount() {
    
  }

  update(data?: ITrayData) {
    if (data.isOpen) {
      setAttr(this.tray, 'aria-expanded', 'true');
      this.tray.classList.add('tray--open');
      this.tray.classList.remove('tray--closed');
      this.overlay.update({ visible: true })
    } else {
      setAttr(this.tray, 'aria-expanded', 'false');
      this.tray.classList.add('tray--closed');
      this.tray.classList.remove('tray--open');
      this.overlay.update({ visible: false })
    }
  }
}