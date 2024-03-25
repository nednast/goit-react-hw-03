const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <div>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onFilter} />
      </div>
    </>
  );
};

export default SearchBox;
