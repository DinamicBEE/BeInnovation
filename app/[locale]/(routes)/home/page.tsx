"use client";

import Services from './Services';
import Clients from './Clients';
import Industries from './Industries';
import Image from "next/image";
import { STEPS_DATA } from './const/cards';
import { ContactSteps } from './ContactSteps';
import { KeyPoints } from './KeyPoints';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-sans">

      <section style={{ width: '100%', height: '100vh', zIndex: 1 }}>

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background/background_3.png"
            alt="BeInnovate"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-shadow-lg/30 tracking-tight">
              Be Innovate
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 drop-shadow-md text-shadow-lg/20">
              From idea to innovation
            </h2>
            
            <div className="w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
              We bring your vision to life with cutting-edge technology and creative solutions
            </p>
            
          </div>
        </div>

      </section>

      <Services />

      {/* <section className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-primary dark:bg-bg-primary sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

      </section> */}

      <section className="flex w-full min-h-screen flex-col lg:flex-row items-stretch py-4 px-4 sm:px-8 lg:px-16 bg-bg-secondary dark:bg-bg-secondary">
        
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <KeyPoints />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <ContactSteps steps={STEPS_DATA} />
        </div>

      </section>

      <Industries />

      <Clients />

    </main>
  );
}
