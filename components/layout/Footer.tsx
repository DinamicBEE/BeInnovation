"use client";

import { MX, US, CO } from "country-flag-icons/react/3x2";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import "./layout.css";

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="hidden md:block font-bold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://www.linkedin.com/company/beexponential/posts/?feedView=all" target="_blank"><CiLinkedin size={24} /> <span className="hidden md:block"> Be Exponential</span> </a></li>
              <li><a href="https://www.linkedin.com/company/dinamic-software/posts/?feedView=all" target="_blank"><CiLinkedin size={24} /> <span className="hidden md:block"> Be Innovate </span> </a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Image className="hidden sm:block" src="/BeInnovation_4.png" alt="Be Innovate" width={250} height={90} />

            <Image className="block sm:hidden" src="/BeInnovation_3.png" alt="Be Innovate" width={40} height={34} priority />

            <div className="flex flex-col items-center mt-2">
                <h1 className="text-center text-xs text-gray-600">© 2026 {t("footer.company")}. {t("footer.copyright")}</h1>
                <div className="flex flex-col md:flex-row items-center text-center">
                    <a href="/privacy" className="text-xs text-gray-600 hover:text-gray-900">{t("footer.privacy")}</a> 
                    <div className="hidden md:block"> | </div> 
                    <a href="/terms" className="text-xs text-gray-600 hover:text-gray-900">{t("footer.terms")}</a>
                </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="hidden md:block font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><US title="United States" className="w-6" /> <span className="hidden md:block"> Email: info@empresa.com</span></li>
              <li><MX title="México" className="w-6" /> <span className="hidden md:block"> Email: info@empresa.com</span></li>
              <li><CO title="Colombia" className="w-6" /> <span className="hidden md:block"> Email: info@empresa.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
