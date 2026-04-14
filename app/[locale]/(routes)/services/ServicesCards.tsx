"use client";

import { useState } from "react";
import { ServiceCardProps } from "@/Models/products.types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MdExpandMore, MdCheckCircleOutline, MdOutlineStar, MdLightbulb } from "react-icons/md";
import clsx from "clsx";
import "./services.css";

export default function ServicesCards({ service }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

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

                {/* <div className="hidden md:block w-2 h-full shrink-0" style={{background: "linear-gradient(115deg, #2d4b8f, #2d4b8f00)",}}/>
                <div className="block md:hidden h-2 w-full" style={{background: "linear-gradient(115deg, #2d4b8f, #2d4b8f00)",}} /> */}

                <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left mb-4">
                    {service.name}
                    </h2> 

                    <div className="flex-1 mb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.valueProposition}
                    </p>
                    </div>

                    <div className="flex justify-end mt-auto" onClick={() => setIsOpen(!isOpen)}>
                    
                    <span className="text-sm font-medium">Ver detalles</span>
                    <MdExpandMore className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                    
                </div>

                </div>
            </div>

            {isOpen && (
                <div className="w-full max-w-7xl p-8 mx-auto mb-2 rounded-xl shadow-xl space-y-4 text-gray-600 dark:text-gray-300">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="cardService-teal">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Problema que resuelve</h4>
                            <p className="text-xs md:text-sm">{service.problemSolved}</p>
                        </div>
                        
                        {service.useCases && service.useCases.length > 0 && (
                        <div className="cardService-teal">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Casos de uso</h4>
                            <ul className="list-disc list-inside text-xs md:text-sm space-y-1">
                                {service.useCases.slice(0, 2).map((useCase, idx) => (
                                    <li key={idx} className="line-clamp-2"><MdLightbulb color="#f9b619"/>{useCase}</li>
                                ))}
                            </ul>
                        </div>
                        )}

                        <div className="cardService-green">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Características incluidas</h4>
                            <ul className="list-disc list-inside text-xs md:text-sm space-y-1">
                                {service.featuresIncluded?.slice(0, 4).map((feature, idx) => (
                                    <li key={idx} className="line-clamp-2"><MdCheckCircleOutline color="green" />{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="cardService-green">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Beneficios clave</h4>
                            <ul className="list-disc list-inside text-xs md:text-sm space-y-1">
                                {service.measurableBenefits?.slice(0, 3).map((benefit, idx) => (
                                    <li key={idx}><MdOutlineStar color="#f9b619"/>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    { service.implementationFees && (
                        <div className="cardService-navy ">
                            <div className="flex flex-col md:flex-row px-8 py-2 gap-2 justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{service.implementationFees[0].name}</h4>
                                    <p className="text-xs md:text-sm">{service.implementationFees[0].description}</p>
                                </div>

                                <div className="flex flex-col gap-1 items-center md:items-start md:flex-row cardService-green">
                                    <h3 className="font-extrabold text-cyan-900 dark:text-white text-2xl">{service.implementationFees[0].currency}</h3>
                                    <div className="flex flex-col items-end">
                                        <h3 className="font-bold text-cyan-900 dark:text-white text-2xl">${service.implementationFees[0].amount.toFixed(2)}</h3>
                                        <h3 className="font-bold text-gray-500 dark:text-white text-md">{service.implementationFees[0].billingType}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[80%] m-2 h-1 bg-[#7cb44c] mx-auto rounded-full" />

                            <div className="flex flex-col justify-evenly mx-auto py-2 md:flex-row w-[80%]">
                                <div className="flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Tipo de precio</h4>
                                    <p className="text-xs md:text-sm">{service.implementationFees[0].pricingModel}</p>
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Requerimiento</h4>
                                    <p className={clsx("text-xs md:text-sm", {
                                        'text-red-800': service.implementationFees[0].isRequired,
                                        'text-green-600': !service.implementationFees[0].isRequired,
                                    })}>
                                        {service.implementationFees[0].isRequired ? 'Obligatorio' : 'Opcional'}
                                    </p>
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Duración estimada</h4>
                                    <p className="text-xs md:text-sm">{service.implementationFees[0].estimatedTimeline}</p>
                                </div>

                            </div>
                        </div>
                    )}
                    
                
                </div>
            )}

        </div>
    );

}