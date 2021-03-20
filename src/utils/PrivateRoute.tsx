import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../context/authContext';

interface props extends RouteProps {
    RouteComponent: React.ElementType,
}

const PrivateRoute: React.FC<props> = ({ RouteComponent, ...rest }: props) => {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={(routeProps) => (currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to="/login" />
            ))}
        />
    );
};

export default PrivateRoute;
