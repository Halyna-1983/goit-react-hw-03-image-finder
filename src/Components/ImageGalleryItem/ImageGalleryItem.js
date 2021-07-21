import React from 'react';


const ImageGalleryItem = ({url, alt, onClick }) => {
    return ( 
        <img 
        src={url} 
        alt={alt} 
        onOclick={onClick} className="ImageGalleryItem-image" />
     );
}

export default ImageGalleryItem;

