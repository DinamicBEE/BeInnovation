"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { ServicesByCategory } from "@/Models/products.types";
import { getServicesByCategory } from "@/services/productServices";
import { BackgroundCardProps } from "../home/models/common.model";
import { useRouter } from "next/navigation";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import "./services.css"

export default function ServicesPage() {

  const [services, setServices] = useState<ServicesByCategory>({} as ServicesByCategory);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchServices = async () => {
          try {
              setLoading(true);
              const data = await getServicesByCategory();
              setServices(data);
          } catch (err) {
              console.error("Error loading services:", err);
          } finally {
              setLoading(false);
          }
      };

  fetchServices();
  }, []);



  if (loading) {
    return <ServicesPageSkeleton />;
  }

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <section className="relative mb-6 md:mb-10 lg:mb-14 w-full h-[55vh] md:h-[65vh] lg:h-[75vh]">

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background/Focused_steam_velocity.png"
            alt="BeInnovate"
            fill
            className="object-cover"
            priority={false}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-shadow-lg/30 tracking-tight">
              Nuestros productos
            </h1>
            
            <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Soluciones tecnológicas innovadoras que transforman negocios y potencian resultados.
            </p>
          </div>
        </div>

      </section>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          
          <div className="w-full lg:w-2/5 xl:w-1/3">

            <div className="relative aspect-video w-full h-full">
              <Image
                src="/services/dev_category.png"
                alt="BeInnovate"
                fill
                className="object-cover rounded-xl"
                priority={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-xl " />

              <div className="absolute top-0 left-0 right-0 p-6 lg:bottom-auto lg:top-0 bottom-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Desarrollo</h3>
                    <p className="text-white/80 text-sm mt-2">Soluciones a medida</p>
              </div>

            </div>

          </div>

          <div className="w-full lg:w-3/5 xl:w-2/3">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.dev && services.dev.length > 0 && services.dev.map(service => (
                  <BackgroundCard key={service.id} id={service.id} code={service.code} bgImage={service.coverImageUrl} />
                )
              )}
            </div>

          </div>

        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          
          <div className="w-full lg:w-3/5 xl:w-2/3">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {services.ai && services.ai.length > 0 && services.ai.map(service => (
                  <BackgroundCard key={service.id} id={service.id} code={service.code} bgImage={service.coverImageUrl} />
                )
              )}
            </div>
          
          </div>
          
          <div className="w-full lg:w-2/5 xl:w-1/3">

            <div className="relative aspect-video w-full h-full">
              <Image
                src="/services/ai_category.png"
                alt="BeInnovate"
                fill
                className="object-cover rounded-xl"
                priority={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-xl" />

              <div className="absolute top-0 left-0 right-0 p-6 lg:bottom-auto lg:top-0 bottom-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Inteligencia Artificial</h3>
                <p className="text-white/80 text-sm mt-2">Innovación y automatización</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          <div className="w-full lg:w-2/5 xl:w-1/3">

            <div className="relative aspect-video w-full h-full">
              <Image
                src="/services/netsuite_category.png"
                alt="BeInnovate"
                fill
                className="object-cover rounded-xl"
                priority={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-xl" />

              <div className="absolute top-0 left-0 right-0 p-6 lg:bottom-auto lg:top-0 bottom-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white">NetSuite</h3>
                <p className="text-white/80 text-sm mt-2">ERP en la nube</p>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-3/5 xl:w-2/3">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {services.netsuite && services.netsuite.length > 0 && services.netsuite.map(service => (
                  <BackgroundCard key={service.id} id={service.id} code={service.code} bgImage={service.coverImageUrl} />
                )
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

function ServicesPageSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center font-sans animate-pulse">

      <section className="relative mb-6 md:mb-10 lg:mb-14 w-full h-[55vh] md:h-[65vh] lg:h-[75vh] bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-48 sm:w-64 md:w-80 lg:w-96 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto" />
            <div className="w-16 sm:w-20 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full" />
            <div className="space-y-2">
              <div className="h-4 sm:h-5 md:h-6 w-full max-w-2xl mx-auto bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="h-4 sm:h-5 md:h-6 w-3/4 max-w-2xl mx-auto bg-gray-300 dark:bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="relative aspect-video w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-8 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="relative aspect-video w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-8 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <section className="w-full py-6 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-8xl mx-auto">
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="relative aspect-video w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-8 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                <div className="h-4 w-28 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

function BackgroundCard({ id, code, bgImage }: BackgroundCardProps) {
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();

  const { t: tProducts } = useTranslation(locale, 'products');
  const { t: tCommon } = useTranslation(locale, 'common');

  const handleCardClick = (serviceId: string) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <Card className="relative w-full h-80 card-green overflow-hidden pt-12 group transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt={tProducts(`${code}.title`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700"
          priority={false}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <CardHeader className="p-0 space-y-2">
          <CardTitle className="text-white text-xl font-bold drop-shadow-lg">
            {tProducts(`${code}.title`)}
          </CardTitle>
          <CardDescription className="text-white/90 text-sm leading-relaxed line-clamp-3 drop-shadow">
          <div className="flex flex-col gap-4">
            {tProducts(`${code}.cardSummary`)}

            <Button variant="outline" className="cursor-pointer" onClick={() => handleCardClick(id)}>
                <span className="text-sm font-medium">{tCommon('home.services_details')}</span>
                <Icon icon="mdi:arrow-right-thin" className="w-7 h-7 sm:w-8 sm:h-8" />
            </Button>
          </div>

          </CardDescription>
        </CardHeader>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7cb44c]/70 rounded-lg transition-all duration-300 pointer-events-none z-20" />
    </Card>
  );
}