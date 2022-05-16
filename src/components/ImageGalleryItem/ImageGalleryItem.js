import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css'
function ImageGalleryItem({url,alt}) {
  return <img className={s.imageGalleryItemImage} src={url} alt={alt} />
}
export default ImageGalleryItem
ImageGalleryItem.propTypes={
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}