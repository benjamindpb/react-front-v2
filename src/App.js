import L, { map, marker, Point } from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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
        <h3 className='col'>Wikidata Atlas</h3>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
      <MapContainer center={[0,0]} zoom={2} minZoom={2} maxZoom={18} className='map'>
        <TileLayer
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          noWrap={true}
        />
        <MarkerCluster markers={data} />
      </MapContainer>
    </div>
  );
}

export default App;
