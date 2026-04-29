'use client';

import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
import Link from 'next/link';
import { Icon } from '@iconify/react'

export default function ContactInfo() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);

  const contactInfo = {
    phone: '+52 55 1234 5678',
    email: 'info@beinnovate.com',
    address: 'Av. Reforma 123, CDMX, México',
    schedule: 'Lun - Vie: 9:00 - 18:00',
  };

  const socialLinks = [
    { icon: "logos:facebook", href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: "logos:linkedin-icon", href: 'https://www.linkedin.com/company/dinamic-software/posts/?feedView=all', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  ];

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden`}>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{t('contact.info_title')}</h3>
        <p className="text-sm">{t('contact.info_subtitle')}</p>
      </div>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </div>

      <div className="p-6 space-y-5">
        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
            <MdPhone className="w-5 h-5 text-[#2d4b8f]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.phone_label')}</h4>
            <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-[#2d4b8f] transition-colors text-sm">
              {contactInfo.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
            <MdEmail className="w-5 h-5 text-[#2d4b8f]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.email_label')}</h4>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-[#2d4b8f] transition-colors text-sm break-all">
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
            <MdLocationOn className="w-5 h-5 text-[#2d4b8f]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.address_label')}</h4>
            <p className="text-gray-600 text-sm">{contactInfo.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-[#2d4b8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2d4b8f]/20 transition-colors">
            <MdAccessTime className="w-5 h-5 text-[#2d4b8f]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.schedule_label')}</h4>
            <p className="text-gray-600 text-sm">{contactInfo.schedule}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-3">{t('contact.follow_us')}</h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-md`}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-40 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#2d4b8f]/5 to-[#3a91dc]/5">
          <p className="text-gray-500 text-sm text-center px-4">
            📍 {contactInfo.address}
          </p>
        </div>
      </div>
    </div>
  );
}