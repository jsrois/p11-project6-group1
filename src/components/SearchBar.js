import React from "react";
import { FaSearch } from "react-icons/fa";




export const SearchBar = () => { 
  return (
  <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Escribe para buscar ..." />
    </div>
   
  );
}; 