import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from '../NoteCard/NoteCard';

function AllNotes() {

    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:8000/allNotes';

        fetch(url)
            .then(res => res.json())
            .then(data => setAllNotes(data))
            .catch(err => console.log(err));

    }, [])


    return (
        <Container>
            <Grid container>
                {
                    allNotes.map(note => (

                        <Grid item key={note.id} xs={12} sm={6} md={3} >
                            <NoteCard note={note} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default AllNotes;