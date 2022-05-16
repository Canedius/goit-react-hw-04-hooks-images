import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
function ImageGallery({images,toggleModal}) {
    return <ul className ={s.ImageGallery}>
            {images.map(({id,webformatURL,tags,largeImageURL}) =>(
                <li className={s.ImageGalleryItem} key={id} onClick={toggleModal} data-url={largeImageURL} >
                <ImageGalleryItem url = {webformatURL} alt ={tags}/>
                </li>
            ))}
        </ul>
    
}
export default ImageGallery
ImageGallery.propTypes={
    images:  PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
        })
      ),
toggleModal: PropTypes.func.isRequired,
}



   
        

 

 
  

  
