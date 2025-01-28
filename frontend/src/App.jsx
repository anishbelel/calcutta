import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Grid } from "@mui/material";
import { getplaceData } from "./api";
import Header from './components/Header/Header';
import Iconic from './components/Iconic/Iconic';
import List from './components/List/List';
//import Map from './components/Map/Map';
import Map1 from "./components/Map/Map1";
import Shortest from "./components/Shortest/Shortest";
import Footer from "./components/Footer/Footer";
import Contact from './components/Header/Contact';



function App() {
    const [places, setPlaces] = useState([]);

    const [coords, setCoords] = useState({ lat: 10, lng: 50 });
    const [bounds, setBounds] = useState({
        sw: { lat: 20.789492290435888, lng: 88.28606980028076 },
        ne: { lat: 22.80207341930233, lng: 98.35207359971923 },
    });

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    // const [cooords,setCooords] = useState();
    // const [lat,setLat] = useState(10);
    // const [lng,setLng] = useState(20);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);

        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        setIsLoading(true);
        getplaceData(type, bounds.sw, bounds.ne).then((data) => {
            //console.log(data);
            setPlaces(data);
            setFilteredPlaces([]);
            setIsLoading(false);
        })
    }, [type, coords, bounds]);


    return (
        <div>
            <CssBaseline />
            <Router>
                
                <Routes>
                <Route path="/" element={<Header/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Iconic />
            <Shortest />
            <Grid container spacing={1} style={{ width: '98%' }}>

                <Grid item xs={12} md={8}>
                    {/* <Map setCoords={setCoords} places={places} setBounds={setBounds} coords={coords}   /> */}
                    <Map1 setCoords={setCoords} places={places} setBounds={setBounds} coords={coords} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating} />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}
export default App;
