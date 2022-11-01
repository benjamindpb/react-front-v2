import { useEffect, useRef, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import MarkerCluster from "../components/MarkerCluster"

function Home() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [searchW, setSearchW] = useState(null)
    const [autocomplete, setAutocomplete] = useState([])
    const [numberOfEntities, setNumberOfEntities] = useState(0)
    const [loadingSearch, setLoadingSearch] = useState(false)
  
    const searchRef = useRef(null)
  
    const fetchData = () => {
      fetch(`data/${searchRef.current.value}`)
        .then(res => res.json())
        .then(data =>{
          setData(data);
          setNumberOfEntities(data.count);
          setSearchW(searchRef.current.value)
          setLoadingSearch(false)
        })
        .catch(error => console.log("Fetch data error: " + error))
    }
  
    function onClickButton() {
      setLoadingSearch(true)
      fetchData()
    }
  
  useEffect(() => {
    fetch(`autocomplete/${search}`)
    .then(res => res.json())
    .then(data => {
        setAutocomplete(data.types)
      })
  }, [search])
    return ( 
        <>
          <div className='row my-2 justify-content-end'>      
            <div className="col">
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
      
          </div>

    {
      // (numberOfEntities > 0) && <div>HOLA</div>
      numberOfEntities > 0 ? 
      <div className='col text-success h-50'>
        <b> {numberOfEntities} </b> entities instance of <b>{searchW}</b> founded.
      </div> : 
        <div className='col text-secondary h-50'>
          Search an entity type (P31) . For example: moauntain, river, lake
        </div>
    }

    
    <div className="row">
    <MapContainer center={[0,0]} zoom={2} minZoom={2} maxZoom={18} className='map col-8'>             
      <TileLayer
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
      />        
      <MarkerCluster markers={data} />
    </MapContainer>
    </div>
        </>
     );
}

export default Home;