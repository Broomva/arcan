"use client";
import React from "react";
import { useAuthContext } from "@/app/context/auth";
import { useRouter } from "next/navigation";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user, router])

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;