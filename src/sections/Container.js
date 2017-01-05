import React, {Component} from 'react';

import {ItemTypes} from '../constants/ItemTypes';

import GridComponent from '../components/GridComponent';

import Header from '../components/Header';

import {fromJS} from 'immutable';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: fromJS({
                grid: {
                    accepts: [ItemTypes.TITLE],
                    lastItem: null
                },
                droppedBoxNames: []
            })
        };
        this.renderGrid = this.renderGrid.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(item) {
        const {name} = item;
        console.log(item, name, 'name');
        // console.log(this.state.toJS());
        this.setState(({data}) => {
            console.log(data.toJS(),"wow");
            return {
                data: data.update('droppedBoxNames', list => list.push(name))
                          .updateIn(['grid','lastItem'] , (v) => (name))
            }
        })
    }

    renderGrid() {
        const index = [0, 1, 2, 3];
        const style  = {
          height: '65px'
        }
        const accepts = this.state.data.getIn(['grid', 'accepts']);
        console.log('accepts', accepts.toJS());
        return index.map((index) => {
            console.log(index);
            return (<GridComponent key={index} style={style} accepts={accepts.toJS()} onDrop={this.handleDrop} lastItem = {this.state.data.getIn(['grid','lastItem'])}/>)
        });
    }

    render() {
        return (
            <div>
                {/* <Header welcome="Test" name="Hey" /> */}
                {this.renderGrid()}
            </div>
        );
    }

}

export default Container;
//export default DragDropContext(HTML5Backend)(Container);
