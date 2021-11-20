import React, { useState } from 'react';

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
    <div>
      <input value={inputValue} onChange={handleChange} placeholder={placeholder || 'Search'} />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
}
