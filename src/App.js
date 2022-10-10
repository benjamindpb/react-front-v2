import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import MarkerCluster from './components/MarkerCluster';

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [autocomplete, setAutocomplete] = useState([])

  const searchRef = useRef(null)

  const fetchData = () => {
    console.log();
    fetch(`data2/${searchRef.current.value}`)
      .then(res => res.json())
      .then(data =>{
        setData(data);
    })
    .catch(error => console.log("Fetch data error: " + error))
  }

  function onClickButton() {
    fetchData()
  }

useEffect(() => {
  fetch(`entity_type/${search}`)
    .then(res => res.json())
    .then(data => {
      setAutocomplete(data.types)
    })
}, [search])
  

  return (
    <div className="App container">
      <div className='row my-4 justify-content-end'>
        <h3 className='col fs-2'>Wikidata Atlas <i class="bi bi-pin-map-fill"></i></h3>
        <input className='col-3 me-2 border rounded text-dark' 
          ref={searchRef}
          onChange={() => setSearch(searchRef.current.value)} 
          placeholder='Search Wikidata'
          list='list'
        />
        <datalist id='list'>
          {
            autocomplete.map(e=>{
              return <option value={e}></option>
            })
          }
        </datalist>
        <button className='btn btn-info col-1' onClick={onClickButton}>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <MapContainer center={[0,0]} zoom={2} minZoom={2} maxZoom={18} className='map'>
        <TileLayer
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        />
        <MarkerCluster markers={data} />
      </MapContainer>
    </div>
  );
}

export default App;
