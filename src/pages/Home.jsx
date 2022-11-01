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
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <div className='col-9 input-group input-group-sm my-3'>    
                  <input className='border text-dark form-control' 
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
            
                  <button className='col-3 btn btn-sm btn-info btn-outline-secondary' onClick={onClickButton}>
                    {
                      loadingSearch ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-search"></i>
                    }
                  </button>      
              </div>
            </div>
          </div>

    
    <div className="row d-flex justify-content-center">
    {
      // (numberOfEntities > 0) && <div>HOLA</div>
      numberOfEntities > 0 ? 
      <div className='col-10 text-success fs-6'>
        <b> {numberOfEntities} </b> instances of <b>{searchW}</b> founded.
      </div> : 
        <div className='col-10 text-secondary fs-6'>
          Search an entity type (P31) . For example: mountain, river, lake, stadium, temple, etc.
        </div>
    }
    </div>
    <div className="row d-flex justify-content-center">
        <MapContainer center={[0,0]} zoom={2} minZoom={2} maxZoom={18} className='map col-10'>             
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