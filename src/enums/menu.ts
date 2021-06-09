import ahiru from '../assets/images/ahiru.jpg';
import kangaroo from '../assets/images/kangaroo.jpg';
import risu from '../assets/images/risu.jpg';
import swan from '../assets/images/swan.jpg';
import usagi from '../assets/images/usagi.jpg';
import wani from '../assets/images/wani.jpg';

export type MenuType = {
  key: string,
  path: string,
  title: string,
  index: number,
  img?: { src: string, alt: string },
};

class Menu {
  public static get HOME(): MenuType {
    return {
      key: 'home',
      path: '/home',
      title: `Suzy's Feild`,
      index: 0,
    };
  }

  public static get ABOUT(): MenuType {
    return {
      key: 'about',
      path: '/about',
      title: 'About',
      img: {src: usagi, alt: 'suzy-field-usagi'},
      index: 1,
    };
  }
  
  public static get FEE(): MenuType {
    return {
      key: 'fe-e',
      path: '/fe-e',
      title: 'Front-End Engineer',
      img: {src: wani, alt: 'suzy-field-wani'},
      index: 2,
    };
  }
  
  public static get PHOTOGRAPHY(): MenuType {
    return {
      key: 'photography',
      path: '/photography',
      title: 'Photography',
      img: {src: ahiru, alt: 'suzy-field-ahiru'},
      index: 3,
    };
  }
  
  public static get MUSIC(): MenuType {
    return {
      key: 'music',
      path: '/music',
      title: 'Music',
      img: {src: kangaroo, alt: 'suzy-field-kangaroo'},
      index: 4,
    };
  }
  
  public static get READING(): MenuType {
    return {
      key: 'reading',
      path: '/reading',
      title: 'Reading',
      img: {src: risu, alt: 'suzy-field-risu'},
      index: 5,
    };
  }
  
  public static get SIMPLE_LIFE(): MenuType {
    return {
      key: 'simple-life',
      path: '/simple-life',
      title: 'Simple Life',
      img: {src: swan, alt: 'suzy-field-swan'},
      index: 6,
    };
  }
}

export default Menu;

export const menuList: MenuType[] = [
  Menu.HOME,
  Menu.ABOUT,
  Menu.FEE,
  Menu.PHOTOGRAPHY,
  Menu.MUSIC,
  Menu.READING,
  Menu.SIMPLE_LIFE,
];
