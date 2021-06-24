import React from 'react';
import {
    Stack, Flex, Text, IconButton, Tooltip,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/authContext';
import { auth } from '../firebase';

const Navbar: React.FC = () => {
    const { currentUser } = useAuth();
    const history = useHistory();

    return (
        <Stack as="main" align="center" mb="2">
            <Flex p="2" w="100%" as="nav" flexDirection="row" pt="4" justify="space-evenly" backgroundColor="green.400">
                <Link to="/">
                    <Text fontSize="lg">FireBase Auth</Text>
                </Link>
                <ThemeToggle />
                {
                    currentUser
                        ? (
                            <Tooltip label="Logout" aria-label="Logout Button">
                                <IconButton
                                    colorScheme="green"
                                    aria-label="Logout"
                                    icon={<ArrowForwardIcon />}
                                    size="sm"
                                    onClick={() => {
                                        auth.signOut();
                                        history.push('/');
                                    }}
                                >
                                    <Text fontSize="lg" color="black">Logout</Text>
                                </IconButton>
                            </Tooltip>

                        ) : null
                }
            </Flex>
        </Stack>
    );
};

export default Navbar;
