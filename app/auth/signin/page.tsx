"use client"
import React, { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/auth/config/firebase";
import { errorMessage, successMessage } from "@/app/misc/helpers/ui";


export const LoginUser = (email: string, password: string, router: AppRouterInstance) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            successMessage("Authentication successful 🎉");
            router.push("/admin_pane/dashboard");
        })
        .catch((error) => {
            console.error(error);
            errorMessage("Incorrect Email/Password ❌");
        });
};

export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    LoginUser(email, password, router)

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

        <Image 
            className="mx-auto h-10 w-auto"
            src="/arcan.png"
            alt="Arcan Login"
            width={800}
            height={600} 
        />

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">


            <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <Image 
                        className="mx-auto h-20 w-auto"
                        src="/arcan.png"
                        alt="Arcan Login"
                        width={800}
                        height={1200} 
                />

                <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                        <input name="email" type="email" id="email"
                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="admin@test.com"
                        /> 
                        </div>

                        <div>
                        <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                        <input type="password" name="password" id="password" required
                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="admin123"
                        />
                        </div>

                        <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

                        <div className="relative flex items-center justify-center">
                        <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                        
                    </div>

                </div>

                <div className="flex items-center justify-center bg-gray-100 p-4">
                    <p className="text-center text-sm text-gray-500">Dont have an account? <a href="/auth/signup" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign Up!</a></p>
                </div>
                </form>
            </div>
            </div>

           
        </div>

        </main>
  );
}