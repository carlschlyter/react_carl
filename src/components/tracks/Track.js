import React from 'react';
import { Link } from 'react-router-dom';


const Track = (props) => {
    const { track } = props;
  
    return (
        <div className="col-md-6">                    
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong>Track</strong>: {track.track_name}
                        <br/>
                        <strong>Album</strong>: {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        View lyrics
                    </Link>
                    <input className="form-check-input ml-5" type="checkbox" name="like" value="like"/>Save<br></br>
                </div>
            </div>
        </div>
    );   
};

export default Track;