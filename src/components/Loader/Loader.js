
function Loader(name,page) {
 return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=27418911-93356d597301e385c1931efc9&image_type=photo&orientation=horizontal&per_page=12&id`)}
    
export default Loader