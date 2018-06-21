import React, {Component} from 'react';
import './Main.css';
import MainMenuBar from './mainmenubar/MainManuBar';
import Map from './map/Map';


export class Main extends Component {

    render() {
        return (
            <div className={'mainContainer'}>
                <MainMenuBar title={'Title'}/>
                <div className={'mapContainer'}>
                    <Map
                        mapConfig={this.props.mapConfig}
                        mapClickHandler={this.props.mapClickHandler}
                        markerLocations={this.props.markerLocations}
                    >

                    </Map>
                </div>
            </div>
        )
    }


}