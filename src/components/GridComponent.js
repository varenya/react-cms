import React from 'react';

import {DropTarget} from 'react-dnd';

function GridComponent(props) {
    // console.log("properites",props);
    const {connectDropTarget, canDrop, isOver, accepts , lastItem} = props;
    console.log(lastItem);
    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return connectDropTarget(
        <div className="pure-u-4" style={{...props.style,backgroundColor}}>
          {
            isActive ?
              'Release to drop' :
              'This grid accepts '+ accepts.join('')
          }
          <br/>
          {
            lastItem &&
            JSON.stringify(lastItem)
          }
            {props.children}
        </div>
    );
}

const dropItem = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem());
    }
}

export default DropTarget(props => props.accepts, dropItem, (connect, monitor) => ({
    connectDropTarget : connect.dropTarget(),
    isOver : monitor.isOver(),
    canDrop : monitor.canDrop()
}))(GridComponent);

export function Col(props) {
    const {md, style} = props;

    return (
        <div className={md} style={style}>
            {props.children}
        </div>
    );

}
