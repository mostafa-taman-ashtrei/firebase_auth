import React from 'react';
import {
    Button, Heading, Text, Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/authContext';
import { auth } from '../firebase';

const Dashboard: React.FC = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            {currentUser ? (
                <>
                    <Heading>
                        Welcome
                        {' '}
                        <Text as="mark" background="green.400">{currentUser?.email}</Text>
                    </Heading>
                    <Text fontSize="lg">
                        Your account is
                        {currentUser?.emailVerified ? ' verified' : ' not verified'}
                    </Text>
                    <Button background="green.400" mt="3" size="lg" w="md" onClick={() => auth.signOut()}>Logout</Button>
                </>
            ) : (
                <Box>
                    <Heading>Home Page</Heading>
                    <Link to="/login">
                        <Button background="green.400">Log in</Button>
                    </Link>
                </Box>
            )}
        </div>
    );
};

export default Dashboard;
