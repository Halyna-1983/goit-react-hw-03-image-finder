// import { checkPropTypes } from "prop-types";

const ImageGalleryItem = ({url, alt, onClick }) => {
    return ( 
        <img 
        src={url} 
        alt={alt} 
        onOclick={onClick} className="ImageGalleryItem-image" />
     );
}

// checkPropTypes
 
export default ImageGalleryItem;

