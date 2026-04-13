import React, { useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTool, FiAward, FiMail, FiMapPin, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiRedhat, SiKubernetes, SiAnsible, SiLinux } from 'react-icons/si';
import { LanguageContext } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useContext(LanguageContext);

  const t = {
    de: {
      subtitle: "Senior Cloud Consultant @ Red Hat",
      title: <>Infrastrukturarchitektur & <br/><span className="text-red-500">Cloud-Native Engineering</span></>,
      desc: "Hallo, ich bin Suresh Vishnoi. Ich unterstütze Enterprise-Kunden dabei, stabile, skalierbare und moderne IT-Infrastrukturen aufzubauen – mit Fokus auf Kubernetes, OpenShift und Linux.",
      aboutBtn: "Mehr erfahren",
      expYears: "Zertifikate",
      projBtn: "Meine Stationen",
      basedIn: "Standort",
      avail: "Ansässig in Hamburg",
      core: "Technologien",
      servBtn: "Meine Projekte",
      certText: "Zertifiziert in Kubernetes Administration (CKA), Security (CKS) und als Red Hat Certified Architect.",
      verify: "Red Hat Verify ID:"
    },
    en: {
      subtitle: "Senior Cloud Consultant @ Red Hat",
      title: <>Infrastructure Architecture & <br/><span className="text-red-500">Cloud-Native Engineering</span></>,
      desc: "Hi, I'm Suresh Vishnoi. I help enterprise customers build stable, scalable, and modern IT infrastructures – focusing on Kubernetes, OpenShift, and Linux.",
      aboutBtn: "Read more",
      expYears: "Certifications",
      projBtn: "My background",
      basedIn: "Location",
      avail: "Based in Hamburg, Germany",
      core: "Technologies",
      servBtn: "My Projects",
      certText: "Certified Kubernetes Administrator (CKA), Security Specialist (CKS), and Red Hat Certified Architect.",
      verify: "Red Hat Verify ID:"
    }
  }[lang];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
      
      <Link href="/about" className="md:col-span-3 row-span-2 group focus:outline-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col group-hover:border-red-500/50 transition-all shadow-sm dark:shadow-none"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full transition-all group-hover:bg-red-600/20"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider text-sm flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                {t.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                {t.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">
                {t.desc}
              </p>
            </div>
            <div className="flex justify-between items-end mt-8">
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/vishnoisuresh/" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full border border-gray-200 dark:border-white/10 transition-colors text-gray-700 dark:text-white">
                  <FiLinkedin size={24} />
                </a>
                <a href="https://github.com" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full border border-gray-200 dark:border-white/10 transition-colors text-gray-700 dark:text-white">
                  <FiGithub size={24} />
                </a>
              </div>
              <div className="text-red-500 dark:text-red-400 text-sm font-bold flex items-center bg-red-50 dark:bg-red-500/10 px-4 py-2 rounded-full transform group-hover:translate-x-2 transition-all">
                {t.aboutBtn} <FiArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>



      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-sm dark:shadow-none"
      >
        <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 border border-gray-200 dark:border-white/10">
          <FiMapPin size={24} className="text-gray-600 dark:text-gray-300" />
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t.basedIn}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hamburg, DE</h3>
          <p className="text-gray-600 dark:text-gray-500 text-sm mt-2 leading-relaxed">{t.avail}</p>
        </div>
      </motion.div>

      <Link href="/services" className="md:col-span-2 group focus:outline-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 h-full group-hover:border-red-500/30 transition-all shadow-sm dark:shadow-none"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white">
              <FiTool className="mr-3 text-red-500 dark:text-red-500" /> {t.core}
            </h3>
            <div className="text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full transform group-hover:translate-x-2 transition-all">
              {t.servBtn} <FiArrowRight className="ml-2" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-none">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors">
              <SiRedhat size={32} className="text-red-500 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">OpenShift</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors">
              <SiKubernetes size={32} className="text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors">
              <SiAnsible size={32} className="text-black dark:text-white mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ansible</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors">
              <SiLinux size={32} className="text-gray-900 dark:text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Linux</span>
            </div>
          </div>
        </motion.div>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
        className="md:col-span-3 bg-red-600 border border-red-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-md"
      >
        <div className="absolute right-0 top-0 opacity-10 transform scale-150 translate-x-1/4 -translate-y-1/4 pointer-events-none">
          <SiRedhat size={300} />
        </div>
        <div className="mb-6 md:mb-0 relative z-10 flex items-center md:items-start flex-col">
          <div className="flex items-center mb-2">
            <FiAward size={28} className="text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Red Hat Certified Architect</h3>
          </div>
          <p className="text-red-100 mb-4 max-w-lg text-center md:text-left">
            {t.certText}
          </p>
          <a href="https://rhtapps.redhat.com/verify/?certId=130-120-694" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline text-sm opacity-90">
            {t.verify} 130-120-694
          </a>
        </div>
        <a href="https://www.linkedin.com/in/vishnoisuresh/" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-sm">
          <FiLinkedin size={20} />
          <span>Connect on LinkedIn</span>
        </a>
      </motion.div>

    </div>
  );
}