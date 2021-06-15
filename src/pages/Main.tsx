import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Menu, { menuList, MenuType } from 'enums/menu';
import Home from 'pages/Home';
import About from 'pages/About';
import FEE from 'pages/FEE';
import Photography from 'pages/Photography';
import Reading from 'pages/Reading';
import MainMenu from 'components/MainMenu';

type MainPageState = {
  currentMenu: MenuType,
}
class MainPage extends Component<RouteComponentProps & {}, MainPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMenu: menuList.filter(menu => menu.path === this.props.location.pathname)[0] || Menu.HOME,
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  shouldComponentUpdate() {
    return this.props.location.pathname === this.state.currentMenu.path;
  }

  setStateWithLoaction = () => {
    const {
      pathname,
    } = this.props.location;
    menuList.map(menu => {
      if (menu.path === pathname) {
        this.setState({
          currentMenu: menu,
        });
      }
      return menu;
    });
  }

  handleMenuChange = (menu: MenuType) => {
    this.setState({
      currentMenu: menu,
    });
  }

  render() {
    const {
      currentMenu,
    } = this.state;
    return (
      <div>
        <div className="home-page">
          <Switch>
            <SwipeableViews index={currentMenu.index || 0}>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/fe-e">
                <FEE />
              </Route>
              <Route path="/photography">
                <Photography />
              </Route>
              <Route path="/reading-and-music">
                <Reading />
              </Route>
              <Route exact path="/">
                <Redirect to='/home' />
              </Route>
            </SwipeableViews>
          </Switch>
        </div>
        <footer>
          <nav>
            <MainMenu
              currentMenu={currentMenu}
              changeMenu={this.handleMenuChange}
            />
          </nav>
        </footer>
      </div>
    );
  }
}

export default withRouter(MainPage);
