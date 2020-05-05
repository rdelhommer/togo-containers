import { el, setChildren } from 'redom';
import './styles.css';
import { IRedomComponent } from '../interfaces';
import { RestaurantRead } from 'express-react-ts-starter-shared';
import { Menu } from '../menu';

export interface IDetailsPageData {
  restaurant: RestaurantRead.IRestaurant
}

export class DetailsPage implements IRedomComponent {
  el: HTMLElement
  cachedData: IDetailsPageData
  menu: Menu

  constructor() {
    this.el = el(`div.tray--tabbed__page.tray--tabbed__page--details`, 'Details')
  }

  // TODO: add disclaimer that some paper and plant fiber containers can be composted at home
  update(data: IDetailsPageData) {
    let dataToUse = data || this.cachedData

    if (!dataToUse) {
      setChildren(this.el, [el('p', 'Please select a restaurant to see more information')]);
    } else {
      this.menu = new Menu();
      this.menu.update({ menuItems: dataToUse.restaurant.menuItems })
      let content = [
        el('h2', dataToUse.restaurant.name),
        el('div.restaurant-popup__address', [
          el('h3', 'Address'),
          el('p', [
            dataToUse.restaurant.address.street,
            el('br'),
            `${dataToUse.restaurant.address.city}, ${dataToUse.restaurant.address.state} ${dataToUse.restaurant.address.zip}`
          ])
        ]),
        this.menu.el
      ]
  
      setChildren(this.el, content);
    }

    this.cachedData = dataToUse;
  }
}
