import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  location: [number, number];
}

const Map = ({ location }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const defaultToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHNqOWh2NW0wMXBrMmpxdDk2cGN6ZHB1In0.qY4WrHzr0RfBhbQWnzE_DA';
    const userToken = window.prompt('Please enter your Mapbox token (or press Cancel to use a temporary token)');
    const mapboxToken = userToken || defaultToken;
    
    mapboxgl.accessToken = mapboxToken;
    
    try {
      if (!mapInstance.current) {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: location,
          zoom: 15
        });

        const marker = new mapboxgl.Marker()
          .setLngLat(location)
          .addTo(map);

        mapInstance.current = map;
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
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