"use client";

import { useState, useEffect } from "react";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from "next/navigation";
import Image from "next/image";
import { Addon, ImplementationFee, Plans, Service } from "@/Models/products.types";
import { getServiceById } from "@/services/productServices";
import { CheckCircle, Calendar, DollarSign, TrendingUp, Target, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailPage() {
    const params = useParams();
    const serviceId = params.id as string;
    const locale = params.locale as string;
    
    const { t } = useTranslation(locale, 'products');

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
    }, [serviceId]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="relative mb-4 w-full h-[55vh] md:h-[65vh] lg:h-[75vh]">
            
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={service.coverImageUrl || "/background/Focused_steam_velocity.png"}//"/background/Focused_steam_velocity.png"//
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
                        {t(`products.${service.code}.title`)}
                    </h1>
                    
                    <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
                        {t(`products.${service.code}.valueProposition`)}
                    </p>
                    </div>
                </div>
        
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <span className="bg-[#2d4b8f] text-white px-4 py-2 rounded-full text-sm">
                        {t(`products.${service.code}.category`)}
                        </span>
                        <span className="bg-[#7cb44c] text-white px-4 py-2 rounded-full text-sm">
                        {t(`products.${service.code}.subcategory`)}
                        </span>
                    </div>

                    {service.applicableSectors && service.applicableSectors.length > 0 && (

                        <div className="mb-8 flex flex-wrap gap-2 justify-center">
                            {(t(`products.${service.code}.applicableSectors`, { returnObjects: true }) as string[]).map((sector, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>
                    )}

                    {service.featuresIncluded && service.featuresIncluded.length > 0 && (
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {t(`detail.features_included`)}
                                </h2>
                                <div className="w-12 h-0.5 bg-[#7cb44c] mx-auto" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {(t(`products.${service.code}.featuresIncluded`, { returnObjects: true }) as string[]).map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#7cb44c] mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.plans && service.plans.length > 0 && (
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {t(`detail.plan_price`)}
                                </h2>
                                <div className="w-12 h-0.5 bg-[#7cb44c] mx-auto" />
                                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                                    {t(`detail.plan_label`)}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(t(`products.${service.code}.plans`, { returnObjects: true }) as Plans[]).map((plan, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-[#7cb44c]/30"
                                    >
                                        {/* Badge destacado para plan principal */}
                                        {plan.name === "GROWTH" && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <span className="bg-[#7cb44c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                    Más popular
                                                </span>
                                            </div>
                                        )}
                                        
                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {plan.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="text-center mb-6">
                                            <div className="flex items-baseline justify-center gap-1">
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                    ${plan.basePrice.toLocaleString()}
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    / {plan.pricePeriod === "MONTHLY" ? "mes" : "año"}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                {plan.includedUsage.toLocaleString()} {plan.usageUnit} {t(`detail.included`)}
                                            </p>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-2 text-sm">
                                                <DollarSign className="w-4 h-4 text-[#7cb44c]" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    Setup: {plan.setupFee === 0 ? t('detail.setup_free') : `$${plan.setupFee}`}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="w-4 h-4 text-[#7cb44c]" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {plan.minCommitMonths === 0 ? t('detail.no_commitment') : `${plan.minCommitMonths} ${t('detail.months_minimum')}`}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <TrendingUp className="w-4 h-4 text-[#7cb44c]" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {t('detail.renewal')}: {plan.renewalPolicy === "AUTOMATIC" ? t('detail.renewal_automatic') : t('detail.renewal_manual')}
                                                </span>
                                            </div>
                                        </div>

                                        <button className="w-full py-2 px-4 bg-transparent border-2 border-[#7cb44c] text-[#7cb44c] rounded-lg font-semibold hover:bg-[#7cb44c] hover:text-white transition-all duration-300">
                                            {t(`detail.select_plan`)}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.measurableBenefits && service.measurableBenefits.length > 0 && (
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {t('detail.measurable_benefits')}
                                </h2>
                                <div className="w-12 h-0.5 bg-[#7cb44c] mx-auto" />
                                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                                    {t('detail.results_you_will_get')}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(t(`products.${service.code}.measurableBenefits`, { returnObjects: true }) as string[]).map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="group p-4 bg-linear-to-r from-[#2d4b8f]/5 to-[#7cb44c]/5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <Target className="w-5 h-5 text-[#7cb44c] mt-0.5 shrink-0" />
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                {benefit}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.implementationFees && service.implementationFees.length > 0 && (
                        <div className="mt-8 p-6 bg-linear-to-r from-[#2d4b8f]/10 to-[#7cb44c]/10 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t('detail.investment')}
                        </h3>
                        <div className="space-y-4">
                            {(t(`products.${service.code}.implementationFees`, { returnObjects: true }) as ImplementationFee[]).map((fee, idx) => (
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
                            {t('detail.additional_services')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(t(`products.${service.code}.addons`, { returnObjects: true }) as Addon[]).map((addon, idx) => (
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
            <div className="w-full bg-linear-to-r from-[#2d4b8f]/10 to-[#7cb44c]/10 py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    {/* Icono decorativo */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-6">
                        <Phone className="w-8 h-8 text-[#2d4b8f]" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('detail.ready_to_transform')}
                    </h2>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('detail.more_info')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2d4b8f] text-white rounded-lg font-semibold hover:bg-[#2d4b8f]/90 transition-all duration-300 group"
                        >
                            <Mail className="w-5 h-5" />
                            {t('detail.contact_specialist')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="tel:+573043899883"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-[#2d4b8f] text-[#2d4b8f] rounded-lg font-semibold hover:bg-[#2d4b8f] hover:text-white transition-all duration-300"
                        >
                            <Phone className="w-5 h-5" />
                            {t('detail.call_now')}
                        </a>
                    </div>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
                        {t('detail.response_time')}
                    </p>
                </div>
            </div>
        </div>
    );

}