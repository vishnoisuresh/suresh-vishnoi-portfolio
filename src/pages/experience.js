import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import Head from 'next/head';
import { LanguageContext } from '../context/LanguageContext';

export default function Experience() {
  const { lang } = useContext(LanguageContext);

  const t = {
    de: {
      title: "Bisherige Tätigkeiten",
      roles: [
        {
          role: "Senior Cloud Consultant",
          company: "Red Hat",
          description: "Beratung von Kunden bei der Implementierung von RHEL, Ansible und der GitOpsifizierung von OpenShift. Expertise in RHACM, RHACS, Quay, ODF, OpenShift AI und OCP-V."
        },
        {
          role: "Cloud Consultant",
          company: "Red Hat",
          description: "Unterstützung von Enterprise-Kunden beim Aufbau moderner, skalierbarer Cloud-nativer IT-Infrastrukturen basierend auf Red Hat Technologien."
        },
        {
          role: "Senior Kubernetes Engineer",
          company: "Eurofins",
          description: "Verwaltung, Optimierung und Skalierung von Kubernetes-Umgebungen zur Unterstützung von unternehmenskritischen Anwendungen."
        },
        {
          role: "System Engineer DevOps",
          company: "Kuehne + Nagel",
          description: "Aufbau und Wartung von DevOps-Pipelines und Infrastruktur-Automatisierung für globale IT-Projekte."
        },
        {
          role: "Assistant IT Operations",
          company: "Mondia Media MENA",
          description: "IT-Betriebsspezialist mit Fokus auf Docker, DevOps, Linux und Systemverwaltung im Unterhaltungssektor."
        }
      ]
    },
    en: {
      title: "Experience",
      roles: [
        {
          role: "Senior Cloud Consultant",
          company: "Red Hat",
          description: "Consulting customers on RHEL, Ansible, and GitOpsifying OpenShift. Expertise in RHACM, RHACS, Quay, ODF, OpenShift AI, and OCP-V."
        },
        {
          role: "Cloud Consultant",
          company: "Red Hat",
          description: "Assisting enterprise customers in building modern, scalable cloud-native IT infrastructures based on Red Hat technologies."
        },
        {
          role: "Senior Kubernetes Engineer",
          company: "Eurofins",
          description: "Managing, optimizing, and scaling Kubernetes environments to support mission-critical applications."
        },
        {
          role: "System Engineer DevOps",
          company: "Kuehne + Nagel",
          description: "Building and maintaining DevOps pipelines and infrastructure automation for global IT projects."
        },
        {
          role: "Assistant IT Operations",
          company: "Mondia Media MENA",
          description: "IT operations specialist focusing on Docker, DevOps, Linux, and systems administration in the entertainment industry."
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
        <div className="flex items-center space-x-4 mb-12">
          <div className="p-3 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 rounded-xl">
            <FiBriefcase size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        </div>

        <div className="relative border-l border-gray-200 dark:border-white/20 ml-6 md:ml-8 space-y-12">
          {t.roles.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 bg-white dark:bg-[#050505] border-2 border-blue-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-lg">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}