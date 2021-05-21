import React from 'react';
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutlineRounded, ArrowForwardOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns';

import boy from '../img/boy.png';
// https://icon-icons.com/icon/boy-child-man-male-people-avatar/131270

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
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolBar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
        },
        avatar : {
            marginLeft : theme.spacing(2),
        },

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



    // HTML DOM Nodes
    return (
        <div className={classes.root}>

            {/* app bar */}

            <AppBar className={classes.appBar} elevation={0} >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is : {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Taiseen
                    </Typography>
                    <Avatar src={boy}  className={classes.avatar}/>
                </Toolbar>
            </AppBar>


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
                <div className={classes.toolBar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;