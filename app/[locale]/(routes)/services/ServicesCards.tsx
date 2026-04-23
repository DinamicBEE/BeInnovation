"use client";

import { useRouter } from "next/navigation";
import { ServiceCardProps } from "@/Models/products.types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import "./services.css";
import { Button } from "@/components/ui/button";

export default function ServicesCards({ service }: ServiceCardProps) {
    const router = useRouter();

    const handleCardClick = (serviceId: string) => {
        router.push(`/services/${serviceId}`);
    };


    return (
        <div>

            <div className="w-full mb-4 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">

                <div className="relative w-full md:w-2/5 lg:w-2/5 shrink-0" >
                    {service.coverImageUrl && (
                    <div className="relative aspect-video md:h-full w-full overflow-hidden image-fade-overlay">
                        <Image src={service.coverImageUrl} alt={service.name}  width={100} height={100} unoptimized className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" priority />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                        {service.addons && service.addons.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                            {service.addons.map((addon, idx) => (
                                <Badge key={idx} className="card-navy bg-[#2d4b8f] hover:bg-[#2d4b8f]/90 text-white border-none z-10">
                                {addon.name}
                                </Badge>
                            ))}
                            </div>
                        )}

                        {service.targetIndustries && service.targetIndustries.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                            {service.targetIndustries.map((industry, idx) => (
                                <Badge key={idx} className="card-green bg-[#7cb44c] hover:bg-[#7cb44c]/90 text-white border-none z-10">
                                {industry}
                                </Badge>
                            ))}
                            </div>
                        )}  

                        </div>
                    </div>
                    )}
                </div>

                <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left mb-4">
                        {service.name}
                    </h2> 

                    <div className="flex-1 mb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.valueProposition}
                    </p>
                    </div>

                    <Button variant="outline" onClick={() => handleCardClick(service.id)}>
                    
                        <span className="text-sm font-medium">Conoce más</span>
                        <Icon icon="mdi:arrow-right-thin" className="w-7 h-7 sm:w-8 sm:h-8 text-[#2d4b8f]" />
                   
                    </Button>
                    
                </div>

                </div>
            </div>

        </div>
    );

}