import { el, setAttr } from 'redom';
import './styles.css';

export interface IButtonOptions {
  text?: string;
  icon?: string;
  onClick?: (e: MouseEvent) => void;
  title: string;
  additionalClasses?: string[]
  href?: string;
}

export class Button {
  el: HTMLAnchorElement & HTMLButtonElement

  constructor(options?: IButtonOptions) {
    let buttonTextContainer: HTMLSpanElement
    let additionalClassesString = options.additionalClasses?.join('.') || ''
    let element = options.href ? 'a' : 'button'

    this.el = el(
      `${element}.button.${additionalClassesString}`,
        el(`i.${options.icon}`, { 'aria-hidden': true }),
        buttonTextContainer = options.text ? el('span') : null
    ) as HTMLAnchorElement & HTMLButtonElement;

    setAttr(this.el, 'title', options.title)

    if (options.href) {
      this.el.href = options.href
    }
    
    if (buttonTextContainer) {
      buttonTextContainer.textContent = options.text;
    }

    this.el.onclick = (e) => {
      options.onClick(e);
    };

    // This prevents the map from zooming
    this.el.ondblclick = (e) => {
      e.stopPropagation();
    }
  }
}
