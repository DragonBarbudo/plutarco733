import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  location: [number, number];
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: location,
      zoom: 15
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Create and store marker
    if (!markerRef.current) {
      markerRef.current = new mapboxgl.Marker()
        .setLngLat(location)
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Local en Renta</h3>'))
        .addTo(map.current);
    }

    return () => {
      map.current?.remove();
    };
  }, [location]);

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg" />
  );
};

export default Map;