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

function Sample(props){
    return (<h1> hellow </h1>);
}


class Home extends Component {

    render() {
        return (
          <div>
            <Header welcome="REACT CMS" name={<Sample />} />
            <div className="pure-g home">
              <div className="pure-u-1-4">
                  <ComponentMenu />
              </div>
              <div className="pure-u-3-4">
                  <Container />
              </div>
            </div>
          </div>
        );
    }

}

export default DragDropContext(HTML5Backend)(Home);
