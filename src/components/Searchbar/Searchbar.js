import PropTypes from 'prop-types';
import s from './Searchbar.module.css'
import React from 'react';
export class Searchbar extends React.Component {
  static defaultProps ={
    onSubmit:PropTypes.func.isRequired,
  }
 state = {
    name :''
 }
 NameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: ''});
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
        return alert(`Ведите название запроса`)
    }
    this.props.onSubmit(this.state.name);
    this.reset();
  };


render() {
 return <header className={s.searchbar}>
 <form className={s.form} onSubmit={this.handleSubmit}>
   <button type="submit" className={s.button}>
     <span className={s.buttonLabel} >Search</span>
   </button>

   <input
     value={this.state.name}
     onChange={this.NameChange}
     className={s.input}
     type="text"
     autoComplete="off"
     autoFocus
     placeholder="Search images and photos"
   />
 </form>
</header>
}
}
export default Searchbar