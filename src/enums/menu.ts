class Menu {
  public static get ABOUT(): { key: string, title: string } {
    return {
      key: 'about',
      title: 'About',
    };
  }
  
  public static get FEE(): { key: string, title: string } {
    return {
      key: 'fe-e',
      title: 'Front-End Engineer'
    };
  }
  
  public static get PHOTOGRAPHY(): { key: string, title: string } {
    return {
      key: 'photography',
      title: 'Photography'
    };
  }
  
  public static get MUSIC(): { key: string, title: string } {
    return {
      key: 'music',
      title: 'Music',
    };
  }
  
  public static get READING(): { key: string, title: string } {
    return {
      key: 'reading',
      title: 'Reading',
    };
  }
  
  public static get SIMPLE_LIFE(): { key: string, title: string } {
    return {
      key: 'simple-life',
      title: 'Simple Life',
    };
  }
}

export default Menu;

export const menuList = [
  Menu.ABOUT,
  Menu.FEE,
  Menu.MUSIC,
  Menu.PHOTOGRAPHY,
  Menu.READING,
  Menu.SIMPLE_LIFE,
];
