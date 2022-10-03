import { useEffect } from "react";
import L  from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";
import { customMarker } from "../constants";
import { getEntityInfo } from "./MarkerClusterFunctions";


const mcg = L.markerClusterGroup();

const MarkerCluster = ({ markers }) => {
  const map = useMap();
  useEffect(() => {
    mcg.clearLayers();
    markers.results?.map((t) => {
      L.marker(new L.LatLng(t.lat, t.lon), {
        icon: customMarker
      })
      .addTo(mcg)
      .bindPopup(getEntityInfo(t))
      .on('click', e => {
        map.setView(e.target.getLatLng(), 16)
      })
    });
    // center the map around the markers
    map.fitBounds(mcg.getBounds());
    
    map.setView([0,0], 2)
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

export default MarkerCluster;
