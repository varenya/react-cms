import React, {Component} from 'react';

import {DragDropContext} from 'react-dnd';

import HTML5Backend from 'react-dnd-html5-backend';

import {ItemTypes} from '../constants/ItemTypes';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: {
                accepts: ItemTypes.TITLE,
                lastItem: null
            },
            droppedBoxNames: []
        };
        this.renderGrid = this.renderGrid.bind(this);
    }

    renderGrid() {
        const index = [0, 1, 2, 3];
        const style = {
            height 40 px
        };
        return index.map((index) => {
            return (
                <div className="pure-u-1-4" style={style}></div>
            )
        })

    }

    render() {
        const {grid} = this.props;
        return ()
    }

}
