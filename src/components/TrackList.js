import React, { Component } from 'react'
import classes from "./TrackList.css"

class TrackList extends Component{

    render(){
        console.log("trackList map render...");
        var elemList = null;
        
        if (this.props.tracksArray.length != 0){
           
            elemList = this.props.tracksArray.map((elem, index) =>
            {
                return(
                    <TrackListItem elem={elem} index={index} onTrackRemove={this.props.onTrackRemove}/>
                )
            })
        }

        return(
            <div>Your gpx tracks 

                <ol class="list-tracks">
                    {elemList}               
                </ol>
            </div>
        )
       
    }

}

class TrackListItem extends Component{
    render(){

        var trackElem = this.props.elem.tracks[0];
        console.log(this.props.index);

        return(
            <li key={this.props.index}>
                
                <div class="list-tracks-elem">
                    <p>Name: {trackElem.name}</p>
                    <p>Distance: {parseFloat(trackElem.distance.total / 1000).toFixed(2)}km</p>
                    <p>Elevation: {parseFloat(trackElem.elevation.max).toFixed(2)}m+</p>
                    
                    <button type="button" onClick={() => this.props.onTrackRemove(this.props.elem)}>
                        Remove
                    </button>
                </div>
            </li>
        )
    }

}


export default TrackList;