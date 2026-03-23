"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CLIENTS } from "./const/cards";
import "./home.css";

export default function AutoCarousel() {

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="w-full px-32 mx-auto py-2 bg-bg-secondary dark:bg-bg-secondary">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
          dragFree: false,
        }}
        plugins={[plugin.current]}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-4">
          {CLIENTS.map((client, index) => (
            <CarouselItem key={index} className="p-2 pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
             
              <Card className="h-full card-teal relative pt-12">
                <div className="flex flex-col h-full">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-3 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden z-20">
                        <Image src={client.image} alt={client.title} width={100} height={100} className="w-4/5 h-4/5 object-contain"/>
                    </div>

                    <div className="flex flex-col justify-end h-full pt-20 pb-6 px-4 relative z-10">
                      <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"></div>

                      <CardHeader className="w-full p-0 space-y-3">
                        <CardTitle className="text-text-primary text-center text-xl font-bold">
                          {client.title}
                        </CardTitle>
                        <CardDescription className="text-text-secondary text-center text-sm leading-relaxed">
                          {client.description}
                        </CardDescription>
                      </CardHeader>
                    </div>

                </div>
              </Card>
            
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}