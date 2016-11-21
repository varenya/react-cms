import React, {Component} from 'react';

import Menu from '../components/Menu';

const mockData = {
  heading : "Components",
  menuItems: [
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"},
      {link:"#",linkText:"Test"}
  ]
}

import './ComponentMenu.css';

class ComponentMenu extends Component {
    render() {
        return (
          <div className="sidebar" id="component-menu">
            <Menu {...mockData} />
          </div>
        )
    }
}

export default ComponentMenu;
