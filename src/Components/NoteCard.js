import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const width = 1;
const style = 'solid'; //  [ solid, dashed , dotted ]

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'work') {
                return `${width}px ${style} red`
            } else if (note.category === 'money') {
                return `${width}px ${style} green`
            } else if (note.category === 'reminder') {
                return `${width}px ${style} blue`
            } else if (note.category === 'todo') {
                return `${width}px ${style} orange`
            }
        }
    },
    titleDate: {
        fontSize: 12,
    }
});



function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note);

    const { id, title, category, date, details } = note;

    return (

        <Card elevation={1} className={classes.test}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={title}
                subheader={category}
            />
            <CardContent>
                <Typography className={classes.titleDate} color="textSecondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>

        </Card>

    );
}

export default NoteCard;