import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, url, urlLarge, openModal }) => {
  return (
    <GalleryItem onClick={() => openModal({ url: urlLarge, id })}>
      <ItemImage src={url} alt={id} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
