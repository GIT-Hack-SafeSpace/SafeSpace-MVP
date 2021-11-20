import React from 'react';

export default function Search({ data, func, attrs, placeholder }) {
  const handleChange = (e) => {
    const searchResults = attrs.map((attr) =>
      data?.filter((entry) =>
        entry[attr]?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    ).flat();

    if (e.target.value.length && searchResults.length) {
      func([...new Set(searchResults)]);
    } else if (e.target.value.length && !searchResults.length) {
      func(null);
    } else {
      func([]);
    }
  };

  return (
    <div>
      <input onChange={handleChange} placeholder={placeholder || 'Search'} />
    </div>
  );
}
