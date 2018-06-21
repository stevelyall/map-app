import React, {Component} from 'react';
import './Marker.css';

export class Marker extends Component {
    render() {
        return (
            <div
            className={'marker'}
            lat={this.props.lat}
            ng={this.props.lng}
            ></div>
        )
    }
}
