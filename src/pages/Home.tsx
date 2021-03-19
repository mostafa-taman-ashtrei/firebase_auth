import React from 'react';
import { Link } from 'react-router-dom';
import {
    Heading, Flex, Box, Spacer, Button, Grid,
} from '@chakra-ui/react';

const Home: React.FC = () => (
    <Flex>
        <Box p="2">
            <Heading size="md">FireBase Auth Home</Heading>
        </Box>
        <Spacer />
        <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                <Box w="100%" h="10">
                    <Link to="/register">
                        <Button background="green.400">
                            Register
                        </Button>
                    </Link>
                </Box>

                <Box w="100%" h="10">
                    <Link to="/login">
                        <Button background="green.400">Log in</Button>
                    </Link>
                </Box>

                <Box w="100%" h="10">
                    <Link to="/dashboard">
                        <Button background="green.400">Dashboard</Button>
                    </Link>
                </Box>
            </Grid>
        </Box>

    </Flex>
);

export default Home;
