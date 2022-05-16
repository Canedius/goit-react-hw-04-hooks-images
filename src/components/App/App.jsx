import { BallTriangle } from  'react-loader-spinner'
import React from 'react';
import Searchbar from '../Searchbar/Searchbar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
export class App extends React.Component{

state={
  name :'',
  images: [],
  page : 1,
  button : false,
  OpenModal: false,
  largeImageURL: "",
  error: null
}

onSubmit =(name)=>{
  this.setState({name,images: [],
    page : 1,button : "loading"})
}

componentDidUpdate(prevProps,prevState){
  if (this.state.button === "loading") {  
    setTimeout(() => {
    fetch(`https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=27418911-93356d597301e385c1931efc9&image_type=photo&orientation=horizontal&per_page=12 `)
    .then(res => {
      if(res.ok){
      return res.json()}
    return Promise.reject(new Error('Нет такой картинки'))
    })
    .then(images =>{
     this.setState(()=> {  return {images : [...this.state.images,...images.hits],button : true}})})
     .catch(error=> this.setState({error}))
    },500); 
  }
}

 nextPage= ()=>{
   setTimeout(() => {
    this.setState(prevState=> ({ 
      page : prevState.page +1,button :"loading"})
  )
   }, 500);
  }

  toggleModal =(e)=>{
    if (e) {
      const url = e.currentTarget.dataset.url;
      this.setState(({OpenModal}) => ({
        OpenModal : !OpenModal,
        largeImageURL :url 
       })) 
       return
    } 
    this.setState(({OpenModal}) => ({
     OpenModal : !OpenModal,
    }))
  }

  render(){
    const {images,button,OpenModal,largeImageURL,name,error} = this.state
 return <>
   <Searchbar onSubmit ={this.onSubmit}/>
   {error && <h1>{error.massage}</h1>}
   {images.length !== 0 && <ImageGallery images={images} toggleModal={this.toggleModal}/>}
   {button === true && images.length !== 0 && <Button nextPage={this.nextPage}/>}
   {button === "loading" &&  <BallTriangle color="#00BFFF" height={80} width={80} />}
   {OpenModal && <Modal url={largeImageURL } toggleModal ={this.toggleModal} name={name}/>}
  </>
  }
}
