import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '+212602456040';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba56] transition-colors duration-300 flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
            <span className="absolute right-full mr-3 bg-white text-dark px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
                Contactez-nous
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
