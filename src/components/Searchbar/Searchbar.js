import PropTypes from 'prop-types';
import s from './Searchbar.module.css'
import {useState} from 'react';
export const Searchbar= ({onSubmit}) => {

const[name,setName ] = useState("")

 const NameChange = e => {
  setName(e.currentTarget.value) ;
  };

  const reset = () => {
    setName("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === "") {
        return alert(`Ведите название запроса`)
    }
    onSubmit(name);
    reset();
  };



 return <header className={s.searchbar}>
 <form className={s.form} onSubmit={handleSubmit}>
   <button type="submit" className={s.button}>
     <span className={s.buttonLabel} >Search</span>
   </button>

   <input
     value={name}
     onChange={NameChange}
     className={s.input}
     type="text"
     autoComplete="off"
     autoFocus
     placeholder="Search images and photos"
   />
 </form>
</header>
}
export default Searchbar

Searchbar.propTypes ={
  onSubmit:PropTypes.func.isRequired,
}