import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZ2VvcmdlYnVzaCIsImEiOiJjbDhrb3F2dmEwMGxkNDFtNngxaXIwZmV1In0.FflPX3EsanrCJODtmXWivw';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-87.20385516299524);
    const [lat, setLat] = useState(30.42685841549714);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}