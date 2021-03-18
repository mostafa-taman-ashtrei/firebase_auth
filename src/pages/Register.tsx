import React, { useState } from 'react';
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

import { auth } from '../firebase';

const Register: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert('Passwords must match');
            return;
        }
        try {
            setLoading(true);
            const res = await auth.createUserWithEmailAndPassword(email, password);
            res.user?.sendEmailVerification();
            console.log(res);
        } catch (err) {
            console.log(err);
        }
        console.log(email, password, confirmPassword);
        setLoading(false);
    };

    if (loading) return <h1>Loading</h1>;

    return (
        <Center>
            <Box w="xl" p={8} shadow="2xl">
                <Heading size="lg" mb="5">Sign up</Heading>
                <form onSubmit={handleSubmit}>
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

                    <FormControl id="confirm-password" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type="password"
                            size="lg"
                            variant="filled"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button background="green.400" mt="3" size="lg" w="full" onClick={handleSubmit}>Register</Button>
                </form>
                <Text mt="2.5">
                    Already have an account?
                    {' '}
                    <Link as={RouterLink} to="/login" color="teal.500">login</Link>
                </Text>
            </Box>
        </Center>
    );
};

export default Register;
