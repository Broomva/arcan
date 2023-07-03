"use client"
//import { LoginUser } from "@/app/config/utils"
// import React, { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

import { useAuthState } from 'react-firebase-hooks/auth';

import { app } from '@/app/auth/config/firebase';
// import { auth } from "@/app/auth/config/firebase";
import Loading from '@/app/admin_pane/dashboard/Loading';
//import { LoginUser, FirebaseAuthProvider } from '@/app/auth/login'
import { errorMessage, successMessage } from "@/app/misc/helpers/ui";
import { FirebaseAuthPane} from "@/app/auth/login"


import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// export const FirebaseAuthProvider = {
//         signInFlow: 'popup',
//         signInSuccessUrl: '/admin_pane/dashboard',
//         //tosUrl: '/terms-of-service',
//         privacyPolicyUrl: '/auth/privacy_policy',
//         signInOptions: [
//             GoogleAuthProvider.PROVIDER_ID,
//             GithubAuthProvider.PROVIDER_ID,
//         ]
// }


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

    // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault()
    //     LoginUser(email, password, router)

    // } onSubmit={handleSubmit}

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

                            <FirebaseAuthPane /> 

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




// import React, { useState } from 'react'
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import './App.css';

// // import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: 
//   authDomain:
//   databaseURL: 
//   projectId: 
//   storageBucket: 
//   messagingSenderId: 
//   appId: 
// };


// initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const firebaseApp = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
// const auth = getAuth(firebaseApp);

// export default function App() {
//   const [user, setUser] = useState(null)
//   onAuthStateChanged(auth, (user) => {
//           if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             setUser(user);
//             // ...
//           } else {
//             // User is signed out
//             // ...
//             setUser(null)
//             }
//           }
//         );

//   return <>{user ? 
//   <><p>Welcome</p><button onClick={() => signOut(auth)}>Google Logout</button></>
//   : <><p>Enjoy</p>
//   <button onClick={() =>  signInWithPopup(auth, provider)
//                   .then((result) => {
//                     // The signed-in user info.
//                     // eslint-disable-next-line
//                     const user = result.user;
//                     // ...
//                   }).catch((error) => {
//                     // Handle Errors here.
//                     // eslint-disable-next-line
//                     const errorCode = error.code;
//                     // eslint-disable-next-line
//                     const errorMessage = error.message;
//                     // The email of the user's account used.
//                     // eslint-disable-next-line
//                     const email = error.email;
//                     // The AuthCredential type that was used.
//                     // eslint-disable-next-line
//                     const credential = GoogleAuthProvider.credentialFromError(error);
//                     // ...
//                   })}>
//                       Sign in with Google
//                     </button>
//   </>}</>
// }