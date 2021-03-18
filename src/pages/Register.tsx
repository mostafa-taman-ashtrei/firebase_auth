import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Center,
    Heading,
    Button,
    Link,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Register: React.FC = () => (
    <Center>
        <Box w="xl" p={8} shadow="2xl">
            <Heading size="lg" mb="5">Sign up</Heading>
            <form>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" size="lg" variant="filled" />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" size="lg" variant="filled" />
                </FormControl>

                <FormControl id="confirm-password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" size="lg" variant="filled" />
                </FormControl>

                <Button background="green.400" mt="3" size="lg" w="full">Register</Button>
            </form>
            <Text mt="2.5">
                Already have an account?
                {' '}
                <Link as={RouterLink} to="/login" color="teal.500">login</Link>
            </Text>
        </Box>
    </Center>
);

export default Register;
