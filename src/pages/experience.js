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
          duration: "April 2025 - Present",
          description: "Beratung von Kunden bei der Implementierung von RHEL, Ansible und der GitOpsifizierung von OpenShift. Expertise in RHACM, RHACS, Quay, ODF, OpenShift AI und OCP-V."
        },
        {
          role: "Cloud Consultant",
          company: "Red Hat",
          duration: "Januar 2023 - April 2025",
          description: (
            <>
              Unterstützung von Enterprise-Kunden beim Aufbau moderner, skalierbarer Cloud-nativer IT-Infrastrukturen basierend auf Red Hat Technologien.
              <br /><br />
              <strong>Consulting Projekte:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>German Public Sector:</strong> Implementierung von OpenShift auf vSphere, Day 2 Operations mit ArgoCD GitOps und RHACS-Implementierung nach BSI-Vorgaben.</li>
                <li><strong>Banking Sector:</strong> Health Check für mehrere OpenShift Container Plattformen.</li>
                <li><strong>Manufacturing Industry:</strong> Design und Implementierung von OpenShift auf vSphere mit ODF, ArgoCD GitOps mit RHACM-Richtlinien, RHACS und Monitoring (Prometheus/Loki).</li>
              </ul>
            </>
          )
        },
        {
          role: "Senior Kubernetes Engineer",
          company: "Eurofins",
          duration: "September 2021 - Dezember 2022",
          description: (
            <>
              Verwaltung, Optimierung und Skalierung von Kubernetes-Umgebungen zur Unterstützung von unternehmenskritischen Anwendungen.
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Design, Architektur und Implementierung von Container-Plattformen (Kubernetes/Rancher) auf virtualisierten Umgebungen (vSphere).</li>
                <li>Monitoring- und Logging-Infrastrukturkomponenten (Prometheus Stack und Loki).</li>
                <li>Plattformintegration mit externem Storage (NetApp und S3).</li>
                <li>Aufbau von CI/CD-Systemen für Infrastructure as Code (IaC).</li>
              </ul>
            </>
          )
        },
        {
          role: "System Engineer DevOps",
          company: "Kuehne + Nagel",
          duration: "November 2018 - September 2021",
          description: (
            <>
              Aufbau und Wartung von DevOps-Pipelines und Infrastruktur-Automatisierung für globale IT-Projekte.
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Design, Architektur und Implementierung von Kubernetes/OpenShift-Container-Plattformen (vSphere und Bare-Metal).</li>
                <li>Verwaltung der internen Container Image Registry.</li>
                <li>Day-2-Operations via Automatisierung (Bash/Python-Skripte) über Rundeck.</li>
                <li>Monitoring- und Logging-Komponenten (EFK Stack, Prometheus, Centreon, checkMK, Grafana).</li>
                <li>Integration von Identity Manager Lösungen (wie IPA) mit OpenShift und SDN-Erweiterung (NSX-T).</li>
                <li>Integration der Container-Plattform mit Enterprise-Storage (NetApp) und Object Storage.</li>
                <li>Beratung beim Aufbau von CI/CD-Pipelines (Jenkins, GitLab).</li>
              </ul>
            </>
          )
        },
        {
          role: "Assistant IT Operations",
          company: "Mondia Media MENA",
          duration: "Juli 2017 - Oktober 2018",
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
          duration: "April 2025 - Present",
          description: "Consulting customers on RHEL, Ansible, and GitOpsifying OpenShift. Expertise in RHACM, RHACS, Quay, ODF, OpenShift AI, and OCP-V."
        },
        {
          role: "Cloud Consultant",
          company: "Red Hat",
          duration: "January 2023 - April 2025",
          description: (
            <>
              Assisting enterprise customers in building modern, scalable cloud-native IT infrastructures based on Red Hat technologies.
              <br /><br />
              <strong>Consulting Projects:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>German Public Sector:</strong> Implemented OpenShift Container Platform on vSphere, Day 2 Operations using ArgoCD GitOps, and RHACS policies for BSI compliance.</li>
                <li><strong>Banking Sector:</strong> Conducted health checks of multiple OpenShift Container Platforms.</li>
                <li><strong>Manufacturing Industry:</strong> Designed and implemented OpenShift on vSphere with ODF, ArgoCD GitOps with RHACM policies, RHACS, and Monitoring (Prometheus & Loki).</li>
              </ul>
            </>
          )
        },
        {
          role: "Senior Kubernetes Engineer",
          company: "Eurofins",
          duration: "September 2021 - December 2022",
          description: (
            <>
              Managing, optimizing, and scaling Kubernetes environments to support mission-critical applications.
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Design, architect and Implement Container Platform(Kubernetes/Rancher) on Virtualized Environment (vSphere).</li>
                <li>Monitoring and logging infrastructure components using Prometheus stack and Loki.</li>
                <li>Platform integration with external Storage NetApp and S3.</li>
                <li>Build CICD system for IaC setup.</li>
              </ul>
            </>
          )
        },
        {
          role: "System Engineer DevOps",
          company: "Kuehne + Nagel",
          duration: "November 2018 - September 2021",
          description: (
            <>
              Building and maintaining DevOps pipelines and infrastructure automation for global IT projects.
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Design, architect and Implement Container Platform (Kubernetes/OpenShift) on Virtualized Environment (vSphere) and Bare Metal Servers.</li>
                <li>Managing Internal Container Image Registry.</li>
                <li>Doing Day 2 Operations such as Automation using bash scripts / python on rundeck.</li>
                <li>Monitoring and logging infrastructure components using EFK Stack and Prometheus, Centreon, checkMK and Grafana.</li>
                <li>Integrating Identity Manager solutions (IPA) with OpenShift and extending the Container Platform with Software Defined Networking (NSX-T).</li>
                <li>Integrating the Container Platform with Storage such as NetApp and Object Storage.</li>
                <li>Consulting with developers to build CI/CD Pipelines such as Jenkins, Gitlab.</li>
              </ul>
            </>
          )
        },
        {
          role: "Assistant IT Operations",
          company: "Mondia Media MENA",
          duration: "July 2017 - October 2018",
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mt-1 sm:mt-0">{exp.duration}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}