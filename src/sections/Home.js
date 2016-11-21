import React, {Component} from 'react';

//MUICSS Components
//import {Row, Col} from './GridComponent';

//Project Components
//import Header from './Header';
//import ComponentsMenu from './ComponentMenu';

//MUI CSS file
import 'flexboxgrid/css/flexboxgrid.css';

import ComponentMenu from './ComponentMenu';

class Home extends Component {

    render() {
        return (
            <div className="pure-g">
              <div className="pure-u-1-3">
                <ComponentMenu />
              </div>
              <div className="pure-u-2-3">World</div>
            </div>
        );
    }

}

export default Home;
