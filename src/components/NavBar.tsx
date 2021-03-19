import React from 'react';
import { Stack, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => (
    <Stack as="main" align="center" mb="2">
        <Flex p="2" w="100%" as="nav" flexDirection="row" pt="4" justify="space-between" backgroundColor="green.400">
            <Link to="/">
                <Text fontSize="lg">FireBase Auth</Text>
            </Link>
            <ThemeToggle />
        </Flex>
    </Stack>
);

export default Navbar;
