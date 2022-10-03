import L from 'leaflet';

export const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [15, 25],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });