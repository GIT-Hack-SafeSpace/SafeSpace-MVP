import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { VscSearch } from 'react-icons/fa'

export default function Search({ data, func, attrs, placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    
    const searchResults = attrs
      .map((attr) =>
        data?.filter((entry) =>
          entry[attr]?.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
      .flat();

    if (e.target.value.length && searchResults.length) {
      func([...new Set(searchResults)]);
    } else if (e.target.value.length && !searchResults.length) {
      func(null);
    } else {
      func([]);
    }
  };

  const handleClick = () => {
    func([]);
    setInputValue('');
  };

  return (
    <>
    <div class="d-flex justify-content-center" style={{alignItems: 'center', marginBottom: '20px'}}>
      <input style={{border: '1px solid lightgray', borderRadius: '30px', width: '40vh', height: '35px', marginLeft: '10px', paddingLeft: '20px'}} value={inputValue} onChange={handleChange} placeholder={placeholder || 'Search'} />
      <p onClick={handleClick} style={{margin: '10px', color: 'red', cursor: 'pointer'}}>Reset</p>
    </div>
    </>
  );
}


