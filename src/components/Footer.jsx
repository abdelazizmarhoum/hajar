import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.fleet'), href: '#fleet' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-dark text-slate-300 pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-3xl tracking-tight">
                <span className="text-accent">BM</span> <span className="text-primary">Transport</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 ps-2 border-l-4 border-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 ps-2 border-l-4 border-accent">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm">123 Avenue Mohammed VI,<br />Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">+212 6 45 60 40 </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">contact@bmtransport.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BM Transport. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;