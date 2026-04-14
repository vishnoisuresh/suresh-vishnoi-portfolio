import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiAward, FiBook } from 'react-icons/fi';
import Head from 'next/head';
import { LanguageContext } from '../context/LanguageContext';

export default function About() {
  const { lang } = useContext(LanguageContext);

  const t = {
    de: {
      title: "Über mich",
      p1: <>Mein Name ist <strong className="text-gray-900 dark:text-white">Suresh Vishnoi</strong>. Ich bin ein Cloud Consultant und IT-Spezialist mit Sitz in Hamburg, derzeit tätig bei Red Hat.</>,
      p2: "Ich verfüge über weitreichende Berufserfahrung im IT-Bereich mit Schwerpunkt auf IT-Infrastrukturarchitektur und DevOps. Ich arbeite hauptsächlich mit Linux, Kubernetes, OpenShift, Docker und weiteren Open-Source-Technologien, die in modernen Rechenzentren zum Einsatz kommen.",
      p3: "Ich unterstütze Enterprise-Kunden dabei, von traditionellen IT-Strukturen auf agile, containerisierte Plattformen zu migrieren. Dabei liegt mein Fokus auf der Automatisierung (RHEL, Ansible) und der GitOpsifizierung von OpenShift-Umgebungen (inklusive RHACM, RHACS, Quay, ODF, OpenShift AI).",
      degTitle: "Bildung",
      deg1: "Masters in Information Engineering, Fachhochschule Kiel",
      deg2: "Bachelor's degree Project in Computer Science, University of Plymouth",
      deg3: "Bachelor's degree in Computer Science, Vellore Institute of Technology",
      certTitle: "Zertifikate",
      cert1: "Red Hat Certified Architect (RHCA)",
      cert2: "Red Hat Certified Engineer (RHCE)",
      cert3: "Red Hat Certified Specialist in OpenShift Virtualization",
      cert4: "CKA: Certified Kubernetes Administrator (The Linux Foundation)",
      cert5: "CKS: Certified Kubernetes Security Specialist (The Linux Foundation)"
    },
    en: {
      title: "About me",
      p1: <>My name is <strong className="text-gray-900 dark:text-white">Suresh Vishnoi</strong>. I am a Cloud Consultant and IT specialist based in Hamburg, Germany, currently working at Red Hat.</>,
      p2: "I have extensive professional experience in the IT sector, focusing on IT infrastructure architecture and DevOps. I mostly work with Linux, Kubernetes, OpenShift, Docker, and other open-source technologies used in modern datacenters.",
      p3: "I help enterprise customers migrate from traditional IT structures to agile, containerized platforms. My focus is on automation (RHEL, Ansible) and GitOpsifying OpenShift environments (including RHACM, RHACS, Quay, ODF, and OpenShift AI).",
      degTitle: "Education",
      deg1: "Masters in Information Engineering, Fachhochschule Kiel",
      deg2: "Bachelor's degree Project in Computer Science, University of Plymouth",
      deg3: "Bachelor's degree in Computer Science, Vellore Institute of Technology",
      certTitle: "Certifications",
      cert1: "Red Hat Certified Architect (RHCA)",
      cert2: "Red Hat Certified Engineer (RHCE)",
      cert3: "Red Hat Certified Specialist in OpenShift Virtualization",
      cert4: "CKA: Certified Kubernetes Administrator (The Linux Foundation)",
      cert5: "CKS: Certified Kubernetes Security Specialist (The Linux Foundation)"
    }
  }[lang];

  return (
    <>
      <Head>
        <title>{t.title} | Suresh Vishnoi IT Consulting</title>
      </Head>
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500 rounded-xl" aria-hidden="true">
            <FiUser size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        </header>

        <section className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 space-y-8 leading-relaxed text-gray-700 dark:text-gray-300 text-lg shadow-sm dark:shadow-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
            <header className="flex items-center space-x-3 mb-6">
              <FiBook size={24} className="text-blue-500 dark:text-blue-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.degTitle}</h2>
            </header>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full shrink-0"></span>
                <span>{t.deg1}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full shrink-0"></span>
                <span>{t.deg2}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full shrink-0"></span>
                <span>{t.deg3}</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
            <header className="flex items-center space-x-3 mb-6">
              <FiAward size={24} className="text-red-500 dark:text-red-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.certTitle}</h2>
            </header>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                <strong className="text-gray-900 dark:text-white">{t.cert1}</strong>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                <span>{t.cert2}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                <span>{t.cert3}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                <span>{t.cert4}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-gray-500 rounded-full shrink-0"></span>
                <span>{t.cert5}</span>
              </li>
            </ul>
          </section>
        </div>
      </motion.article>
    </>
  );
}