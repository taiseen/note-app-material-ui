import React from 'react';
import { Drawer, makeStyles, Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles({
    page: {
        backgroundColor: '#f2f2f2',
        width: '100%',
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: 'flex',
    }
})

function Layout({ children }) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* app bar */}


            {/* side bar */}

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }} >

                <div>
                    <Typography variant="h5">
                        Note Gallary
                    </Typography>
                </div>
            </Drawer>


            {/* all notes */}
            <div className={classes.page}>
                {children}
            </div>
        </div>
    );
}

export default Layout;