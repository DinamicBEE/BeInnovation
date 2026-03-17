"use client";

import LogoLoop from '@/components/react-bits/LogoLoop/LogoLoop';
import { LOGOS } from "../home/const/icons"


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact us</h1>
      <p className="text-lg text-gray-600">This is the contact page.</p>

      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={LOGOS}
          speed={25}
          direction="left"
          logoHeight={80}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />

      </div>

    </div>
  )
}