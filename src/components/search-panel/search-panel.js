import React, {useState} from "react";
import './search-panel.scss';

const SearchPanel = ({onSearchChange}) => {
  const [term, setTerm] = useState('');

  const onSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    onSearchChange(term);
  }

  return (
    <input placeholder="type to search" className="search-panel" value={term} onChange={onSearch}/>
  );
}

export default SearchPanel;