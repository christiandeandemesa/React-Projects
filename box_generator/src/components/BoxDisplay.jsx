import React from 'react';

const BoxDisplay = props => {
    
    return (
        <div>
            {props.boxes.map((box, idx) => {
                return <p key = {idx} style = {{backgroundColor: box, height: '100px', width: '100px', display: 'inline-block'}}></p>
            })};
        </div>
    );

};

export default BoxDisplay;