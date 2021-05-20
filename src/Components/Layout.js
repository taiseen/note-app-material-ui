import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { AddCircleOutlineRounded, ArrowForwardOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {

    return {
        page: {
            backgroundColor: '#f2f2f2',
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex',
        },
        active: {
            backgroundColor: '#F1F1F1',
        },
        title: {
            padding: theme.spacing(2),
            margin: '0 auto',
        }
    }
})

function Layout({ children }) {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menu = [
        {
            text: "All Notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineRounded color="secondary" />,
            path: "/createNote"
        },
        {
            text: "About",
            icon: <ArrowForwardOutlined color="secondary" />,
            path: "/about"
        },
    ];




    return (
        <div className={classes.root}>

            {/* app bar */}



            {/* side bar */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }} >

                <div className={classes.title}>
                    <Typography variant="h5" >
                        Note Gallery
                    </Typography>
                </div>

                {/* List / Links */}
                <List>
                    {
                        menu.map(item => {
                            const { text, icon, path } = item;

                            return (
                                <ListItem
                                    button
                                    key={path}
                                    onClick={() => history.push(path)}
                                    className={location.pathname === path ? classes.active : null}
                                >

                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>


            {/* all notes */}
            <div className={classes.page}>
                {children}
            </div>
        </div>
    );
}

export default Layout;