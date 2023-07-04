"use client";
import Loading from '@/app/admin_pane/dashboard/Loading';
import { app } from '@/app/auth/config/firebase';
import {
    User,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

type AuthContextType = {
    user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
});

export const useAuthContext = () => useContext(AuthContext);

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);    
    const [loading, setLoading] = useState(true);
    const router = useRouter()
    

    useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user !== null) {
            setUser(user);
        } else {
            return router.push("/auth");
        }
        setLoading(false);
    });

    return () => unsubscribe();
    }, [router]);

    return (
    <AuthContext.Provider value={{ user }}>
        {loading ? <Loading/> : children}
    </AuthContext.Provider>
    );
};

