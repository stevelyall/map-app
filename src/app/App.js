import React, {Component} from 'react';
import {Main} from '../main/Main';

export class App extends Component {

    mapConfig = {
        apiKey: {key:'AIzaSyBjG2kHMAfzQjXcc7LRsdCE9Osu8cejnvw'},
        initialCenter: {
            lat: 59.95,
            lng: 30.33
        },
        initalZoom: 11
    }


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Main mapConfig={this.mapConfig}></Main>
        );
    }
}
