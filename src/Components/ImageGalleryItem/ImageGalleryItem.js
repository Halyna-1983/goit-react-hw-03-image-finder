import React from 'react';


const ImageGalleryItem = ({id, url, alt, onClick }) => {
    return ( 
        
        <li className="ImageGalleryItem" key={id}>
            <img 
                src={url} 
                alt={alt} 
                onClick={onClick} className="ImageGalleryItem-image" />
        </li>
        
     );
}

export default ImageGalleryItem;

