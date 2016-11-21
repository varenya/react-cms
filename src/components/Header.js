import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        const {welcome} = this.props;
        return (
                <AppBar title={welcome}></AppBar>
        );
    }
}

export default Header;
