import React, { useState } from "react";
import { CircularProgress, FormControl, Grid, Typography, InputLabel, MenuItem, Select } from "@mui/material";
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import { StyledFormControl, StyledContainer, StyledList, StyledMarginBottom, StyledLoading, StyledSelectEmpty } from './styles';
const List = ({ places, rating, setRating, type, setType, isLoading }) => {
    //const classes = useStyles();


    return (
        <StyledContainer>
            <Typography variant="h4">Restaurants, Hotels & Attractions</Typography>
            {isLoading ? (
                <StyledLoading>
                    <CircularProgress color="success" size="8rem"/>
                </StyledLoading>
            ) : (
                <>
                    <StyledFormControl variant="standard" >
                        <InputLabel >Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            label="Type">
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <StyledFormControl>
                        <InputLabel>Rating</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={rating} onChange={(e) => setRating(e.target.value)}
                            label="Rating">
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <StyledList container spacing={3}>
                        {places?.map((place, i) => (
                            <Grid key={i} item xs={12}>
                                <PlaceDetails place={place} />
                            </Grid>
                        ))}
                    </StyledList>
                </>
            )}
        </StyledContainer >
    );
}

export default List;
