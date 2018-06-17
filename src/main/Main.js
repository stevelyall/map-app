import React, {Component} from 'react';
import './Main.css';
import MainMenuBar from './mainmenubar/MainManuBar';
import Map from './map/Map';


export class Main extends Component {

    render() {
        return (
            <div className={'mainContainer'}>
                <MainMenuBar></MainMenuBar>
                <div className={'mapContainer'}>
                    <Map
                        mapConfig={this.props.mapConfig}
                    ></Map>
                </div>
            </div>
        )
    }


}