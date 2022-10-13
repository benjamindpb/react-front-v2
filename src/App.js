import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import MarkerCluster from './components/MarkerCluster';

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [searchW, setSearchW] = useState(null)
  const [autocomplete, setAutocomplete] = useState([])
  const [numberOfEntities, setNumberOfEntities] = useState(0)
  const [loading, setLoading] = useState(false)

  const searchRef = useRef(null)

  const fetchData = () => {
    fetch(`data2/${searchRef.current.value}`)
      .then(res => res.json())
      .then(data =>{
        setData(data);
        setNumberOfEntities(data.results.length);
        setSearchW(searchRef.current.value)
        setLoading(false)
      })
      .catch(error => console.log("Fetch data error: " + error))
  }

  function onClickButton() {
    fetch(`ask/${searchRef.current.value}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data.boolean)
        if (data.boolean) {
          setLoading(true)
          fetchData()
        }
        else{
          alert("Error: enter a valid entity type.")
        }
      })
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
      <h3 className='col fs-3'>Wikidata Atlas <i class="bi bi-pin-map-fill"></i></h3>
      <div className='row my-3 justify-content-end'>
      {
        // (numberOfEntities > 0) && <div>HOLA</div>
        numberOfEntities > 0 ? 
        <div className='col text-success'>
          Se encontraron un total de <b> {numberOfEntities} </b> entidades de tipo <b>{searchW}</b>
        </div> : <div className='d-flex'></div>
      }
        <input className='col-3 me-1 border rounded text-dark' 
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
          {
            loading ? <div class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only"></span>
          </div> : <i className="bi bi-search"></i>
          }
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
