import React,{useState}from 'react'
import axios from 'axios'


const API_KEY = "af046ac3b932a6e4fc2742ea2dcd4c12";

const Search = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input);
      setInput("");
    }
  };


    
    

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>



  )
}

export default Search