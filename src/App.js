import React, { Component } from "react";
import DragAndDropZone from "./components/DragAndDropZone";
import Map from "./components/Map";
import TrackList from "./components/TrackList";
import gpxParser from 'gpxparser';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {trackList : []};
    }

    render (){
        
        return(
            <>
                <h1>GPX Tools</h1>
                <div className="map-list-container">
                    <div className="map-container">
                        <Map tracksArray={this.state.trackList}/>
                    </div>
                    <div className="list-container">
                        <TrackList tracksArray={this.state.trackList} onTrackRemove={this.onTrackRemove.bind(this)}/>
                        <DragAndDropZone onFileDrop={this.onFileDrop.bind(this)}/>
                    </div>
                </div>
            </>
        )
    }

    onFileDrop(file){
        console.log("onFileDrop");
        
        var parsedTrack = new gpxParser();
        parsedTrack.parse(file);

        this.state.trackList.push(parsedTrack);
        
        this.setState({trackList: this.state.trackList});
    }

    onTrackRemove(elem){
        console.log("onTrackRemove");
        console.log(elem);

        this.setState({trackList: this.state.trackList.filter(t => t !== elem)});
    }

}

export default App;