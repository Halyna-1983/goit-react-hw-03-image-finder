import { checkPropTypes } from "prop-types";

const ImageGalleryItem = ({url, alt}) => {
    return ( 
        <img src={url} alt={alt} className="ImageGalleryItem-image" />
     );
}

// checkPropTypes
 
export default ImageGalleryItem;

