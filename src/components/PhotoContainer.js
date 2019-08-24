
import React, {Component} from 'react';
import Photos from './Photos';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    render() {

        const photoResults = this.props.data;
        let photos = photoResults.map(photo => 
            <Photos 
                photoUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                key={photo.id.toString()} 
            />    
        )
        
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {photos}
                    <NotFound />
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;