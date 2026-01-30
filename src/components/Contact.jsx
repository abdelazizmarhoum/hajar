import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  // Get subjects array safely
  const subjects = t('contact.form.subjects', { returnObjects: true });
  const displaySubjects = Array.isArray(subjects) ? subjects : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_8qeoedp',   // Service ID
        'template_hun6o17',  // Template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject || displaySubjects[0],
          message: formData.message
        },
        'eMFilhUegw3HlYWg7' // Public Key
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">{t('contact.subtitle')}</h4>
            <h2 className="text-4xl font-bold text-dark mb-6">{t('contact.heading')}</h2>
            <p className="text-neutral mb-8 text-lg">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark mb-1">{t('contact.info.phone')}</h5>
                  <p className="text-neutral">+212 6 02 45 60 40</p>
                  <p className="text-sm text-slate-400 mt-1">{t('contact.info.hours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-red-100 p-3 rounded-full text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark mb-1">{t('contact.info.email')}</h5>
                  <p className="text-neutral">contact@bmtransport.ma</p>
                  <p className="text-sm text-slate-400 mt-1">{t('contact.info.response')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark mb-1">{t('contact.info.address')}</h5>
                  <p className="text-neutral">123 Avenue Mohammed VI, Casablanca</p>
                  <p className="text-sm text-slate-400 mt-1">Maroc</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">{t('contact.form.title')}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder={t('contact.form.namePH')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder={t('contact.form.emailPH')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-dark">{t('contact.form.subject')}</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all text-neutral"
                >
                  <option value="" disabled>{t('contact.form.subject')}</option>
                  {displaySubjects.map((subject, idx) => (
                    <option key={idx} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-dark">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder={t('contact.form.messagePH')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95 ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-red-700 text-white shadow-red-500/30'
                  }`}
              >
                {status.loading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                {status.loading ? 'Envoi...' : t('contact.form.send')}
              </button>

              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle size={20} />
                    <span>Message envoyé avec succès !</span>
                  </motion.div>
                )}
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2"
                  >
                    <AlertCircle size={20} />
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-center text-xs text-slate-400">
                {t('contact.form.privacy')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
