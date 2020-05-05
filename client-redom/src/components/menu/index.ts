import { el, setChildren, List, list } from 'redom';
import './styles.css';
import { IRedomComponent } from '../interfaces';
import { RestaurantRead } from 'express-react-ts-starter-shared';

export class MenuItem {
  el: HTMLElement

  constructor() {
    this.el = el("li");
  }

  update(data: RestaurantRead.IMenuItem) {
    let containerTitle = data.container?.additionalInfo
      ? `Container - ${data.container.additionalInfo}`
      : 'Container'

    let extraTitle = data.extra?.additionalInfo
      ? `Extra - ${data.extra.additionalInfo}`
      : 'Extra'

    let lidTitle = data.lid?.additionalInfo
      ? `Lid - ${data.lid.additionalInfo}`
      : 'Lid'

    setChildren(this.el, [
      el('div', [
        el('h4', data.name),
        el('h5', containerTitle),
        el('p', `${data.container.disposalMethod} - ${data.container.material}`),
        !!data.lid && el('h5', lidTitle),
        !!data.lid && el('p', `${data.lid.disposalMethod} - ${data.lid.material}`),
        !!data.extra && el('h5', extraTitle),
        !!data.extra && el('p', `${data.extra.disposalMethod} - ${data.extra.material}`),
      ])
    ])
  }
}

export interface IMenuData {
  menuItems: RestaurantRead.IMenuItem[]
}

export class Menu implements IRedomComponent {
  el: HTMLElement
  cachedData: IMenuData
  list: List

  constructor() {
    this.el = el(`div.menu`)
  }

  update(data: IMenuData) {
    this.list = list('ul', MenuItem);

    let content = [
      el('h3', 'Menu'),
      this.list
    ]

    this.list.update(data.menuItems)

    setChildren(this.el, content);
  }
}
