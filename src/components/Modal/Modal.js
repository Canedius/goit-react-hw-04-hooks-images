import PropTypes from 'prop-types';
import {useEffect} from 'react';
import s from '../Searchbar/Searchbar.module.css';

 const Modal =({url,toggleModal,name}) => {
  useEffect(()=>{
    const hendelKeydown = (e)=>{
    if (e.code ==="Escape")toggleModal()
    }
    window.addEventListener("keydown",hendelKeydown)
    return ()=>(window.removeEventListener("keydown",hendelKeydown))
    })
  

const handelBackdropClick = e =>{
  if (e.currentTarget === e.target) {
    toggleModal()
    
  }
}
    return <div className={s.overlay} onClick={handelBackdropClick}>
    <div className={s.modal}>
      <img src={url} alt={name} />
    </div>
  </div>
}


Modal.defaultProps ={
  url:PropTypes.string.isRequired,
  toggleModal:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
}
export default Modal