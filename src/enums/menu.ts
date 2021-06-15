import ahiru from '../assets/images/ahiru.jpg';
import swan from '../assets/images/swan.jpg';
import usagi from '../assets/images/usagi.jpg';
import wani from '../assets/images/wani.jpg';

export type MenuType = {
  key: string,
  path: string,
  title: { cn: string, en: string },
  index: number,
  img?: { src: string, alt: string },
};

class Menu {
  public static get HOME(): MenuType {
    return {
      key: 'home',
      path: '/home',
      title: {
        cn: '橘域',
        en: `Suzy's Feild`,
      },
      index: 0,
    };
  }

  public static get ABOUT(): MenuType {
    return {
      key: 'about',
      path: '/about',
      title: {
        cn: '关于我',
        en: 'About',
      },
      img: {src: usagi, alt: 'suzy-field-usagi'},
      index: 1,
    };
  }
  
  public static get FEE(): MenuType {
    return {
      key: 'fe-e',
      path: '/fe-e',
      title: {
        cn: '前端开发',
        en: 'Front-End Development',
      },
      img: {src: wani, alt: 'suzy-field-wani'},
      index: 2,
    };
  }
  
  public static get PHOTOGRAPHY(): MenuType {
    return {
      key: 'photography',
      path: '/photography',
      title: {
        cn: '摄影作品',
        en: 'Photography',
      },
      img: {src: ahiru, alt: 'suzy-field-ahiru'},
      index: 3,
    };
  }
  
  public static get READING_MUSIC(): MenuType {
    return {
      key: 'reading-and-music',
      path: '/reading-and-music',
      title: {
        cn: '阅读&音乐',
        en: 'Reading&Music',
      },
      img: {src: swan, alt: 'suzy-field-swan'},
      index: 4,
    };
  }
}

export default Menu;

export const menuList: MenuType[] = [
  Menu.HOME,
  Menu.ABOUT,
  Menu.FEE,
  Menu.PHOTOGRAPHY,
  Menu.READING_MUSIC,
];
