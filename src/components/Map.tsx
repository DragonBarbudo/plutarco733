import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '../config/mapbox';

interface MapProps {
  location: [number, number];
}

const Map = ({ location }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const metrobusMarkerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const initializeMap = () => {
      try {
        if (!mapInstance.current && mapContainer.current) {
          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: location,
            zoom: 15
          });

          // Store map instance in ref
          mapInstance.current = map;

          // Create and store property marker
          if (!markerRef.current) {
            markerRef.current = new mapboxgl.Marker()
              .setLngLat(location)
              .addTo(map);
          }

          // Create and store Metrobús marker at the same location as the property
          if (!metrobusMarkerRef.current) {
            // Create a custom marker element
            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.style.backgroundImage = 'url(/metrobus-icon.png)';
            el.style.width = '32px';
            el.style.height = '32px';
            el.style.backgroundSize = 'cover';
            el.style.cursor = 'pointer';

            metrobusMarkerRef.current = new mapboxgl.Marker(el)
              .setLngLat(location) // Using the same location as the property
              .setPopup(new mapboxgl.Popup().setHTML('<h3>Estación Metrobús Andrés Molina</h3>'))
              .addTo(map);
          }
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
      if (metrobusMarkerRef.current) {
        metrobusMarkerRef.current.remove();
        metrobusMarkerRef.current = null;
      }
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [location]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;