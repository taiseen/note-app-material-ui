import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import NoteCard from './NoteCard';

function AllNotes() {

    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:8000/allNotes';

        fetch(url)
            .then(res => res.json())
            .then(data => setAllNotes(data))
            .catch(err => console.log(err));

    }, []);


    const handleDelete = async (id) => {

        // remove form Server 
        const url = 'http://localhost:8000/allNotes/' + id;
        await fetch(url, { method: 'DELETE' });

        // remove form UI 
        const newNotes = allNotes.filter(note => note.id !== id);
        setAllNotes(newNotes);
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }
    
    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    allNotes.map(note => (

                        <div key={note.id}>
                            <NoteCard note={note} handleDelete={handleDelete} />
                        </div>
                    ))
                }
            </Masonry>

            {/* <Grid container spacing={3}>
                {
                    allNotes.map(note => (

                        <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
                            <NoteCard note={note} handleDelete={handleDelete}/>
                        </Grid>
                    ))
                }
            </Grid> */}
        </Container>
    );
}

export default AllNotes;