"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { INDUSTRIES } from "./const/cards";
import { BackgroundCardProps, BackgroundIndustriesCardProps } from "./models/common.model";
import Image from "next/image";
import "./home.css";

export default function Industries() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 mx-auto py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
          dragFree: false,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {INDUSTRIES.map((item) => (
            <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <BackgroundCard
                title={item.title}
                description={item.description}
                bgImage={item.bgImage}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function BackgroundCard({ title, description, bgImage }: BackgroundIndustriesCardProps) {
  return (
    <Card className="relative w-full h-80 card-green overflow-hidden pt-12 group">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <CardHeader className="p-0 space-y-2">
          <CardTitle className="text-white text-xl font-bold drop-shadow-lg">
            {title}
          </CardTitle>
          <CardDescription className="text-white/90 text-sm leading-relaxed line-clamp-3 drop-shadow">
            {description}
          </CardDescription>
        </CardHeader>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7cb44c]/70 rounded-lg transition-all duration-300 pointer-events-none z-20" />
    </Card>
  );
}