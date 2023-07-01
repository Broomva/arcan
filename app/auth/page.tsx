"use client"
import { LoginUser } from "@/app/utils"
import React, { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

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
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

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
                    <span className="relative bg-white px-4 text-sm text-gray-400">Log in with social</span>
                    </div>

                    {/* <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                    <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z" fill="white" />
                    </svg>

                    Continue with Facebook
                    </button> */}

                    <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                        <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                        <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                        <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                    </svg>

                    Continue with Google
                    </button>
                </div>

                <div className="flex items-center justify-center bg-gray-100 p-4">
                    <p className="text-center text-sm text-gray-500">Dont have an account? <a href="/" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
                </div>
                </form>
            </div>
            </div>

           
        </div>

        </main>
  );
}






// import { LoginUser } from "@/utils"
// import { useRouter } from 'next/navigation'
// import { FormEventHandler, useState } from "react"

// export default function Auth() {
//   const [email, setEmail] = useState<string>("")
//   const [password, setPassword] = useState<string>("")
//   const router = useRouter()
  
//   const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
//     e.preventDefault()
//     LoginUser(email, password, router)

//   }
  
//   return (
//     <main className="w-full h-[90vh] flex items-center justify-center flex-col px-4"> 
//       <h2 className="text-3xl font-bold mb-6">Sign in </h2>
//       <form className="flex flex-col md:w-1/2 w-full mb-8" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input type="email" name="email" id="email"
//           className="border-[1px] py-2 px-4 rounded mb-4" required
//           value={email}
//           onChange={e => setEmail(e.target.value)} 
//           placeholder="admin@test.com"
//         />
//         <label htmlFor="password">Password</label>
//         <input type="password" name="password" id="password" required
//           className="border-[1px] py-2 px-4 rounded  mb-4"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="admin123"
//         /> 
//         <button type="submit" className="p-3 bg-blue-600 hover:bg-blue-800 text-white md:w-[200px] w-full rounded">LOG IN</button>
//       </form>
//     </main>
//   )
// }

// {/* <p className="text-gray-400 text-center text-sm">&copy; Copyright {new Date().getFullYear()} by <a href="https://github.com/Broomva/arcan target="_blank" className="text-blue-300 text-sm">Arcan</a></p> */}








 
// <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// <Image 
// className="mx-auto h-10 w-auto"
// src="/arcan.png"
// alt="Arcan Login"
// width={500} // you need to specify width
// height={300} // and height
// />
// <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//     Sign in to your account
// </h2>
// </div>

// <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// <form className="space-y-6" onSubmit={handleSubmit}>
// {/* action="" method="POST" */}
//     <div>
//     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//         Email address
//     </label>
//     <div className="mt-2">
//         <input
//         id="email"
//         name="email"
//         type="email"
//         autoComplete="email"
//         required
//         className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         value={email}
//         onChange={e => setEmail(e.target.value)} 
//         placeholder="guest@arcan.ai"
//         />
//     </div>
//     </div>

//     <div>
//     <div className="flex items-center justify-between">
//         <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//         Password
//         </label>
//         <div className="text-sm">
//         <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//             Forgot password?
//         </a>
//         </div>
//     </div>
//     <div className="mt-2">
//         <input
//         id="password"
//         name="password"
//         type="password"
//         autoComplete="current-password"
//         required
//         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="guest"
//         />
//     </div>
//     </div>

//     <div>
//     <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">LOG IN</button>
//     </div>
// </form>

// <p className="mt-10 text-center text-sm text-gray-500">
//     Not a member?{' '}
//     <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//     Start a 14 day free trial
//     </a>
// </p>
// </div>