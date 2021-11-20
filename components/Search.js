import React from "react";

export default function Search({ data, func, attrs, placeholder }) {
  const handleChange = (e) => {
    const searchResults = attrs.map((attr) =>
      data?.filter((stuff) =>
        stuff[attr]?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    if (e.target.value.length && searchResults[0].length) {
      func(...searchResults);
    } else if (e.target.value.length && !searchResults[0].length) {
      func(null);
    } else {
      func([]);
    }
  };

  return (
    <div>
      <input onChange={handleChange} placeholder={placeholder || "Search"} />
    </div>
  );
}
