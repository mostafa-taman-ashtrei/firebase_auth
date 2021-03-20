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
import { auth } from '../firebase';
import { alertInterface } from '../types';

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [alert, setAlert] = useState<alertInterface | null>(null);

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().min(2, 'Email must be at leat 2 chars').email('Invalid email').required('Required Field'),
        }),
        onSubmit: async ({ email }) => {
            setLoading(true);
            try {
                await auth.sendPasswordResetEmail(email);
                setAlert({ message: `Success, check ${email} inbox for details`, type: 'success' });
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
                <Heading size="lg" mb="5">Sign up</Heading>

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
                    <Button background="green.400" mt="3" size="lg" w="full" type="submit">Reset</Button>
                </form>
            </Box>
        </Center>
    );
};

export default ForgotPassword;
