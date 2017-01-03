import React, {Component} from 'react';

import { ItemTypes } from '../constants/ItemTypes'

import {DragSource} from 'react-dnd';

import './Header.css'

const source = {
    beginDrag(props) {
        return {name: props.name};
    }
}

class Header extends Component {
    render() {
        const {welcome,name,isDropped,connectDragSource,isDragging} = this.props;
        const opacity = isDragging ? 0.4 : 1;
        return connectDragSource(
            <div className="header" style={{opacity}}>
                <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                  {
                    isDropped ?
                           <a className="pure-menu-heading" href="#">{name}</a>
                           :
                           <a className="pure-menu-heading" href="#">{welcome}</a>
                  }
                </div>
            </div>
        );
    }
}

const collect = (connect,monitor) => {
    return {
      connectDragSource : connect.dragSource(),
      isDragging : monitor.isDragging()
    }
}

export default DragSource(ItemTypes.TITLE, source, collect)(Header);
