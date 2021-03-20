import React, { useState } from 'react';
import {
    Box,
    Center,
    Heading,
    Button,
    Progress,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import MyInput from '../components/MyInput';
import { useAuth } from '../context/authContext';
import { alertInterface } from '../types';

const UpdateProfile: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [alert, setAlert] = useState<alertInterface | null>(null);
    const { currentUser } = useAuth();

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().min(2, 'Email must be at leat 2 chars').email('Invalid email').required('Required Field'),
            password: Yup.string().min(8, 'Password must be at leat 8 chars').required('Required Field'),
            confirmPassword: Yup.string().required('Required Field').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: async ({ email, password }) => {
            setLoading(true);
            try {
                await currentUser?.updateEmail(email);
                await currentUser?.updatePassword(password);
                setAlert({ message: `Success, ${email} data has been updated`, type: 'success' });
            } catch (e) {
                setAlert({ message: e.message, type: 'error' });
            }
            setLoading(false);
        },
    });

    if (loading) return <Progress size="xs" isIndeterminate />;

    return (
        <Center>
            <Box w="xl" p={8} shadow="2xl">
                {
                    alert
                        ? (
                            <Alert status={alert.type}>
                                <AlertIcon />
                                {alert.message}
                            </Alert>
                        ) : null
                }
                <Heading size="lg" mb="5">Update Profile</Heading>

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

                    <MyInput
                        label="ConfirmPassword"
                        placeholder="ConfirmPassword ..."
                        id="confirmPassword"
                        type="password"
                        size="lg"
                        variant="filled"
                        value={values.confirmPassword}
                        setValue={handleChange}
                        handleBlur={handleBlur}
                        error={
                            touched.confirmPassword && fErrors.confirmPassword
                                ? fErrors.confirmPassword : undefined
                        }
                    />

                    <Button background="green.400" mt="3" size="lg" w="full" type="submit">Update</Button>
                </form>
            </Box>
        </Center>
    );
};
export default UpdateProfile;
