import React from 'react';
import { Stack, Flex, Text } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => (
    <Stack as="main" align="center">
        <Flex p="2" w="100%" as="nav" flexDirection="row" pt="4" justify="space-between" backgroundColor="green.400">
            <Text>FireBase Auth</Text>
            <ThemeToggle />
        </Flex>
    </Stack>
);

export default Navbar;
