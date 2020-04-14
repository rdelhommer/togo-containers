import { el, setAttr } from 'redom';
import { IRedomComponent } from '../interfaces';
import './styles.css';

export interface IOverlayData {
  content: string;
  visible: boolean;
}

export class Overlay implements IRedomComponent {
  el: HTMLElement;

  constructor() {
    this.el = el("div.overlay.overlay--hidden")
  }

  update(data: IOverlayData) {
    if (data.visible) {
      this.el.textContent = data.content;
      setAttr(this.el, 'aria-hidden', 'false');
      this.el.classList.add('overlay--visible');
      this.el.classList.remove('overlay--hidden');
    } else {
      this.el.textContent = null;
      setAttr(this.el, 'aria-hidden', 'true');
      this.el.classList.add('overlay--hidden');
      this.el.classList.remove('overlay--visible');
    }
  }
}