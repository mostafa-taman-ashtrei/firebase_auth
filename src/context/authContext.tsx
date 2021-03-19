import React, {
    useState, useEffect, useContext, createContext,
} from 'react';
import firebase from 'firebase';
import { Progress } from '@chakra-ui/react';

import { auth } from '../firebase';

interface ContextValue {
    currentUser: firebase.User | null,
    loading: boolean,
}

const initialState: ContextValue = {
    currentUser: null,
    loading: true,
};

const AuthContext = createContext<ContextValue>(initialState);

const AuthProvider = ({ children }: { children: React.ReactChild }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <Progress size="xs" isIndeterminate /> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
