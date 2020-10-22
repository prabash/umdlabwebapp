/* Imports */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BurgerMenu from "react-burger-menu";

/* CSS */
import "./menu.css";

/* Routing */
import Home from "../home/home";
import About from "../about/about";

/* MenuWrap Class */
class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className={this.props.side}>{this.props.children}</div>;
  }
}

/* Menu Class */
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "scaleDown",
      side: "left"
    };
  }

  changeSide(side) {
    this.setState({ side });
  }

  getItems() {
    let items;
    items = [
      <NavLink to="/Home">
        <span>Home</span>
      </NavLink>,
      <NavLink to="/About">
        <span>About</span>
      </NavLink>,
    ];

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    return (
      <MenuWrap wait={20}>
        <Menu
          id={this.state.currentMenu}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          {items}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <Router>
        <div id="outer-container" style={{ height: "100%", backgroundColor: "rgb(59, 59, 59)" }}>
          {this.getMenu()}
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    );
  }
}
