import { BallTriangle } from  'react-loader-spinner'
import {useState,useEffect} from 'react';
import Searchbar from '../Searchbar/Searchbar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { mapper } from 'utils/mapper';
export const App =() => {
  const [name,setName] = useState("")
  const [images,setImages] = useState([])
  const [page,setPage] = useState (1)
  const [button,setButton] = useState(false)
  const [OpenModal,setOpenModal] = useState(false)
  const [largeImageURL,setlargeImageURL] = useState("")
  const [error,setError] = useState(null)

const onSubmit =(name)=>{
  setName(name)
  setButton("loading")
  setImages([])
}
useEffect(()=>{
  if (button === "loading") {
      fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=27418911-93356d597301e385c1931efc9&image_type=photo&orientation=horizontal&per_page=12&id`)
      .then(res => {
        if(res.ok){
        return res.json()}
      return Promise.reject(new Error('Нет такой картинки'))
      })
      .then((res) => mapper(res.hits))
      .then((img) =>{
       setImages([...images,...img])
       setButton(true)
      })
       .catch(error=>setError({error})) 
  } 
},[name, page])


 const nextPage= ()=>{
   setPage(page +1)
   setButton("loading")
   setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
   }, 200);
  }

  const toggleModal =(e)=>{
    if (e) {
      const url = e.currentTarget.dataset.url;
      setOpenModal(!OpenModal)
      setlargeImageURL(url)
      return
    } 
    setOpenModal(!OpenModal)
  }

  
   
 return <>
   <Searchbar onSubmit ={onSubmit}/>
   {error && <h1>{error.massage}</h1>}
   {images.length !== 0 && <ImageGallery images={images} toggleModal={toggleModal}/>}
   {button === true && images.length !== 0 && <Button nextPage={nextPage}/>}
   {button === "loading" &&  <BallTriangle color="#00BFFF" height={80} width={80} />}
   {OpenModal && <Modal url={largeImageURL } toggleModal ={toggleModal} name={name}/>}
  </>
  
}
