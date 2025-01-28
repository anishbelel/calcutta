import React, { useState } from 'react';
import axios from 'axios';
import { HeaderContainer } from './style';
import { } from '@mui/material';

import { TextField, Box, Card, CardActions, CardContent, Typography, List, ListItem, ListItemText, Collapse, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Shortest() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);  // Reset any previous errors
        setResult(null);  // Reset any previous results

        try {
            console.log(x);
            console.log(y);
            const response = await axios.get('https://calcutta.onrender.com', {
                params: { x, y }
            });
            console.log(response.data);
            setResult(response.data.vec);  // Assuming server returns { sum: value }
        } catch (err) {
            console.error('There was an error making the request:', err);
            setError(err.message);
        }
    };

    //Includes all the jucntions stations here
    const junctionStations = ['kamarkundu', 'dankuni', 'bally','saktigarh','sheoraphuli','bandel','dumdum','naihati','ranaghat','kalinarayanpur','barasat'];

    const time = result && result.length > 0 ? result[0] : null;
    const renderResults = () => {

        const segments = [];
        let currentSegment = [];

        for (let i = 1; i < result.length; i++) {
            const station = result[i];
            const isJunction = junctionStations.includes(station);

            if (isJunction && currentSegment.length > 0) {
                segments.push([...currentSegment, station]);
                currentSegment = [];
            } else {
                currentSegment.push(station);
            }
        }

        if (currentSegment.length > 0) {
            segments.push(currentSegment);
        }

        console.log(segments);

        return segments.map((segment, index) => (
            <Card key={index} sx={{ marginBottom: '16px' }}>
                <CardContent>
                    <List>
                        {segment.map((station, idx) => (
                            <ListItem key={idx} sx={{ padding: '0px', paddingLeft: '5px', border: '1px solid black' }}>
                                <ListItemText
                                    primary={station}
                                    primaryTypographyProps={{
                                        fontWeight: junctionStations.includes(station) ? 'bold' : 'normal',
                                        color: junctionStations.includes(station) && 'red',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        ));
    };

    return (
        <HeaderContainer>

{/* Line 95 to 192 contains the styling when we don't search a station */}

            <div>
                {result === null && (

                    <Box
                        sx={{
                            padding: '16px',
                            maxWidth: '600px',
                            margin: 'auto',
                            textAlign: 'center',
                            // backgroundColor: '#e32214'
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            backgroundColor: '#edd06f',
                            padding: '8px',
                            border: '2px solid black',
                            borderRadius: '4px'
                        }}>
                            First see if there is a direct local in the Local section....↑
                        </Typography>
                        <Typography variant="body1" paragraph sx={{
                            backgroundColor: '#17c2b4',
                            padding: '8px',
                            border: '2px solid black',
                            borderRadius: '10px'
                        }}>
                            No direct roots? Don't worry here you will find the shortest way to travel....
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleExpandClick}>
                            Know More
                        </Button>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Paper
                                elevation={3}
                                sx={{
                                    marginTop: '16px',
                                    padding: '16px',
                                    textAlign: 'left'
                                }}
                            >
                                <Typography variant="body1" paragraph>
                                    If you want to visit anywhere in kolkata just clisk on the kolkata section to view the connected service of local and metro of kolkata.    
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    If you need the local of entire estern railway then stay here.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Box>
                )};
            </div>


            <div>
                {result === null && (
                    <Card elevation={24} sx={{ minWidth: 275, width: '320px' }}>
                        <form onSubmit={handleSubmit}>
                            <CardContent>
                                <div>
                                    <h2> The source station : </h2>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { color: '#e8e1ed', backgroundColor: '#f0faf5', m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Station 1" variant="outlined" value={x}
                                            onChange={(e) => setX(e.target.value)} />

                                    </Box>

                                </div>
                                <div>
                                    <h2> The destination station : </h2>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { color: '#e8e1ed', backgroundColor: '#f0faf5', m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Station 2" variant="outlined" value={y}
                                            onChange={(e) => setY(e.target.value)} />

                                    </Box>

                                </div>
                            </CardContent>
                            <CardActions>
                                <Button color="success" type="submit" variant="contained">Search</Button>
                            </CardActions>
                        </form>
                    </Card>
                )}
            </div>

{/* Line 196 to 298 contains the styling when we srearch a station */}

            <div >
                <div>
                    {result !== null && (

                        <Box
                            sx={{
                                padding: '16px',
                                maxWidth: '600px',
                                margin: 'auto',
                                textAlign: 'center',
                                // backgroundColor: '#e32214'
                            }}
                        >
                            <Typography variant="h5" gutterBottom sx={{
                                backgroundColor: '#edd06f',
                                padding: '8px',
                                border: '2px solid black',
                                borderRadius: '4px'
                            }}>
                                First see if there is a direct local in the Local section....↑
                            </Typography>
                            <Typography variant="body1" paragraph sx={{
                                backgroundColor: '#17c2b4',
                                padding: '8px',
                                border: '2px solid black',
                                borderRadius: '10px'
                            }}>
                                No direct roots? Don't worry here you will find the shortest way to travel....
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleExpandClick}>
                                Know More
                            </Button>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        marginTop: '16px',
                                        padding: '16px',
                                        textAlign: 'left'
                                    }}
                                >
                                    <Typography variant="body1" paragraph>
                                        Here you can include detailed information about the system. This could be instructions on how to use the app, information about different routes and transportation options, or any other relevant details that users might find helpful.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        You can also provide tips for finding the shortest routes, the best times to travel, and any other insights that could improve the user experience.
                                    </Typography>
                                </Paper>
                            </Collapse>
                        </Box>
                    )};
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {result !== null && (
                        <Card elevation={24} sx={{ minWidth: 275, width: '320px',display: 'flex', justifyContent: 'center',
                            alignItems: 'center' }}>
                            <form onSubmit={handleSubmit}>
                                <CardContent>
                                    <div>
                                        <h2> The source station : </h2>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { color: '#e8e1ed', backgroundColor: '#f0faf5', m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" label="Station 1" variant="outlined" value={x}
                                                onChange={(e) => setX(e.target.value)} />

                                        </Box>

                                    </div>
                                    <div>
                                        <h2> The destination station : </h2>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { color: '#e8e1ed', backgroundColor: '#f0faf5', m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" label="Station 2" variant="outlined" value={y}
                                                onChange={(e) => setY(e.target.value)} />

                                        </Box>

                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button color="success" type="submit" variant="contained">Search</Button>
                                </CardActions>
                            </form>
                        </Card>
                    )}
                </div>
            </div>

            <div>
                {result !== null && (
                    <Box
                        sx={{
                            backgroundColor: '#f0f0f0',
                            padding: '16px',
                            borderRadius: '8px',
                            maxWidth: '600px',
                            margin: 'auto',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ width: '200px' }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <AccessTimeIcon /> <Typography>Time: {time} mins</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Please note that the above time don't consider the gap between two train timing at junctions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <Typography variant="h6" gutterBottom>
                            Route:
                        </Typography>
                        {renderResults()}
                    </Box>
                )}
                {error && (
                    <div>
                        <h2>Error: {error}</h2>
                    </div>
                )}
            </div>
        </HeaderContainer>
    );
}

export default Shortest;
