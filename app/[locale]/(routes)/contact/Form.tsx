"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import "../home/home.css";

export default function ContactForm() {

    const params = useParams();
    const locale = params.locale as string;
    const { t } = useTranslation(locale);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Formulario enviado");
    };

    return (
        <section className="w-full px-4 sm:px-8 lg:px-32 mx-auto py-12">
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden card-navy">

                <div className="relative z-10 p-8 md:p-10">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">
                                    {t("contact.name")}
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder={t("contact.name")}
                                    required
                                    className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">
                                {t("contact.email")}
                                </Label>
                                <Input
                                id="email"
                                type="email"
                                placeholder={t("contact.email")}
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-200">
                                {t("contact.phone")}
                                </Label>
                                <Input
                                id="phone"
                                type="tel"
                                placeholder={t("contact.phone")}
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-700 dark:text-gray-200">
                                {t("contact.company")}
                                </Label>
                                <Input
                                id="company"
                                type="text"
                                placeholder={t("contact.company")}
                                required
                                className="w-full bg-white/90 dark:bg-gray-800/90 border-gray-300 dark:border-gray-600"
                                />
                            </div>

                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">
                               {t("contact.message")}
                            </Label>
                            <Textarea
                                id="message"
                                placeholder={t("contact.message")}
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
                                {t("contact.send")}
                            </Button>
                        </div>
                        
                    </form>
                
                </div>

            </div>
        </section>
    )
}