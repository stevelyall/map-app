import React, {Component} from 'react';
import {Main} from '../main/Main';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

export class App extends Component {


    state = {
        mapConfig: {
            apiKey: {key: 'AIzaSyBjG2kHMAfzQjXcc7LRsdCE9Osu8cejnvw'},
            initialCenter: {
                lat: 40.74,
                lng: -73.85
            },
            initalZoom: 11
        },
        markerLocations: [
            {
                lat: 40.7473310,
                lng: -73.8517440,
                uid: uuidv4(),
                timestamp: moment.utc()
            }
        ]
    };

    _onMapClicked = ({lat, lng}) => {

        const newLocation = {
            lat: lat,
            lng: lng,
            uid: uuidv4(),
            timestamp: moment.utc()
        };

        console.log(newLocation)

        this.setState({
            markerLocations: Object.assign(
                this.state.markerLocations.concat([newLocation]
                ))

        });
    };

    render() {
        return (
            <Main mapConfig={this.state.mapConfig}
                  mapClickHandler={this._onMapClicked}
                  markerLocations={this.state.markerLocations}
            ></Main>
        );
    }
}
