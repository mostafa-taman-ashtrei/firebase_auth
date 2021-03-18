import React, { useState } from 'react';
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
import { auth } from '../firebase';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        const user = await auth.signInWithEmailAndPassword(email, password);
        console.log(user);
    };

    return (
        <Center>
            <Box w="xl" p={8} shadow="2xl">
                <Heading size="lg" mb="5">Login</Heading>
                <form>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            size="lg"
                            variant="filled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            size="lg"
                            variant="filled"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button background="green.400" mt="3" size="lg" w="full" onClick={handleSubmit}>Login</Button>
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
};
export default Login;
