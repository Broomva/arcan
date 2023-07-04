"use client";
import {
    onAuthStateChanged,
    getAuth,
    User,
  } from 'firebase/auth';
import { app } from '@/app/auth/config/firebase';
import React, { createContext, useContext, useEffect, useState} from 'react';
import Loading from '@/app/admin_pane/dashboard/Loading'

import { auth } from "@/app/auth/config/firebase"
import { useRouter } from 'next/navigation'

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
    }, []);

    return (
    <AuthContext.Provider value={{ user }}>
        {loading ? <Loading></Loading> : children}
    </AuthContext.Provider>
    );
};

