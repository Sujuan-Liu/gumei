import React from 'react';
import { Link } from 'react-router-dom';
import RotateTitle from './RotateTitle';
import { menuList, MenuType } from '../../enums/menu';

type MainMenuProps = {
  currentMenu: MenuType,
  changeMenu: Function,
}

const MainMenu = (props:MainMenuProps) => {
  const {currentMenu} = props;
  return (
    <ul>
      {
        menuList.map((menu) => (
          <li key={menu.key}>
            <Link
              to={`/${menu.key}`}
              onClick={() => props.changeMenu(menu)}
              className={currentMenu.key === menu.key ? 'actived' : ''}
            >
              <RotateTitle
                title={menu.title}
              />
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default MainMenu;
