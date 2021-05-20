import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@material-ui/core';

function About(props) {


    const context = [
        'Material UI',
        'Layout Wrapping and accessing those chields',
        'JSON Data Server',
        'Menu inside array & useHistory to clicking theme',
    ]

    return (
        <Container >
            <Typography variant="h4">
                Learning Context
            </Typography>

            <List>
                {
                    context.map((data, idx) => (
                        <ListItem key={data[idx]}>
                            <ListItemText primary={data} />
                        </ListItem>
                    ))
                }
            </List>

            <ul>
            </ul>
        </Container>
    );
}

export default About;