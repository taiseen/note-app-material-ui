import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

function NoteCard({ note, handleDelete }) {

    const { id, title, category, details } = note;

    return (

        <Card elevation={1}>
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
                <Typography variant="body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>

        </Card>

    );
}

export default NoteCard;