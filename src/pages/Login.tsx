import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Center,
    Heading,
    Button,
    Text,
    Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Login: React.FC = () => (
    <Center>
        <Box w="xl" p={8} shadow="2xl">
            <Heading size="lg" mb="5">Login</Heading>
            <form>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" size="lg" variant="filled" />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" size="lg" variant="filled" />
                </FormControl>

                <Button background="green.400" mt="3" size="lg" w="full">Login</Button>
            </form>
            <Text mt="2.5">
                Don
                {'\''}
                t have an account yet?
                {' '}
                <Link as={RouterLink} to="/register" color="teal.500">Signup</Link>
            </Text>
        </Box>
    </Center>
);

export default Login;
