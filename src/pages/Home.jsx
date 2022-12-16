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
    const [entitiesWithCoords, setEntitiesWithCoords] = useState(0)
    const [entityDescription, setEntityDescription] = useState('')
  
    const searchRef = useRef(null)
  
    const fetchData = () => {
      fetch(`data/${searchRef.current.value}/${limit}`)
        .then(res => res.json())
        .then(data =>{
          if(data.count === 0){
            alert("(ERROR) Enter a valid entity label.")
          }
          if(data.count === -1){
            alert("(ERROR) WDQS internal error. Try again setting a limit.")
          }
          if(data.count === -2){
            alert("(ERROR) Entity not found. Try again with another label.")
          }
          else{
            setData(data);
            setNumberOfEntities(data.count);
            setSearchW(searchRef.current.value)
          }
          setLoadingSearch(false)
        })
    }
  
    function onClickButton() {
      if (searchRef.current.value.length === 0) {
        alert("(ERROR) Search for a Wikidata entity label :)")

      }
      else {
        try {
          var id = searchRef.current.value.split(" (Q")[1]
          id = id.substring(0, id.length - 1)
          fetch(`type/Q${id}`).then(res => res.json())
            .then(data => {
              setEntitiesWithCoords(data.entitiesWithCoords)
              setEntityDescription(data.description)
            })
          setLoadingSearch(true)
          fetchData()
        } catch (error) {
          setLoadingSearch(false)
          alert("(ERROR) You must select an item from the options suggested by the autocomplete of the search bar to perform the search.")
        }
      }
      
    }

    function onChangeInput() {
      setEntitiesWithCoords(0)
      setSearch(searchRef.current.value)
    }

    function getWikidataURL(search) {
      var split = search.split("(Q")
      var id = split[1].substring(0, split[1].length - 1)
      var url = `https://www.wikidata.org/wiki/Q${id}`
      return url
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
                <input className='border text-dark form-control' 
                    ref={searchRef}
                    onChange={() => onChangeInput()} 
                    placeholder='Search Wikidata'
                    list='list'
                    disabled={loadingSearch}
                />
                {
                  search.length === 0 && !loadingSearch ?
                  <span class="text-danger col" style={{'font-size': '12px'}}><i class="bi bi-shield-exclamation"></i> Required camp</span> : null
                }
                <Tippy 
                  content='Search a Wikidata entity type label. For example: museum, mountain, river, stadium, temple, work of art, beach, etc.' 
                  placement="bottom"
                  maxWidth={350}
                  theme="material"
                >
                  <i className="bi bi-info-circle col float-end"></i>                  
                </Tippy>
                {
                  entitiesWithCoords > 10000 ? 
                  <Tippy
                  content='This type has many georeferenceable instances. Map generation may take longer than expected. If it takes longer than expected, try again by setting a limit.' 
                  placement="bottom"
                  maxWidth={350}
                  theme="material"
                ><i class="ms-2 bi bi-exclamation-triangle-fill text-warning"></i>                 
                </Tippy> : null
                }
                
              </div>
          
                <datalist className='text-danger' id='list'>
                {
                  autocomplete.map(e=>{
                    var id = e[0]
                    var values = e[1]
                    return <option className="fs-1" value={values.label + ` (${id})`}>{values.description}</option>
                  })
                }
                </datalist>
          
              <div className="col-sm-2">
                <select className="form-select" id="limitInputSelect" onChange={e => setLimit(e.target.value)} disabled={loadingSearch} defaultValue='0'>
                  <option value="1">10</option>
                  <option value="2">100</option>
                  <option value="3">1000</option>
                  <option value="4">10000</option>
                  <option value="5">100000</option>
                  <option value='0'>No limit</option>
                </select> 
                <Tippy 
                  content='You can set the limit of entities to get (highly recommended when an entity type has many georeferenceable instances).' 
                  placement="bottom"
                  maxWidth={350}
                  theme="material"
                  
                >
                  <i className="bi bi-question-circle col float-end"></i>                  
                </Tippy>
              </div>
              <div className="col-sm-1">
                <button className='btn btn-secondary' onClick={onClickButton} disabled={loadingSearch}>
                    {
                      loadingSearch ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-search" ></i>
                    }
                </button>
              </div>
                     
            </div>

    
    <div className="row d-flex justify-content-center">
    </div>
    <div className="row d-flex justify-content-center">
        <MapContainer  className='map col-10 border border-2 border-dark rounded-4' trackResize={false} minZoom={2} center={[0,0]}>             
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />        
          
          <MarkerCluster markers={data} />
        </MapContainer>
    </div>
    {
      numberOfEntities > 0 ? 
      <div className="container-fluid bg-light p-4 m-2">
        {
          loadingSearch ? <div class="text-center">
          <div class="spinner-grow" role="status">
          </div>
          <div class="spinner-grow" role="status">
          </div>
          <div class="spinner-grow" role="status">
          </div>
        </div> :
          <>
            <p className="fs-3 border-bottom text-center">Results</p>
            <div className="row row-cols-2 lh-lg">
          <div className="col fs-6">
          Label: <b>{searchW.split('(Q')[0]}<a href={getWikidataURL(searchW)} target="_blank" rel="noreferrer noopener">(Q{searchW.split('(Q')[1]}<i className="bi bi-box-arrow-in-up-right"></i></a></b> 
          </div>
          <div className="col fs-6">
            Number of entities found: <b>{numberOfEntities}</b> 
          </div>
          <div className="col fs-6">
            Description: {entityDescription}
          </div>
          </div>
          </>
        }
      </div> : 
        null
    }
        </>
     );


}

export default Home;