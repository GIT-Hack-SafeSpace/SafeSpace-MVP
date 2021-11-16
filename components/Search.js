import React, { useState } from "react";

export default function Search({ data, func }) {
  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // grab the users input and do a filter on the value vs the data
  
  data.filter((d) => d.whatever.includes(userInput))

  func(searchResults)

  return <div>
    <input 
      onChange={(e) => setUserInput(e.target.value)}
    />


  </div>;
}
