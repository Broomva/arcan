"use client"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "@/app/auth/config/firebase";
import { errorMessage, successMessage } from "@/app/misc/helpers/ui";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
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
            // GithubAuthProvider.PROVIDER_ID,
        ]
    }   

// export const auth = app.auth();

export const FirebaseAuthPane = () => {
    return (
        <StyledFirebaseAuth uiConfig={FirebaseAuthProvider} firebaseAuth={auth} />
    );
}

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

