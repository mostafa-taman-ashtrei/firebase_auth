import React, { useState } from 'react';
import {
    Box,
    Center,
    Heading,
    Button,
    Text,
    Link,
    Progress,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { auth } from '../firebase';
import MyInput from '../components/MyInput';

const Login: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().min(2, 'Email must be at leat 2 chars').email('Invalid email').required('Required Field'),
            password: Yup.string().min(8, 'Password must be at leat 8 chars').required('Required Field'),
        }),
        onSubmit: async ({ email, password }) => {
            setLoading(true);
            try {
                const user = await auth.signInWithEmailAndPassword(email, password);
                console.log(user);
            } catch (e) {
                setError(e.message);
            }
            setLoading(false);
        },
    });

    if (loading) return <Progress size="xs" isIndeterminate />;

    return (
        <Center>
            <Box w="xl" p={8} shadow="2xl">
                {
                    error
                        ? (
                            <Alert status="error">
                                <AlertIcon />
                                {error}
                            </Alert>
                        ) : null
                }
                <Heading size="lg" mb="5">Login</Heading>

                <form onSubmit={handleSubmit}>
                    <MyInput
                        label="Email"
                        placeholder="Email ..."
                        id="email"
                        type="email"
                        size="lg"
                        variant="filled"
                        value={values.email}
                        setValue={handleChange}
                        handleBlur={handleBlur}
                        error={
                            touched.email && fErrors.email ? fErrors.email : undefined
                        }
                    />

                    <MyInput
                        label="Password"
                        placeholder="Password ..."
                        id="password"
                        type="password"
                        size="lg"
                        variant="filled"
                        value={values.password}
                        setValue={handleChange}
                        handleBlur={handleBlur}
                        error={
                            touched.password && fErrors.password ? fErrors.password : undefined
                        }
                    />

                    <Button background="green.400" mt="3" size="lg" w="full" type="submit">Login</Button>
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
