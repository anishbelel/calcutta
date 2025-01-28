import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useMediaQuery } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const containerStyle = {
    height: '95vh',
    width: '100%',
};

function Map1({ setCoords, setBounds, coords, places }) {
    const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
    const isDesktop = useMediaQuery('(min-width:600px)');

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAPUWf12X0PdjCYB6xM98jzUHQ_cHaIeAM"
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const logMapInfo = useCallback(() => {
        if (map) {
            const centers = map.getCenter();
            const boundss = map.getBounds();
            const nee = boundss.getNorthEast();
            const swe = boundss.getSouthWest();

            const newCoords = { lat: centers.lat(), lng: centers.lng() };
            const newBounds = {
                ne: { lat: nee.lat(), lng: nee.lng() },
                sw: { lat: swe.lat(), lng: swe.lng() }
            };

            // Update only if the new values are different from the current ones
            setCoords(prevCoords => {
                if (prevCoords.lat !== newCoords.lat || prevCoords.lng !== newCoords.lng) {
                    return newCoords;
                }
                return prevCoords;
            });

            setBounds(prevBounds => {
                if (prevBounds.ne.lat !== newBounds.ne.lat || prevBounds.ne.lng !== newBounds.ne.lng ||
                    prevBounds.sw.lat !== newBounds.sw.lat || prevBounds.sw.lng !== newBounds.sw.lng) {
                    return newBounds;
                }
                return prevBounds;
            });

            console.log('Center:', newCoords);
            console.log('Top-right corner (NE):', newBounds.ne);
            console.log('Bottom-left corner (SW):', newBounds.sw);
        }
    }, [map, setCoords, setBounds]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoords({ lat: latitude, lng: longitude });
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error retrieving location: ", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, [setCoords]);

    useEffect(() => {
        if (map && currentLocation.lat !== 0 && currentLocation.lng !== 0) {
            map.panTo(currentLocation);
        }
    }, [map, currentLocation]);

    console.log(coords);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onBoundsChanged={logMapInfo}
            onCenterChanged={logMapInfo}
        >
            {places && places.length && places.map((place, i) => (
                <Marker
                    key={i}
                    position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
                    icon={{
                        url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="48px" height="48px">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 4.26 5.4 10.74 6.1 11.46.19.19.44.29.7.29.26 0 .51-.1.7-.29C13.6 19.74 19 13.26 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                            </svg>
                        `),
                        scaledSize: new window.google.maps.Size(isDesktop ? 48 : 24, isDesktop ? 48 : 24),
                    }}
                />
            ))}
            <></>
        </GoogleMap>
    ) : <></>;
}

export default React.memo(Map1);
