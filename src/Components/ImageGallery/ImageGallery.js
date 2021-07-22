import React from 'react'; 
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ pictures, onClick }) => {
    return ( 
        <ul className="ImageGallery">
            {pictures.map(({ webformatURL, largeImageURL, tags}) => (
			
				<ImageGalleryItem                    
                        url = {webformatURL} 
                        alt = {tags}
                        onClick ={()=> onClick(largeImageURL, tags)}  
                />                			
		))}
        </ul>
    )
}
 
export default ImageGallery;