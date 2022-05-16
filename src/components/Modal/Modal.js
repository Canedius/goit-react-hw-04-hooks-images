import PropTypes from 'prop-types';
import React from 'react';
import s from '../Searchbar/Searchbar.module.css';
export default class Modal extends React.Component {
  static defaultProps ={
    url:PropTypes.string.isRequired,
    toggleModal:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired
  }
  
 componentDidMount(){
   window.addEventListener('keydown',this.hendelKeydown)

 }

 componentWillUnmount(){
   window.removeEventListener('keydown',this.hendelKeydown)
 }
 hendelKeydown = e => {
  if (e.code === 'Escape') {
   this.props.toggleModal()
  }
}
handelBackdropClick = e =>{
  console.log();
  if (e.currentTarget === e.target) {
    this.props.toggleModal()
    
  }
}



  render(){
    return <div className={s.overlay} onClick={this.handelBackdropClick}>
    <div className={s.modal}>
      <img src={this.props.url} alt={this.props.name} />
    </div>
  </div>
  }
}


