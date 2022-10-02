import L, { map, marker, Point } from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [autocomplete, setAutocomplete] = useState([])

  const searchRef = useRef(null)
  const mapRef = useRef(null)
  const resultsRef = useRef(null)

  const fetchData = () => {
    console.log();
    fetch(`data2/${searchRef.current.value}`)
      .then(res => res.json())
      .then(data =>{
        setData(data);
    })
    .catch(error => console.log(error))
  }

  function onClickButton() {
    fetchData()
  }

  function getLink(e){
    var url = e.entity
    var id = url.split('Q')[1]
    return `<a href='${url}' target="_blank" rel="noreferrer noopener">Q${id} 
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
              </svg></a>`
  }

  function getImage(e){
    var image = e.image
    var thumb = e.thumbnail
    return `<a href='${image}' target="_blank" rel="noreferrer noopener">
      <img class='img-thumbnail mx-auto d-block mt-2' src='${thumb}' alt=''></a>` 
  }

  function entityInfo(e) {
    return (
      `<div>
        <b>${e.label}</b> (${getLink(e)})</br>
        ${e.description}</br>
        ${getImage(e)}
      </div>
      `
    )
  }

useEffect(() => {
  fetch(`entity_type/${search}`)
    .then(res => res.json())
    .then(data => {
      setAutocomplete(data.types)
    })
}, [search])

  /**
   * Este efecto agrega los clusters pero no se pouede hacer drag
   * con el mouse. Sin embargo funciona moviendo las teclas de movimiento.
   * CUEK :c
   */
  useEffect(() => {
    var container = L.DomUtil.get('map');
    if(container != null)
      container._leaflet_id = null;
    var map_ = L.map('map', {
      center: [0,0],
      zoom: 2,
      dragging: true,
      minZoom: 1,

    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map_);
    var markers = L.markerClusterGroup()
    data.results?.map(entity => {
      var marker = L.marker([entity.lat, entity.lon])
      marker.bindPopup(entityInfo(entity), {
        maxWidth: 300,
        minWidth: 280,
        autoPanPaddingTopLeft: L.Point(3,3)
      })
      markers.addLayer(marker)
    })
    markers.addTo(map_)

  }, [data])
  

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
      <div ref={resultsRef}></div>
      <div className='row border border-success' id='map' ref={mapRef}></div>
    </div>
  );
}

export default App;
