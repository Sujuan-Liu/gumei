import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Menu, { menuList } from '../enums/menu';
import About from './About';
import FEE from './FEE';
import Music from './Music';
import Photography from './Photography';
import Reading from './Reading';
import SimpleLife from './SimpleLife';

import logo from '../assets/icons/pi.jpg';

type MainPageState = {
  currentMenu: string,
}
class MainPage extends Component<{}, MainPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMenu: Menu.ABOUT.key,
    };
  }

  usePageViews = (currentMenu: string) => {
    this.setState({
      currentMenu,
    });
  }

  render() {
    const {
      currentMenu,
    } = this.state;
    return (
      <Router>
        <header>
          <img src={logo} alt="logo" width="60" />
          <nav>
            <ul>
              {
                menuList.map(menu => (
                  <li key={menu.key}>
                    <Link to={`/${menu.key}`} onClick={this.usePageViews.bind(this, menu.key)} className={currentMenu === menu.key ? 'actived' : ''}>{menu.title}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
        <div className="main-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fe-e">
              <FEE />
            </Route>
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/reading">
              <Reading />
            </Route>
            <Route path="/simple-life">
              <SimpleLife />
            </Route>
            <Route exact path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainPage;
