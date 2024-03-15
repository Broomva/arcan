import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Check the Arcan API at&nbsp;
          <Link href="https://api.arcanai.tech/">
            <code className="font-mono font-bold">api/check</code>
          </Link>
        </p>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="https://api.whatsapp.com/send/?phone=19853323941&text=Hi%20there!">
            Chat with the Arcan Agent on WhatsApp 💬
          </Link>
        </p>

        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By {" "}
            <p className="font-bold">
              <a
                href="https://broomva.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broomva
              </a>
            </p>
        </div>

        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-blue-700 before:blur-2xl before:opacity-10 before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#420aaa] after:blur-2xl after:opacity-40 after:content-[''] before:dark:bg-gradient-to-br before:dark:from-white before:dark:to-transparent before:dark:opacity-100 after:dark:from-sky-200 after:dark:via-blue-200 after:dark:opacity-100 before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/logo_dark.png"
              alt="arcan logo"
              width={200}
              height={120}
            />
      </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/Broomva/arcan"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Arcan features and API.
          </p>
        </a>

  
      </div>
    </main>
  );
}
