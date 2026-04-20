"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Service } from "@/Models/products.types";
import { getServiceById } from "@/services/productServices";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServiceDetailPage() {
    const params = useParams();
    const serviceId = params.id as string;

    const [service, setService] = useState<Service>({} as Service);
    
    useEffect(() => {
        const fetchServices = async () => {
            if (!serviceId) return;
            try {
                //setLoading(true);
                const data = await getServiceById(serviceId);
                setService(data);
            } catch (err) {
                console.error("Error loading services:", err);
            } finally {
                //setLoading(false);
            }
        };

    fetchServices();
    }, []);

    const sections = [
        {
        title: "Problema que resuelve",
        content: service.problemSolved,
        type: "text",
        },
        {
        title: "Propuesta de valor",
        content: service.valueProposition,
        type: "text",
        },
        {
        title: "Características incluidas",
        content: service.featuresIncluded,
        type: "list",
        },
        {
        title: "Beneficios medibles",
        content: service.measurableBenefits,
        type: "list",
        },
        {
        title: "Casos de uso",
        content: service.useCases,
        type: "list",
        },
        {
        title: "Requisitos previos",
        content: service.prerequisites,
        type: "list",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="relative mb-4 w-full h-[55vh] md:h-[65vh] lg:h-[75vh]">
            
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={service.coverImageUrl || "/background/background_3.png"}
                        alt={service.name}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
            
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                </div>
        
        
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg text-shadow-lg/30 tracking-tight">
                        {service.shortName}
                    </h1>
                    
                    <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
                        {service.valueProposition}
                    </p>
                    </div>
                </div>
        
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <Badge className="bg-[#2d4b8f] text-white">
                        {service.category}
                        </Badge>
                        <Badge className="bg-[#7cb44c] text-white">
                        {service.subcategory}
                        </Badge>
                        <Badge className="bg-[#289dbb] text-white">
                        {service.status}
                        </Badge>
                    </div>

                    {service.applicableSectors && service.applicableSectors.length > 0 && (
                        <div className="mb-8 text-center">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                            Sectores aplicables
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {service.applicableSectors.map((sector, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-300"
                            >
                                {sector}
                            </span>
                            ))}
                        </div>
                        </div>
                    )}


                    {/* <Accordion className="space-y-4">
                        { sections && sections.map((section, idx) => (
                        <AccordionItem
                            key={idx}
                            value={`item-${idx}`}
                            className="border rounded-lg px-4 shadow-sm bg-white dark:bg-gray-900"
                        >
                            <AccordionTrigger className="text-[#2d4b8f] hover:text-[#2d4b8f]/80 font-medium">
                            {section.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-300">
                            {section.type === "text" ? (
                                <p className="text-sm md:text-base leading-relaxed">
                                {section.content as string}
                                </p>
                            ) : (
                                <ul className="list-disc list-inside space-y-2">
                                {(section.content as string[]).map((item, itemIdx) => (
                                    <li key={itemIdx} className="text-sm md:text-base">
                                    {item}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion> */}

                    {service.implementationFees && service.implementationFees.length > 0 && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-[#2d4b8f]/10 to-[#7cb44c]/10 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Inversión
                        </h3>
                        <div className="space-y-4">
                            {service.implementationFees.map((fee, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg"
                            >
                                <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {fee.name}
                                </h4>
                                <p className="text-sm text-gray-500">{fee.description}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {fee.estimatedTimeline}
                                </p>
                                </div>
                                <div className="text-right">
                                <p className="text-2xl font-bold text-[#2d4b8f]">
                                    ${fee.amount.toLocaleString()}
                                </p>
                                <p className="text-xs text-gray-500">{fee.currency}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    )}

                    {service.addons && service.addons.length > 0 && (
                        <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Servicios adicionales
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.addons.map((addon, idx) => (
                            <div
                                key={idx}
                                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                {addon.name}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">{addon.description}</p>
                                <p className="text-sm font-medium text-[#7cb44c] mt-2">
                                ${addon.amount} {addon.currency}
                                </p>
                            </div>
                            ))}
                        </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );

}