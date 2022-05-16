import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css'
function Button({nextPage}) {
   return <button type = "button" onClick={nextPage} className={s.Button}>load more</button> 
}
export default Button
Button.propTypes={
   nextPage: PropTypes.func.isRequired
}