import React, {Component} from 'react';

//MUICSS Components
//import {Row, Col} from './GridComponent';

//Project Components
//import Header from './Header';
//import ComponentsMenu from './ComponentMenu';

//MUI CSS file
import 'flexboxgrid/css/flexboxgrid.css';

import ComponentMenu from './ComponentMenu';
import Header from '../components/Header';
import Container from './Container';

import { DragDropContext } from 'react-dnd';

import HTML5Backend from 'react-dnd-html5-backend';

import './Home.css'

class Home extends Component {

    render() {
        return (
          <div>
            <Header welcome="REACT CMS" name="heading" />
            <div className="pure-g home">
              <div className="pure-u-1-3">
                  <ComponentMenu />
              </div>
              <div className="pure-u-2-3">
                  <Container />
              </div>
            </div>
          </div>
        );
    }

}

export default DragDropContext(HTML5Backend)(Home);
