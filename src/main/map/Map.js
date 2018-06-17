import React, {Component} from 'react';
import GoogleMapReact from "google-map-react/dist/GoogleMapReact";
import './Map.css';

class Map extends Component {


    render() {
        const AnyReactComponent = ({text}) => <div>{text}</div>;



        return (
            <div className={'map'}>
                <GoogleMapReact
                   bootstrapURLKeys={this.props.mapConfig.apiKey}
                    defaultCenter={this.props.mapConfig.initialCenter}
                    defaultZoom={this.props.mapConfig.initalZoom}
                >
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