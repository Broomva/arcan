"use client"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signOut } from "firebase/auth";
import { errorMessage, successMessage } from "@/app/misc/helpers/ui";
import { auth } from "@/app/auth/config/firebase"

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