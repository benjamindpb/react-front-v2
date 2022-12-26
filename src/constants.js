import L from 'leaflet';

export const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [20, 34],
    iconAnchor: [10, 34]
    // popupAnchor: [2, -40]
  });
