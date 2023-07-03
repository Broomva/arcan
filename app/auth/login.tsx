"use client"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { errorMessage, successMessage } from "@/app/helpers/ui";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

   //  const [user, loading, error] = useAuthState(auth);

    // if(loading) return <Loading/>

    // else if (user) {
    //     // user is already logged in, redirect to home page
    //     router.push('/dashboard');
    // }


export const FirebaseAuthProvider = (auth) => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/dashboard',
        //tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/auth/privacy_policy',
        signInOptions: [
            GoogleAuthProvider.PROVIDER_ID,
            GithubAuthProvider.PROVIDER_ID,
        ]
    }   
}

export const LoginUser = (email: string, password: string, router: AppRouterInstance) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            successMessage("Authentication successful 🎉");
            router.push("/dashboard");
        })
        .catch((error) => {
            console.error(error);
            errorMessage("Incorrect Email/Password ❌");
        });
};

export const LogOut = (router: AppRouterInstance) => {
	signOut(auth)
		.then(() => {
			successMessage("Logout successful! 🎉");
			router.push("/");
		})
		.catch((error) => {
			errorMessage("Couldn't sign out ❌");
		});
};