'use client';

import { Icon } from "@iconify/react";
import { Button } from "./button";

export default function WhatsAppButton() {

    const handleClick = () => {
        const phoneNumber = "573043899883"
        const message = "Hola, quiero más información sobre sus servicios.";
        const formattedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${formattedMessage}&type=phone_number&app_absent=0`, '_blank');
    };

    return (
        <Button 
            onClick={handleClick}
            className="fixed z-10 bottom-4 right-4 rounded-full p-3 w-14 h-14 shadow-2xl drop-shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95" 
            aria-label="WhatsApp">
            <Icon icon="logos:whatsapp-icon" style={{ width: '60px', height: '60px' }} />
        </Button>
    );

}