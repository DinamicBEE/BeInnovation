"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Service } from "@/Models/products.types";
import { getAllServices } from "@/services/productServices";
import "./services.css"
import ServicesCards from "./ServicesCards";

export default function ServicesPage() {

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
      const fetchServices = async () => {
          try {
              //setLoading(true);
              const data = await getAllServices();
              setServices(data);
          } catch (err) {
              console.error("Error loading services:", err);
          } finally {
              //setLoading(false);
          }
      };

  fetchServices();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="relative mb-4 w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">

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


        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg tracking-tight">
              Nuestros productos
            </h1>
            
            <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, quia voluptatem? Rerum accusamus earum consequatur a at soluta omnis, porro numquam similique quo ullam quod quos odio sunt laboriosam repudiandae?
            </p>
          </div>
        </div>

      </div>

      {services.map((service) => (
        <ServicesCards key={service.id} service={service} />
      ))}

    </div>
  )
}