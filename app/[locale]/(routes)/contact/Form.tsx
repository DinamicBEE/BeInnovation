"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import { MdSend, MdCheckCircle } from 'react-icons/md';
import { Icon } from "@iconify/react";

export default function ContactForm() {

    const params = useParams();
    const locale = params.locale as string;
    const { t } = useTranslation(locale);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/mario.vasquez@beexponentialgroup.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            }
            
        } catch (error) {
            
        } finally {
            setIsSubmitting(false);
        }
        
    };

    return (
        <div  className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t('contact.form_title')}</h3>
                <p className=" text-sm">{t('contact.form_subtitle')}</p>
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5 flex-1 flex flex-col">
                <input type="hidden" name="_subject" value="Nuevo prospecto desde pagina" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="space-y-5 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="col-span-2 flex flex-row gap-4 items-center">
                            <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
                                <Icon icon="ic:baseline-account-circle" width="24" height="24" color="#2d4b8f"></Icon>
                            </div>
                            <span className="text-gray-400 font-bold text-xl">Datos de contacto</span>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700 font-medium">
                            {t("contact.name")} <span className="text-red-500">*</span>
                            </Label>
                            <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Juan Pérez"
                            required
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-gray-700 font-medium">
                            {t("contact.lastName")}
                            </Label>
                            <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Juan Pérez"
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                            {t("contact.email")} <span className="text-red-500">*</span>
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="juan@ejemplo.com"
                            required
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700 font-medium">
                            {t("contact.phone")}
                            </Label>
                            <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+52 55 1234 5678"
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all"
                            />
                        </div>
                        
                        {/* <div className="col-span-2 flex flex-row gap-4 items-center">
                            <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
                                <Icon icon="ic:baseline-ads-click" width="24" height="24" color="#2d4b8f"></Icon>
                            </div>
                            <span>Informacion adicional</span>
                        </div> */}

                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-gray-700 font-medium">
                            {t("contact.company")}
                            </Label>
                            <Input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Mi Empresa S.A."
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                            {t("contact.message")} <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="¿En qué podemos ayudarte?"
                            required
                            rows={5}
                            className="w-full border-gray-200 focus:border-[#2d4b8f] focus:ring-[#2d4b8f]/20 transition-all resize-none"
                        />
                    </div>
                </div>


                <div className="flex justify-end pt-4">
                    <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full px-8 py-6 bg-[#2d4b8f] hover:bg-[#1f3566] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                    >
                        {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            {t('contact.sending')}
                        </>
                        ) : isSuccess ? (
                        <>
                            <MdCheckCircle className="w-5 h-5" />
                            {t('contact.sent')}
                        </>
                        ) : (
                        <>
                            <MdSend className="w-5 h-5" />
                            {t("contact.send")}
                        </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}