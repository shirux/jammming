import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component{
  

    render(){
        return(
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                    return <Track onRemove={this.props.onRemove} artist={track.artist} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={track.id} />
                })
                }
            </div>


        );
    }

}

export default TrackList;