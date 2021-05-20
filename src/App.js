import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllNotes from './Components/AllNotes';
import CreateNote from './Components/CreateNote';
import PageNotFound from './Components/PageNotFound';
import Layout from './Components/Layout';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";
import About from './Components/About';


const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: blue,
    },
    
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});



const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <AllNotes />
                        </Route>
                        <Route path="/createNote">
                            <CreateNote />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};

export default App;