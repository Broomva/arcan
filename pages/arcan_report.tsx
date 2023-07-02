

import { Inter } from 'next/font/google'

import Image from "next/image";
import Link from "next/link";

export default function ArcanReport() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm border-black lg:flex"> </div>
        <div id="disasters_report" className="embebed border-black bg-black">
            <iframe
            title="disasters_report"
            width="100%"
            height="2100"
            src="https://app.hex.tech/2f4305db-d567-4b07-8c33-652d7eb206c5/app/3904fc21-3194-43bb-8d76-1315d394c0bd/latest?embedded=true"
            />
        </div>
    </main>
  );
}