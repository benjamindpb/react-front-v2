import React from 'react'

function InputSearch() {
    return ( 
        <div className='row my-2 justify-content-end'>
      
        <input className='col-3 me-1 border rounded text-dark' 
          ref={searchRef}
          onChange={() => setSearch(searchRef.current.value)} 
          placeholder='Search Wikidata'
          list='list'
        />
      
        <datalist id='list'>
        {
          autocomplete.map(e=>{
            var values = e[1]
            return <option value={values.label}>{values.description}</option>
          })
        }
        </datalist>

        <button className='btn btn-info col-1' onClick={onClickButton}>
          {
            loadingSearch ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-search"></i>
          }
        </button>
      </div>
     );
}

export default InputSearch;