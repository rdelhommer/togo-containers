import './styles.css'
import { ITrayData, ITrayConfig, Tray } from '../tray';
import { mount, el, unmount } from 'redom';
import { Button } from '../button';
import { SearchPage } from '../search-page';
import { AboutPage } from '../about-page';
import { DetailsPage, IDetailsPageData } from '../details-page';
import { IRedomComponent } from '../interfaces';

export interface ITabTrayData extends ITrayData {
  selectedTab?: string;
  pageData?: IDetailsPageData
}

export interface ITabTrayConfig extends ITrayConfig {
}

export class TabTray extends Tray {
  tabButtons: Button[]
  currentPage: DetailsPage | AboutPage | SearchPage;
  pageMap: { [key: string]: DetailsPage | AboutPage | SearchPage }

  constructor(config?: ITabTrayConfig) {
    super(config);

    unmount(this.tray, this.trayCloser)
    
    this.tabButtons = [
      new Button({ 
        icon: 'icon-search',
        title: 'Search',
        additionalClasses: ['button--tray-tab'],
        href: '#search',
        onClick: (e) => {
          this.update({ isOpen: true })
        }
      }),
      new Button({ 
        icon: 'icon-info',
        title: 'About',
        additionalClasses: ['button--tray-tab'],
        href: '#about',
        onClick: (e) => {
          this.update({ isOpen: true })
        }
      }),
      new Button({ 
        icon: 'icon-spoon-knife',
        title: 'Restaurant Detail',
        additionalClasses: ['button--tray-tab'],
        href: '#detail',
        onClick: (e) => {
          this.update({ isOpen: true })
        }
      })
    ]

    this.el.classList.add('tray--tabbed')
    this.pageMap = {
      '#detail': new DetailsPage(),
      '#about': new AboutPage(),
      '#search': new SearchPage()
    }
  }

  private setCurrentTab(pageData) {
    this.tabButtons.forEach(x => {
      if (x.el.href === window.location.href) {
        x.el.classList.add('button--tray-tab--selected');
      } else {
        x.el.classList.remove('button--tray-tab--selected');
      }
    })

    Object.keys(this.pageMap).forEach(k => {
      if (k === window.location.hash) {
        this.pageMap[k].el.classList.add('tray--tabbed__page--visible')
        this.currentPage = this.pageMap[k]

        this.currentPage.update(pageData);
      } else {
        this.pageMap[k].el.classList.remove('tray--tabbed__page--visible')
      }
    })

    if (!window.location.hash) {
      this.currentPage = null;
    }
  }

  onmount() {
    let closerContainer = el('div.tab-tray__closer-container', this.trayCloser)
    let buttonContainer = el('div.tab-tray__button-container', 
      [ el('div.tab-tray__button-container--tabs', this.tabButtons) ]
    )
    let trayContainer = el('div.tab-tray__page-container')

    mount(this.tray, buttonContainer)
    mount(this.tray, closerContainer)
    mount(this.tray, trayContainer)

    this.trayCloser.el.classList.add('button--tray-tab')

    Object.keys(this.pageMap).forEach(k => {
      mount(trayContainer, this.pageMap[k])
    })

    if (window.location.hash) {
      this.update({ isOpen: true })
    } else {
      this.setCurrentTab(null);
    }
  }

  update(data: ITabTrayData) {
    let isOpening = this.isOpen !== data.isOpen

    super.update(data);

    setTimeout(() => {
      if (data.selectedTab) {
        window.location.hash = data.selectedTab

        setTimeout(() => {
          this.setCurrentTab(data.pageData);
        }, 10)
      } else {
        this.setCurrentTab(data.pageData);
      }
    }, isOpening ? 100 : 10);
  }
}