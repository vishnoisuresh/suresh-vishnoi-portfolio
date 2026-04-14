import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiServer, FiTool, FiShield, FiActivity, FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi';
import Head from 'next/head';
import { LanguageContext } from '../context/LanguageContext';

export default function Services() {
  const { lang } = useContext(LanguageContext);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const t = {
    de: {
      title: "Dienstleistungen",
      focus: <>Mein Fokus liegt stets auf dem Thema <strong className="text-gray-900 dark:text-white">"Cloud Native Architecture"</strong> und vollumfänglicher <strong className="text-gray-900 dark:text-white">Infrastruktur Automatisierung</strong>.</>,
      services: [
        {
          title: "Kubernetes & OpenShift Platforming",
          icon: <FiServer size={28} className="text-blue-500 dark:text-blue-400" />,
          description: "Design, Aufbau und Skalierung von hochverfügbaren Container-Plattformen. Spezialisiert auf Red Hat OpenShift (Bare Metal & vSphere) zur sicheren Bereitstellung von Microservices und unternehmenskritischen Anwendungen.",
          details: [
            "Architektur und Implementierung von Multi-Cluster-Umgebungen",
            "Bare-Metal, vSphere und Cloud-Provider Bereitstellungen",
            "Kapazitätsplanung und Hochverfügbarkeits-Konzepte",
            "Integration von Storage-Lösungen (ODF / Ceph)"
          ]
        },
        {
          title: "GitOps & Infrastructure Automation",
          icon: <FiTool size={28} className="text-gray-600 dark:text-gray-400" />,
          description: "Transformation traditioneller IT-Betriebsmodelle in deklarative, immutable Infrastrukturen. Implementierung von CI/CD-Pipelines (ArgoCD, Jenkins, GitLab) und Infrastructure as Code (Ansible, Terraform).",
          details: [
            "Einführung von GitOps-Workflows mit ArgoCD",
            "Automatisierung mit Ansible (Playbooks, Roles, AAP)",
            "Automatisches Cluster-Provisioning und Konfiguration",
            "Aufbau von Continuous Delivery Pipelines"
          ]
        },
        {
          title: "Cloud-Native Security & Compliance",
          icon: <FiShield size={28} className="text-red-500 dark:text-red-400" />,
          description: "Integration von Sicherheit in den gesamten Container-Lebenszyklus (DevSecOps). CKS-zertifizierte Expertise in der Umsetzung von BSI-Vorgaben mittels Red Hat Advanced Cluster Security (RHACS).",
          details: [
            "Implementierung von Zero-Trust Netzwerkrichtlinien",
            "Image-Scanning und Vulnerability Management (Quay, RHACS)",
            "Umsetzung von BSI-Grundschutz und Compliance-Richtlinien",
            "RBAC-Design und Secrets-Management"
          ]
        },
        {
          title: "Observability & Day-2 Operations",
          icon: <FiActivity size={28} className="text-green-500 dark:text-green-400" />,
          description: "Aufbau umfassender Monitoring- und Logging-Stacks (Prometheus, Grafana, Loki, EFK). Automatisierung von Day-2-Prozessen zur Gewährleistung von Systemstabilität und Performance (RHACM).",
          details: [
            "Flottenmanagement mit Red Hat Advanced Cluster Management (RHACM)",
            "Einrichtung von Prometheus, Grafana und Alertmanager",
            "Zentralisiertes Logging (Loki, Elasticsearch)",
            "Backup und Disaster Recovery Strategien (OADP)"
          ]
        }
      ]
    },
    en: {
      title: "Services",
      focus: <>My focus is always on <strong className="text-gray-900 dark:text-white">"Cloud Native Architectures"</strong> and comprehensive <strong className="text-gray-900 dark:text-white">Infrastructure Automation</strong>.</>,
      services: [
        {
          title: "Kubernetes & OpenShift Platforming",
          icon: <FiServer size={28} className="text-blue-500 dark:text-blue-400" />,
          description: "Design, build, and scaling of high-availability container platforms. Specialized in Red Hat OpenShift (Bare Metal & vSphere) for the secure deployment of microservices and mission-critical applications.",
          details: [
            "Architecture and implementation of multi-cluster environments",
            "Bare-metal, vSphere, and cloud-provider deployments",
            "Capacity planning and High-Availability concepts",
            "Integration of storage solutions (ODF / Ceph)"
          ]
        },
        {
          title: "GitOps & Infrastructure Automation",
          icon: <FiTool size={28} className="text-gray-600 dark:text-gray-400" />,
          description: "Transforming traditional IT operations into declarative, immutable infrastructures. Implementation of CI/CD pipelines (ArgoCD, Jenkins, GitLab) and Infrastructure as Code (Ansible, Terraform).",
          details: [
            "Introduction of GitOps workflows with ArgoCD",
            "Automation with Ansible (Playbooks, Roles, AAP)",
            "Automated cluster provisioning and configuration",
            "Building Continuous Delivery pipelines"
          ]
        },
        {
          title: "Cloud-Native Security & Compliance",
          icon: <FiShield size={28} className="text-red-500 dark:text-red-400" />,
          description: "Integrating security across the entire container lifecycle (DevSecOps). CKS-certified expertise in implementing BSI compliance using Red Hat Advanced Cluster Security (RHACS).",
          details: [
            "Implementation of Zero-Trust network policies",
            "Image scanning and Vulnerability Management (Quay, RHACS)",
            "Implementation of BSI IT-Grundschutz and compliance guidelines",
            "RBAC design and Secrets Management"
          ]
        },
        {
          title: "Observability & Day-2 Operations",
          icon: <FiActivity size={28} className="text-green-500 dark:text-green-400" />,
          description: "Building comprehensive monitoring and logging stacks (Prometheus, Grafana, Loki, EFK). Automating Day-2 processes to ensure system stability and performance (RHACM).",
          details: [
            "Fleet management with Red Hat Advanced Cluster Management (RHACM)",
            "Setup of Prometheus, Grafana, and Alertmanager",
            "Centralized logging (Loki, Elasticsearch)",
            "Backup and Disaster Recovery strategies (OADP)"
          ]
        }
      ]
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
          <div className="p-3 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl" aria-hidden="true">
            <FiServer size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        </header>

        <section className="mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.focus}
          </p>
        </section>

        <div className="space-y-6">
          {t.services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <section 
                key={index} 
                className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-all duration-300"
              >
                <button 
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="w-full text-left p-6 md:p-8 flex items-start sm:items-center justify-between focus:outline-none focus:bg-gray-50 dark:focus:bg-white/5 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                    <div className="bg-gray-50 dark:bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10" aria-hidden="true">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                      {!isExpanded && (
                        <p className="text-gray-500 dark:text-gray-400 mt-2 line-clamp-1 text-sm md:text-base">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 text-gray-400 hidden sm:block">
                    {isExpanded ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 dark:border-white/5"
                    >
                      <div className="p-6 md:p-8 pt-0 md:pt-0">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 mt-4 text-lg">
                          {service.description}
                        </p>
                        
                        <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                            {lang === 'de' ? 'Schwerpunkte & Details' : 'Key Offerings & Details'}
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start space-x-3">
                                <FiCheckCircle className="text-red-500 mt-1 shrink-0" size={18} aria-hidden="true" />
                                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            );
          })}
        </div>
      </motion.article>
    </>
  );
}