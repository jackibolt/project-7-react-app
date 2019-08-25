
import React, {Component} from 'react';
import Photos from './Photos';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    render() {

        const photoResults = this.props.data;
        let photos;

        // if photos exist, render the photos display, otherwise render NotFound
        if (photoResults.length > 0){
            photos = photoResults.map(photo => 
                <Photos 
                    photoUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                    key={photo.id.toString()} 
                />    
            )
           
            return (
                <div className="photo-container">
    
                    <h2>Photos of {this.props.searchTitle}</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );
        } else {
            return(
                <NotFound />
            )
        }

    }
}

export default PhotoContainer;