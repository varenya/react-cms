import React, {Component} from 'react';

import './Header.css'

class Header extends Component {
    render() {
        const {welcome} = this.props;
        return (
          <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <a className="pure-menu-heading" href="#">{welcome}</a>
            </div>
          </div>
        );
    }
}

export default Header;
