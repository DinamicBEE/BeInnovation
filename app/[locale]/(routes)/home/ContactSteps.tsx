"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import "./home.css";

export type Step = {
  id: number;
  title: string;
  description: string;
};

interface ProcessStepperRightProps {
  steps: Step[];
  className?: string;
}

export function ContactSteps({ steps, className }: ProcessStepperRightProps) {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);

  return (
    <div className={cn("w-full max-w-3xl mx-auto py-6 px-6", className)}>
      <div className="space-y-12">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <div key={step.id} className="relative flex gap-6">

              <div className="flex flex-col items-center">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-600 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400">
                  {step.id}
                </div>

                {!isLast && (
                  <div className="mt-2 h-16 w-px bg-gray-200 dark:bg-gray-700" />
                )}
              </div>

              <div className="flex-1 pb-6 p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg w-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            </div>
          );
        })}

        {/* <div className="flex justify-end mt-8">
          <div className="w-full sm:w-80 md:w-96 card-green rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t("home.contact_tittle")}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t("home.contact_subtitle")}
              </p>

              <Link href="/contact">
                <button className="w-full bg-[#7cb44c] hover:bg-[#6aa03c] text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                  {t("home.contact_button")}
                </button>
              </Link>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}