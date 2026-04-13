"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CLIENTS } from "./const/cards";
import "../home/home.css";

export default function Clients() {

  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="w-full px-32 mx-auto py-2">
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
        <CarouselContent className="-ml-4 items-center">
          {CLIENTS.map((client, index) => (
            <CarouselItem 
              key={index} 
              className="pl-4 basis-full sm:basis-1/4 md:basis-1/5"
            >
              <div className="flex justify-center items-center p-2">
                <Image
                  src={client.image}
                  alt={client.title}
                  width={150}
                  height={150}
                  className="
                    w-full 
                    h-full 
                    object-contain 
                    transition-all 
                    duration-500
                    group-hover:scale-100
                  "
                />
                {/* <CircularClientCard
                  title={client.title}
                  image={client.image}
                /> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}


function CircularClientCard({ title, image }: { title: string; image: string }) {
  return (
    <Card className="
      w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56
      card-green 
      rounded-full 
      overflow-hidden 
      relative 
      group
      flex 
      items-center 
      justify-center
      cursor-pointer
    ">
      <div className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center 
        p-8
        transition-all 
        duration-500 
        ease-in-out
        group-hover:scale-100
        group-hover:p-4
      ">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="
            w-full 
            h-full 
            object-contain 
            transition-all 
            duration-500
            group-hover:scale-100
          "
        />
      </div>

      <div className="
        absolute 
        inset-0 
        flex 
        items-end 
        justify-center 
        pb-4
        opacity-0 
        group-hover:opacity-100
        transition-opacity 
        duration-300
        bg-gradient-to-t 
        from-black/50 
        to-transparent
        rounded-full
      ">
        <span className="text-white text-sm font-semibold drop-shadow-lg">
          {title}
        </span>
      </div>
    </Card>
  );
}