import React from 'react';

export function Row(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    );
}

export function Col(props) {
    const {md, style} = props;

    return (
        <div className={md} style={style}>
                {props.children}
        </div>
    );

}
