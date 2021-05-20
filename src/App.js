import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllNotes from './Components/AllNotes/AllNotes';
import CreateNote from './Components/CreateNote/CreateNote';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, green, purple } from "@material-ui/core/colors";


const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: blue,
        typography: {
            fontFamily: 'Quicksand',
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        },
    }

});



const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <AllNotes />
                    </Route>
                    <Route path="/createNote">
                        <CreateNote />
                    </Route>
                    <Route path="/*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;