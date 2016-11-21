import React, {PropTypes} from 'react';

import {fromJS} from 'immutable';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.renderMenuItems = this.renderMenuItems.bind(this);
    }
    renderMenuItems() {
        const menuItems = this.props.menuItems || [];
        const renderedItems = fromJS(menuItems).map((item,index) => {
            return (<MenuItem key={index} link={item.get('link')} linkText={item.get('linkText')}/>);
        });
        return renderedItems;
    }
    render() {
        const {heading} = this.props;
        return (
            <div className="pure-menu">
                <div className="pure-menu-heading">{heading}</div>
                <ul className="pure-menu-list">
                    {this.renderMenuItems()}
                </ul>
            </div>
        )
    }
}

Menu.propTypes = {
    heading: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export function MenuItem(props) {
    const {link, linkText} = props;
    const color = { 'color' : '#fff' };
    return (
        <li className="pure-menu-item" style={color}>
            <a href={link} className="pure-menu-link">{linkText}</a>
        </li>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

export default Menu;
