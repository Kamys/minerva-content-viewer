import React, {Component} from 'react';
import Resizable from "react-rnd";
import './VObject.css'

class VObject extends Component {
    render() {
        return (
            <Resizable minWidth="70"
                       minHeight="70"
                       dragHandleClassName=""
                       DraggableData={
                           {
                               node: ".vObject"
                           }
                       }
                       default={{
                           x: 25,
                           y: 25,
                           width: "200px",
                           height: "300px",
                       }}>
                <div className='vObject__label'/>
                <iframe className="vObject" frameBorder="0">{this.props.child}</iframe>
            </Resizable>);
    }
}

export default VObject;