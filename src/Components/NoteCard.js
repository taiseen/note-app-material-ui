import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core';
import { blue, green, orange, pink } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const width = 1;
const style = 'solid'; //  [ solid, dashed , dotted ]

const useStyles = makeStyles({
    borderColor: {
        border: (note) => {
            if (note.category === 'work') {
                return `${width}px ${style} ${pink[500]}`;
            } else if (note.category === 'money') {
                return `${width}px ${style} ${green[500]}`;
            } else if (note.category === 'reminder') {
                return `${width}px ${style} ${blue[500]}`;
            } else {
                return `${width}px ${style} ${orange[500]}`;
            }
        },
    },
    titleDate: {
        fontSize: 12,
    },
    avatarColor: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return pink[500]
            } else if (note.category === 'money') {
                return green[500]
            } else if (note.category === 'reminder') {
                return blue[700]
            } else {
                return orange[600]
            }
        },
        fontWeight: 600,
    }
});



function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note);

    const { id, title, category, date, details } = note;

    return (

        <Card elevation={1} className={classes.borderColor}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatarColor}>
                        {category[0].toUpperCase()}
                    </Avatar>
                }

                action={
                    <IconButton onClick={() => handleDelete(id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={title}
                subheader={`${category} | ${date}`}
            />
            <CardContent>
                <Typography className={classes.titleDate} color="textPrimary" gutterBottom>
                    {category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>

        </Card>

    );
}

export default NoteCard;