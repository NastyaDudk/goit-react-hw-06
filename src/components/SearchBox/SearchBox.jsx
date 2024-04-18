import css from './SearchBox.module.css';


const SearchBox = ({inputValue, handleChange}) => {
 
  

  return (
    <div >
      <label className={css.filterBox}>
      <span>Find contacts by name</span>
      <input  className={css.inputfind}type="text" value={inputValue} onChange={e => handleChange(e.target.value)} />
      
      </label>
    </div>
  );
};

export default SearchBox

