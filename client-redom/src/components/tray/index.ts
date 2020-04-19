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
  hasOverlay: boolean
}

export class Tray implements IRedomComponent {
  el: HTMLElement
  tray: HTMLElement
  overlay: Overlay
  trayCloser: Button
  isOpen: boolean

  constructor(config?: ITrayConfig) {
    let orientationClass = config?.orientation ? '.tray--' + config.orientation : ''

    this.el = 
      el(`div.tray-container${orientationClass}`,
        this.overlay = config?.hasOverlay ? new Overlay(): null,
        this.tray = el(`div.tray.tray--closed`, 
          this.trayCloser = new Button({ 
            icon: 'icon-arrow-right2',
            title: 'Collapse Panel',
            href: '#',
            onClick: () => {
              this.update({ isOpen: false })
            }
          })),
      )

    this.trayCloser.el.classList.add('tray__closer')
  }

  update(data?: ITrayData) {
    if (data.isOpen === this.isOpen) return

    if (data.isOpen) {
      setAttr(this.tray, 'aria-expanded', 'true');
      this.tray.classList.add('tray--open');
      this.tray.classList.remove('tray--closed');

      this.overlay?.update({ visible: true })
    } else {
      setAttr(this.tray, 'aria-expanded', 'false');
      this.tray.classList.add('tray--closed');
      this.tray.classList.remove('tray--open');
      
      this.overlay?.update({ visible: false })
    }

    this.isOpen = data.isOpen
  }
}