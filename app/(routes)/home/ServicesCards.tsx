import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES_INFO } from "./const/cards";
import Image from "next/image";
import "./home.css";

export default function ServicesCards() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-stretch py-16 px-8 bg-bg-secondary dark:bg-bg-secondary">

            {SERVICES_INFO.map((service, index) => (
                
                <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left h-full group">
                
                    <Card  className="home-cards relative my-2 mx-auto w-full max-w-sm py-0 overflow-hidden rounded-lg h-full flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex flex-col sm:flex-row h-full">
                            <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto bg-gradient-to-br from-primary-dark/5 to-accent-teal/5 overflow-hidden">
                                <Image src={service.image} alt={service.alt} width={100} height={100} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"/>
                            </div>
                            <CardHeader className="w-full sm:w-2/3 py-4 bg-gradient-to-br from-white to-bg-tertiary/30">
                                <CardTitle className="text-text-primary">{service.title}</CardTitle>
                                <CardDescription className="text-text-secondary">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                        </div>
                    </Card>
            
                </div>
            
            ))}
        

    </main>
  )
}