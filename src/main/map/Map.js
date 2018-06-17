import React, {Component} from 'react';
import GoogleMapReact from "google-map-react/dist/GoogleMapReact";
import './Map.css';

class Map extends Component {

    API_KEY = 'AIzaSyBjG2kHMAfzQjXcc7LRsdCE9Osu8cejnvw';
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        key: this.API_KEY
    };


    render() {
        const AnyReactComponent = ({text}) => <div>{text}</div>;



        return (
            <div className={'map'}>
                <GoogleMapReact
                   apiKey={Map.defaultProps.keys}
                    defaultCenter={Map.defaultProps.center}
                    defaultZoom={Map.defaultProps.zoom}>
                    <AnyReactComponent
                        lat={40.7473310}
                        lng={-73.8517440}
                        text={'Wheres Waldo?'}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;