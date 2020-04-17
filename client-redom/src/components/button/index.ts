import { el } from 'redom';
import './styles.css';

export interface IButtonOptions {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

export class Button {
  el: HTMLElement

  constructor(options?: IButtonOptions) {
    let buttonTextContainer: HTMLSpanElement;
    
    this.el = el(
      `button.button`,
        el(`i.${options.icon}`, { 'aria-hidden': true }),
        buttonTextContainer = options.text ? el('span') : null
    );
    
    if (buttonTextContainer) {
      buttonTextContainer.textContent = options.text;
    }

    this.el.onclick = () => {
      options.onClick();
    };

    // This prevents the map from zooming
    this.el.ondblclick = (e) => {
      e.stopPropagation();
    }
  }
}
