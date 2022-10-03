import React, { useEffect, useRef, useState } from "react";

function SearchBar({
    searchRef,
    setSearch
}) {
    
    return ( 
        <div className='row my-4 justify-content-end'>
          <input className='col-3 me-2 border rounded text-dark'
            onChange={()=>console.log("HOLA")}
            placeholder='Search Wikidata'
            list='list'
            ref={searchRef}
          />
          <button className='btn btn-info col-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
      </div>
     );
}

export default SearchBar;