import React, {Component} from 'react';

//Material UI Components
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

class ComponentsMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            display: 'inline-block',
            width:'100%'
        };
        return (
            <Paper style={style}>
                <Menu width="100%">
                    <MenuItem primaryText="Refresh" desktop={true}/>
                    <MenuItem primaryText="Refresh"/>
                    <MenuItem primaryText="Refresh"/>
                    <MenuItem primaryText="Refresh"/>
                    <MenuItem primaryText="Refresh"/>
                </Menu>
            </Paper>
        );
    }

}

export default ComponentsMenu;
