import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  location: [number, number];
}

const Map = ({ location }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current) return;

    // Since we don't have a Supabase connection, we'll use a temporary token input
    const defaultToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHNqOWh2NW0wMXBrMmpxdDk2cGN6ZHB1In0.qY4WrHzr0RfBhbQWnzE_DA';
    const userToken = window.prompt('Please enter your Mapbox token (or press Cancel to use a temporary token)');
    const mapboxToken = userToken || defaultToken;
    
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: location, // Using the passed location
        zoom: 15
      });

      new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map.current);
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [location]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;