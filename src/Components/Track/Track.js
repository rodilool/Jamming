import React from "react";
import { ReactDOM } from "react";
import './Track.css';


class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }  
    addTrack() {
        this.props.onAdd(this.props.tracks);
    }
    removeTrack() {
        this.props.onRemove(this.props.tracks);
    }
    renderAction() {
        if (this.props.isRemoval === true) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }
  
    render() {
        return(
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.tracks.name}</h3>
                <p> {this.props.tracks.artist} | {this.props.tracks.album}</p>
            </div>
            {this.renderAction()}
            </div>
        )
    }
}

export default Track;