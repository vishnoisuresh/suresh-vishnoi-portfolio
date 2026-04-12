import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiTool } from 'react-icons/fi';
import Head from 'next/head';
import { LanguageContext } from '../context/LanguageContext';

export default function Services() {
  const { lang } = useContext(LanguageContext);

  const t = {
    de: {
      title: "Dienstleistungen",
      focus: <>Mein Fokus liegt stets auf dem Thema <strong className="text-gray-900 dark:text-white">"Cloud Native Architecture"</strong> und vollumfänglicher <strong className="text-gray-900 dark:text-white">Infrastruktur Automatisierung</strong>.</>,
      services: [
        {
          title: "Kubernetes & OpenShift Platforming",
          icon: <FiServer size={32} className="text-blue-400" />,
          description: "Design, Aufbau und Betrieb von hochverfügbaren Container-Plattformen. Ich helfe Teams dabei, Microservices sicher und skalierbar bereitzustellen."
        },
        {
          title: "Infrastructure as Code & CI/CD",
          icon: <FiTool size={32} className="text-gray-500" />,
          description: "Aufbau automatisierter Pipelines mit Tools wie Git, Jenkins und ArgoCD. Infrastructure as Code (IaC) Implementierungen mit Terraform und Ansible."
        },
        {
          title: "Linux Systems Engineering",
          icon: <FiCloud size={32} className="text-purple-400" />,
          description: "Tiefgreifende Optimierung und Verwaltung von Red Hat Enterprise Linux (RHEL) Umgebungen. Umsetzung von Best-Practices in puncto Security (CKS)."
        }
      ]
    },
    en: {
      title: "Services",
      focus: <>My focus is always on <strong className="text-gray-900 dark:text-white">"Cloud Native Architectures"</strong> and comprehensive <strong className="text-gray-900 dark:text-white">Infrastructure Automation</strong>.</>,
      services: [
        {
          title: "Kubernetes & OpenShift Platforming",
          icon: <FiServer size={32} className="text-blue-400" />,
          description: "Design, build, and operation of high-availability container platforms. I help teams deploy microservices securely and scalably."
        },
        {
          title: "Infrastructure as Code & CI/CD",
          icon: <FiTool size={32} className="text-gray-500" />,
          description: "Building automated pipelines with tools like Git, Jenkins, and ArgoCD. Implementing Infrastructure as Code (IaC) using Terraform and Ansible."
        },
        {
          title: "Linux Systems Engineering",
          icon: <FiCloud size={32} className="text-purple-400" />,
          description: "Deep optimization and administration of Red Hat Enterprise Linux (RHEL) environments. Implementing security best practices (CKS certified)."
        }
      ]
    }
  }[lang];

  return (
    <>
      <Head>
        <title>{t.title} | Suresh Vishnoi IT Consulting</title>
      </Head>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
            <FiServer size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        </div>

        <div className="mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.focus}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:border-gray-300 dark:hover:border-white/30 transition-all shadow-sm dark:shadow-none ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="bg-gray-50 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}