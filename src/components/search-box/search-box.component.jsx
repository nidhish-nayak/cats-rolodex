import "./search-box.styles.css";

const SearchBox = (props) => {

  const { searchProp } = props;
  const { placeHolder } = props;
  const { className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={searchProp}
    ></input>
  );
}

export default SearchBox;
