

import { Inter } from 'next/font/google'

import Image from "next/image";
import Link from "next/link";

export default function ArcanReport() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> </div>

        <div id="disasters_report" className="embebed">
            <iframe
            title="disasters_report"
            width="100%"
            height="2000"
            src="https://app.hex.tech/2f4305db-d567-4b07-8c33-652d7eb206c5/app/ed7149ad-9ca0-4662-a838-a0ec735ec38b/latest?embedded=true"
            />
        </div>
    </main>
  );
}