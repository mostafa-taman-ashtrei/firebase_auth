import React from 'react';
import { Link } from 'react-router-dom';
import {
    Heading, Flex, Box, Spacer, Button,
} from '@chakra-ui/react';

const Home: React.FC = () => (
    <Flex>
        <Box p="2">
            <Heading size="md">FireBase Auth Home</Heading>
        </Box>
        <Spacer />
        <Box>
            <Link to="/register">
                <Button background="green.400" mr="4">
                    Register
                </Button>
            </Link>
            <Link to="/login">
                <Button background="green.400">Log in</Button>
            </Link>
        </Box>
    </Flex>
);

export default Home;
