import React from 'react';
import { styled } from '@mui/material/styles';

import { Typography, useMediaQuery } from '@mui/material';
import { IconContainer, MainContainer } from './styles';

import { ReactComponent as MetroIcon } from './metro2.svg';
import { ReactComponent as Bus } from './bus.svg';
import { ReactComponent as ircts} from './irctc.svg';

import Bus2 from './bus2.png';
import Train from './train.png';
import ferry from './ferry.png';
import cab2 from './cab2.png';
import taxi from './taxi.png';
import kolkata from './Kolkata.png';


const SvgIcon = styled('svg')({
    width: 60, // Set your desired width
    height: 60, // Set your desired height
    marginBottom: 8, // Optional: add some space between the icon and the text
});

const PngIcon = styled('img')({
    width: 60, // Set your desired width
    height: 60, // Set your desired height
    marginBottom: 8, // Optional: add some space between the icon and the text
});

function Icon() {
    const isBelow650px = useMediaQuery('(max-width:650px)');

    return (
        <MainContainer>
            <IconContainer component="a" href="https://www.railyatri.in/live-train-status" target="_blank" rel="noopener noreferrer">
                <PngIcon src={Train} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">Train</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.calcuttatramways.com/bus-route/" target="_blank" rel="noopener noreferrer">
                <SvgIcon as={MetroIcon} />
                {!isBelow650px && <Typography color="blue">Metro</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.calcuttatramways.com/bus-route/" target="_blank" rel="noopener noreferrer">
                <SvgIcon as={Bus} />
                {!isBelow650px && <Typography color="blue">Bus</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://wbtconline.in/home" target="_blank" rel="noopener noreferrer">
                <PngIcon src={Bus2} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">WBTC</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://transport.wb.gov.in/transport-services/ferry-services/ferry-routes/" target="_blank" rel="noopener noreferrer">
                <PngIcon src={ferry} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">Ferry</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.makemytrip.com/cabs/" target="_blank" rel="noopener noreferrer">
                <PngIcon src={cab2} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">Cab</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.clearcarrental.com/kolkata-cab-rates-sheet" target="_blank" rel="noopener noreferrer">
                <PngIcon src={taxi} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">Taxi</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                <PngIcon src={kolkata} alt="Metro Icon" />
                {!isBelow650px && <Typography color="blue">Kolkata</Typography>}
            </IconContainer>
            <IconContainer component="a" href="https://www.irctc.co.in/nget/train-search" target="_blank" rel="noopener noreferrer">
            <SvgIcon as={ircts} />
                {!isBelow650px && <Typography color="blue">IRCTC</Typography>}
            </IconContainer>
        </MainContainer>
    );
}

export default Icon;
