import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
//import GoogleMap from 'google-maps-react-markers';
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { CookieSharp, ImageNotSupported } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from "@mui/material";


import useStyles from './styles'


const Map =({setCoords,setBounds,coords,places}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery(('min-width:600px'));
    // const handleMapChange = (event) => {
    //     console.log('Map change event:', event);
    //     setLat(event.center.lat);
    //     setLng(event.center.lng);
    //   };
    //const cooords ={lat:20,lng:50};
    console.log("okk"+coords);
    const CustomMarker = ({ lat, lng, isDesktop }) => {
        return (
          <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            {isDesktop ? <LocationOnIcon color="primary" fontSize="large" /> : null}
          </div>
        );
      };
    return (
        <classes.mapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAPUWf12X0PdjCYB6xM98jzUHQ_cHaIeAM' }}
                defaultCenter={{ lat: 11.847676, lng: 12.838442 }}
                center={{ lat: 11.847676, lng: 12.838442 }}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                // onChange={(event)=>{
                //     console.log(event);
                //      const newV = event.bounds;
                //     // setLat(10);
                //     // setLng(newV);
                //     //event.preventDefault();
                //     console.log(newV);
                //     console.log(lng);
                //     //setCoords({lat: 10,lng: 20});
                //     // setBounds({ne : 10, sw: 20});
                // }}
                // //onGoogleApiLoaded={({ map, maps }) => console.log(map.getBounds())}
                // onClick={(e)=>{
                //     console.log(e);
                //     //setCoords({lat:10,lng: 60});
                //     //setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw});
                // }}
            >
            {places.length && places.map((place, i) => (
          <CustomMarker
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            isDesktop={isDesktop}
          />
        ))}

            </GoogleMapReact>
        </classes.mapContainer>
    );
}

export default Map;