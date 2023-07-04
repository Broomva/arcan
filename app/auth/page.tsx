"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import React, { FormEventHandler, useState } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '@/app/auth/config/firebase';
import Loading from '@/app/admin_pane/dashboard/Loading';
import { errorMessage, successMessage } from "@/app/misc/helpers/ui";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


export const FirebaseAuthProvider = {
        popupMode: true,
        signInFlow: 'popup',
        signInSuccessUrl: '/admin_pane/dashboard',
        siteName: 'arcanapp.io',
        //tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/auth/privacy_policy',
        signInOptions: [
            GoogleAuthProvider.PROVIDER_ID,
            GithubAuthProvider.PROVIDER_ID,
            EmailAuthProvider.PROVIDER_ID,
        ]
    }   

export const FirebaseAuthPane = () => {
    return (

        <div className="flex flex-col items-center justify-center w-full h-full p-10">
        <StyledFirebaseAuth uiConfig={FirebaseAuthProvider} firebaseAuth={getAuth(app)} />
        </div>
    );
}
    
export default function Home() {
    // const [email, setEmail] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    const router = useRouter()
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);


    if (loading) return <Loading />

    if (error) {
        console.error(error);
        errorMessage("Incorrect Email/Password ❌");
    }

    else if (user) {
        // user is already logged in, redirect to home page
        successMessage("Authentication successful 🎉");
        router.push('/admin_pane/dashboard');
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        router.push('/auth/signin')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

            <a
            className="fixed left-0 top-0 flex w-full justify-center place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_self"
            rel="noopener noreferrer"
            >
            Home 
            <Image
                src="/arcan.png"
                alt="arcan logo"
                className="dark:invert"
                width={100}
                height={0}
                priority
                />
            </a>
            </div>

            <div className="flex min-h-full flex-1 flex-col justify-center px-24 py-12 lg:px-20">
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <Image 
                        className="mx-auto h-20 w-auto"
                        src="/arcan.png"
                        alt="Arcan Login"
                        width={800}
                        height={1200} 
                    />
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Arcan Login</h2> */}

                        {/* <form className="mx-auto max-w-lg rounded-lg border"> */}
                        <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
                                <FirebaseAuthPane /> 

                            {/* <div className="flex items-center justify-center p-2">
                                <button className="block center rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                                    Sign In with Email
                                </button>
                            </div> */}

                            <div className="flex items-center justify-center bg-gray-100 p-4">
                                <p className="text-center text-sm text-gray-500">Dont have an account? 
                                    <a href="/auth/signup" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"> Sign Up! </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
   );
}
