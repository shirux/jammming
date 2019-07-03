import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props)
    {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack= this.removeTrack.bind(this);
    }


    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
            {this.renderAction()}
            </div>



        );
    }

    addTrack(event){
        this.props.onAdd(this.props.track);
    }

    removeTrack(event){
        this.props.onRemove(this.props.track);
    }

    renderAction(){
        if(this.props.isRemoval)
        {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>;
        }
        return <button className="Track-action" onClick={this.addTrack}>+</button>;
    }
}


export default Track;