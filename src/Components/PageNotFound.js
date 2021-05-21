import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles({
    center: {
        margin: '0 auto',
        textAlign: 'center',
    }
})
const PageNotFound = () => {

    const classes = useStyles();

    return (

        <Typography variant="h4" className={classes.center}>
            404 | Page Not Found
        </Typography>
    );
};

export default PageNotFound;