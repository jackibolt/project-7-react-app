
import React, {Component} from 'react';
import {
  Link,
  Route
} from 'react-router-dom';

/* To change Nav Button labels, change initial stata in App.js */


class Nav extends Component {

  render() {
    const buttons = this.props.navButtons;

    return(
      <nav className="main-nav">
        <ul>
          <li><Link to={`/${buttons[0]}`}>{buttons[0]}</Link></li>
          <li><Link to={`/${buttons[1]}`}>{buttons[1]}</Link></li>
          <li><Link to={`/${buttons[2]}`}>{buttons[2]}</Link></li>
        </ul>


          <Route path={`/${buttons[0]}`} render={ () => this.props.onClick(buttons[0]) } />
          <Route path={`/${buttons[1]}`} render={ () => this.props.onClick(buttons[1]) } />
          <Route path={`/${buttons[2]}`} render={ () => this.props.onClick(buttons[2]) } />

      </nav>
    );
  }
}

export default Nav; 

