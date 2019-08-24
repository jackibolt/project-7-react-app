
import React from 'react';

const Photos = (props) => {
    return(
        <li>
            <img src={props.photoUrl} alt="" />
        </li>
    )
}

export default Photos;