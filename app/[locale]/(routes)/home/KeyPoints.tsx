"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { KEYPOINTS_DATA } from "./const/cards";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';

export function KeyPoints() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);

  return (
    <div className={cn("w-full h-full flex flex-col justify-center py-8")}>
      
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Nuestros números
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
          La confianza que respalda nuestro trabajo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center">
        {KEYPOINTS_DATA.map((point) => (
          <div
            key={point.id}
            className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg w-full"
          >

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#7cb44c]/10 flex items-center justify-center mb-3 sm:mb-4">
              <Icon
                icon={point.icon}
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#2d4b8f]"
              />
            </div>

            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {point.value}
            </div>

            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1">
              {t(point.label)}
            </div>
          </div>
        ))}
      </div>

      {/* Línea decorativa inferior (opcional) */}
      <div className="mt-8 lg:mt-12 flex justify-center">
        <div className="w-16 h-1 bg-[#7cb44c]/30 rounded-full" />
      </div>
    </div>
  );
}