import React, { useState } from 'react';
import { Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useHistory } from 'react-router';
import { format } from 'date-fns';

const useStyles = makeStyles({
    field: {
        margin: '20px 0',
        display: 'block',
    },

});


function CreateNote() {

    const classes = useStyles();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const [category, setCategory] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        const date = format(new Date(), 'do MMMM Y');
        if (title && details) {

            const url = 'http://localhost:8000/allNotes';

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, details, category, date })
            }).then(history.push('/'))
        }
    }


    return (
        <Container>
            <Typography variant="h4">
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />

                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Note Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={5}
                    fullWidth
                    required
                    error={detailsError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel control={<Radio />} value="money" label="Money" />
                        <FormControlLabel control={<Radio />} value="todo" label="ToDo" />
                        <FormControlLabel control={<Radio />} value="work" label="Work" />
                        <FormControlLabel control={<Radio />} value="reminder" label="Reminder" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />} >
                    Submit
                </Button>
            </form>

        </Container>
    );
}

export default CreateNote;