
const source = {
    beginDrag(props) {
        return {name: props.name};
    }
}

const collect = (connect,monitor) => {
    return {
      connectDragSource : connect.dragSource(),
      isDragging : monitor.isDragging()
    }
}

function Draggable(UIComponent){
    return UIComponent;
}
