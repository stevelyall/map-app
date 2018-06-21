import React, {Component} from 'react';
import GoogleMapReact from "google-map-react/dist/GoogleMapReact";
import './Map.css';
import {Marker} from '../marker/Marker';

class Map extends Component {



    render() {
        return (
            <div className={'map'}>
                <GoogleMapReact
                    bootstrapURLKeys={this.props.mapConfig.apiKey}
                    defaultCenter={this.props.mapConfig.initialCenter}
                    defaultZoom={this.props.mapConfig.initalZoom}
                    onClick={this.props.mapClickHandler}
                >
                    {this.props.markerLocations.map((m) => <Marker lat={m.lat} lng={m.lng} key={m.uid}/>)}
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;