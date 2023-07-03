"use client"
//import { LoginUser } from "@/app/config/utils"
import React, { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '@/app/config/firebase';
import Loading from '@/app/dashboard/Loading';
import { LoginUser, FirebaseAuthProvider } from '@/app/auth/login'
import { errorMessage, successMessage } from "@/app/helpers/ui";



export default function Home() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()
    const [user, loading, error] = useAuthState(auth);

    const authConfig = FirebaseAuthProvider(auth);

    if (loading) return <Loading />

    if (error) {
        console.error(error);
        errorMessage("Incorrect Email/Password ❌");
    }

    else if (user) {
        // user is already logged in, redirect to home page
        successMessage("Authentication successful 🎉");
        router.push('/dashboard');
    }

    // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault()
    //     LoginUser(email, password, router)

    // } onSubmit={handleSubmit}

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-8">
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

                        <form className="mx-auto max-w-lg rounded-lg border">

                            <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />

                            <div className="flex items-center justify-center bg-gray-100 p-4">
                                <p className="text-center text-sm text-gray-500">Dont have an account? 
                                    <a href="/auth/register" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"> Register </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
   );
}
