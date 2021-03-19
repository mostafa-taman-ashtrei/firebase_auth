import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/authContext';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
    <Router>
        <AuthProvider>
            <>
                <NavBar />
                <Box p={9} m={8} textAlign="center">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </Box>
            </>
        </AuthProvider>
    </Router>
);

export default App;
