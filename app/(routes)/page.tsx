"use client";

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
//import ClientOnlyFloatingLines  from "@/components/react-bits/FloatingLines/FloatingLinesClient";
import dynamic from 'next/dynamic';
const ClientOnlyFloatingLines = dynamic(
  () => import('@/components/react-bits/FloatingLines/FloatingLinesClient'),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-primary-bg" />
  }
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">

      <div style={{ width: '100%', height: '100vh', zIndex: 1 }}>

        <ClientOnlyFloatingLines 
          linesGradient={["#2d4b8f","#3a91dc","#289dbb","#7bb34a","#f9d035","#f8bc19"]}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
        <div className="flex flex-col items-center gap-8 absolute top-3/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          <h1 className="text-8xl font-bold text-primary-medium">
            Be Innovate
          </h1>
          <h2 className="text-4xl font-bold text-primary-medium">
            From idea to innovation
          </h2>
          <br />
          <h2 className="text-4xl font-bold text-primary-medium">
            We bring your vision to life with cutting-edge technology and creative solutions
          </h2>
        </div>


      </div>

      <main className="grid grid-cols-4 gap-4 w-full items-center justify-between py-16 px-8 bg-bg-secondary dark:bg-bg-secondary sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Card className="relative mx-auto w-full max-w-sm py-0 overflow-hidden rounded-lg">
            <div className="flex h-full min-h-40">
              <div className="w-1/3 aspect-video bg-black/35" />
              <CardHeader className="w-2/3 py-4">
                <CardTitle>Design systems meetup</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis consectetur feugiat. Maecenas sed sagittis erat. Aenean id ante ante.
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        
        </div>

      </main>

      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-primary dark:bg-bg-primary sm:items-start">

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

      </main>

      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-secondary dark:bg-bg-secondary sm:items-start">

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

      </main>

      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-primary dark:bg-bg-primary sm:items-start">

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

      </main>

      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-secondary dark:bg-bg-secondary sm:items-start">

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

      </main>

      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-bg-primary dark:bg-bg-primary sm:items-start">

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

      </main>

    </div>
  );
}
