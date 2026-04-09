"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Service } from "@/Models/products.types";
import { getAllServices } from "@/services/productServices";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import "./home.css";

export default function Services() {
    const router = useRouter();
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const data = await getAllServices();
                setServices(data.slice(0, 5));
            } catch (err) {
                console.error("Error loading services:", err);
            } finally {
                setLoading(false);
            }
        };

    fetchServices();
    }, []);

    const handleViewAllClick = () => {
        router.push('/services');
    };

    if (loading) {
        return <ServicesSkeleton />;
    }

    if (services.length === 0) {
        return (
        <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-gray-500">No hay servicios disponibles en este momento.</p>
        </div>
        );
    }

    return (
        <section className="relative grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-stretch py-16 px-8 bg-bg-secondary dark:bg-bg-secondary">
                    {/* <div className="absolute inset-0 z-0 w-full h-full">
                      <Image
                        src="/background/Invert_flow_concept.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div> */}

                {services.map((service, index) => (
                    
                    <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left h-full group" onClick={() => handleViewAllClick()}>
                    
                        <Card  className="home-cards card-navy relative my-2 mx-auto w-full max-w-sm py-0 overflow-hidden rounded-lg h-full flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                            <div className="flex flex-col h-full">
                                {service.coverImageUrl && (
                                    <div className="w-full aspect-video sm:aspect-auto bg-linear-to-br from-primary-dark/5 to-accent-teal/5 overflow-hidden shrink-0">
                                        <Image src={service.coverImageUrl } alt={service.shortName} width={100} height={100} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"/>
                                        <div className="absolute top-3 left-3">
                                            <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                                {service.category}
                                            </Badge>
                                        </div>
                                    </div>
                                )}
                                <CardHeader className="w-full py-4 bg-linear-to-t from-white to-bg-tertiary/30 flex-1">
                                    <CardTitle className="text-text-primary">{service.name}</CardTitle>
                                    <CardDescription className="text-text-secondary">
                                        {service.summary}
                                    </CardDescription>
                                </CardHeader>
                            </div>
                        </Card>
                
                    </div>
                
                ))}

                <div className="flex flex-col items-center text-center sm:items-start sm:text-left h-full group cursor-pointer" onClick={handleViewAllClick} >
                    <Card className="home-cards relative my-2 mx-auto w-full max-w-sm py-0 overflow-hidden rounded-lg h-full flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-900 border-2 border-dashed border-[#7cb44c]/30">
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center flex-1">
                            <div className="w-12 h-12 rounded-full bg-[#7cb44c]/20 flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-[#7cb44c]">+</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                ¿Buscas más opciones?
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Explora nuestro catálogo completo de servicios
                            </p>
                        </div>
                    </Card>
                </div>
            

        </section>
    )
}

function ServicesSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-10 sm:mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-5 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-6 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}