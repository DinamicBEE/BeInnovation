"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
//import Image from "next/image";
import "../home/home.css";

export default function ContactForm() {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Formulario enviado");
    };

    return (
        <div className="w-full px-4 sm:px-8 lg:px-32 mx-auto py-12">
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden card-navy">

                {/* <div className="absolute inset-0 w-full h-full">
                    <Image
                    src="/background/background_4.png"
                    alt="Fondo decorativo"
                    fill
                    className="object-cover opacity-20" // Opacidad baja para no interferir con la legibilidad
                    priority={false}
                    />
                </div> */}

                <div className="relative z-10 p-8 md:p-10">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">
                                    Nombre completo
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Juan Pérez"
                                    required
                                    className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">
                                Correo electrónico
                                </Label>
                                <Input
                                id="email"
                                type="email"
                                placeholder="juan@ejemplo.com"
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-200">
                                Teléfono móvil
                                </Label>
                                <Input
                                id="phone"
                                type="tel"
                                placeholder="+52 555 123 4567"
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-700 dark:text-gray-200">
                                Empresa
                                </Label>
                                <Input
                                id="company"
                                type="text"
                                placeholder="Mi Empresa S.A."
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">
                                Mensaje
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Escribe tu mensaje aquí..."
                                required
                                className="w-full min-h-30 bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                            />
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <Button 
                                type="submit" 
                                size="lg"
                                className="px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                Enviar mensaje
                            </Button>
                        </div>
                        
                    </form>
                
                </div>

            </div>
        </div>
    )
}