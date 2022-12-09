import { useEffect, useRef, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import MarkerCluster from "../components/MarkerCluster"
import Tippy from "@tippy.js/react"
import '/node_modules/tippy.js/themes/material.css'




function Home() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [searchW, setSearchW] = useState(null)
    const [autocomplete, setAutocomplete] = useState([])
    const [numberOfEntities, setNumberOfEntities] = useState(0)
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [limit, setLimit] = useState(0)
  
    const searchRef = useRef(null)    
  
    const fetchData = () => {
      fetch(`data/${searchRef.current.value}/${limit}`)
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
            <div className='row input-group input-group-sm my-3 d-flex justify-content-center'>    
              <div className="col-sm-3">
                <input className='border text-dark form-control ' 
                    ref={searchRef}
                    onChange={() => setSearch(searchRef.current.value)} 
                    placeholder='Search Wikidata'
                    list='list'
                />
                <Tippy 
                  content='Search a Wikidata entity type label. For example: museum, mountain, river, stadium, temple, work of art, beach, etc.' 
                  placement="right" 
                  followCursor={true}
                  maxWidth={350}
                  theme="material"
                >
                  <i class="bi bi-question-circle"></i>                  
                </Tippy>
              </div>
          
                <datalist id='list'>
                {
                  autocomplete.map(e=>{
                    var values = e[1]
                    return <option value={values.label}>{values.description}</option>
                  })
                }
                </datalist>
          
              <div className="col-sm-2">
                <select class="form-select" id="limitInputSelect" onChange={e => setLimit(e.target.value)}>
                  <option value="1">10</option>
                  <option value="2">100</option>
                  <option value="3">1000</option>
                  <option value="4">10000</option>
                  <option value="5">100000</option>
                  <option selected value='0'>No limit</option>
                </select> 
                <Tippy 
                  content='Select the limit of entities to get. No Limit by default' 
                  placement="right" 
                  followCursor={true}
                  maxWidth={350}
                  theme="material"
                  
                >
                  <i class="bi bi-question-circle" style={{"font-size": "1rem"}}></i>                  
                </Tippy>
              </div>
              <div className="col-sm-1">
                <button className='btn btn-secondary' onClick={onClickButton}>
                    {
                      loadingSearch ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-search" ></i>
                    }
                </button>
              </div>
                     
            </div>

    
    <div className="row d-flex justify-content-center">
    {/* {
      // (numberOfEntities > 0) && <div>HOLA</div>
      numberOfEntities > 0 ? 
      <div className='col-10 text-success fs-6'>
        <b> {numberOfEntities} </b> instances of <b>{searchW}</b> founded.
      </div> : 
        <div className='col-10 text-secondary fs-6'>
          Search an entity type. For example: mountain, river, stadium, temple, work of art, etc.
        </div>
    } */}
    </div>
    <div className="row d-flex justify-content-center">
        <MapContainer  className='map col-10' trackResize={false}>             
          <TileLayer
            url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />        
          
          <MarkerCluster markers={data} />
        </MapContainer>
    </div>
        </>
     );
}

export default Home;