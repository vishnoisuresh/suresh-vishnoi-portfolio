import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiServer, FiCloud, FiTool, FiAward, FiMail, FiMapPin, FiArrowUpRight, FiGithub, FiLinkedin, FiX, FiBriefcase, FiUser } from 'react-icons/fi';
import { SiRedhat, SiKubernetes, SiDocker, SiLinux, SiAnsible, SiTerraform } from 'react-icons/si';

const ModernPortfolio = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 lg:p-12 font-sans selection:bg-red-500/30">
      
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-12 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white">FR</div>
          <span className="font-semibold text-lg tracking-tight">Reimer IT Consulting</span>
        </div>
        <a href="mailto:frank.reimer@reimer-itc.com" className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Get in touch
        </a>
      </nav>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] relative z-10">
        
        {/* Main Intro Card -> Opens "About Me" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveModal('about')}
          className="md:col-span-2 row-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:border-red-500/50 transition-all"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full transition-all group-hover:bg-red-600/20"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p className="text-gray-400 mb-4 font-medium uppercase tracking-wider text-sm">IT Consultant & Systems Engineer</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Building scalable <span className="text-red-500">Cloud-Native</span> & <span className="text-blue-500">OpenShift</span> infrastructure.
              </h1>
              <p className="text-gray-400 max-w-lg text-lg">
                I'm Frank Reimer. With over 20 years of experience, I help enterprises transition from traditional silos to agile, software-defined datacenters.
              </p>
            </div>
            <div className="flex justify-between items-end mt-8">
              <div className="flex space-x-4">
                <a href="https://de.linkedin.com/in/frank-reimer-3356a71a" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors">
                  <FiLinkedin size={24} />
                </a>
                <a href="https://www.xing.com/profile/Frank_Reimer10" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors">
                  <FiGithub size={24} />
                </a>
              </div>
              <div className="text-red-400 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Read full bio <FiArrowUpRight className="ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Stat Card -> Opens "Projects & Experience" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setActiveModal('experience')}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all"
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-all"></div>
          <h2 className="text-7xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">20<span className="text-blue-500">+</span></h2>
          <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">Years Experience</p>
          <div className="text-blue-400 text-xs font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            View history <FiArrowUpRight className="ml-1" />
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <FiMapPin size={24} className="text-gray-300" />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Based in</p>
            <h3 className="text-2xl font-bold">Hamburg, DE</h3>
            <p className="text-gray-500 text-sm mt-2">Available for global cross-functional remote teams.</p>
          </div>
        </motion.div>

        {/* Tech Stack Card -> Opens "Services" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => setActiveModal('services')}
          className="md:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 group cursor-pointer hover:border-white/30 transition-all"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <FiTool className="mr-3 text-gray-400" /> Services & Technologies
            </h3>
            <div className="text-gray-400 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              View all services <FiArrowUpRight className="ml-1" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-none">
            <div className="flex flex-col items-center justify-center p-4 bg-[#0a0a0a] rounded-2xl border border-white/5">
              <SiRedhat size={32} className="text-red-500 mb-2" />
              <span className="text-sm font-medium text-gray-300">OpenShift</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-[#0a0a0a] rounded-2xl border border-white/5">
              <SiKubernetes size={32} className="text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-300">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-[#0a0a0a] rounded-2xl border border-white/5">
              <SiAnsible size={32} className="text-white mb-2" />
              <span className="text-sm font-medium text-gray-300">Ansible</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-[#0a0a0a] rounded-2xl border border-white/5">
              <SiTerraform size={32} className="text-[#7b42bc] mb-2" />
              <span className="text-sm font-medium text-gray-300">Terraform</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-3 bg-red-600 border border-red-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
        >
          <div className="absolute right-0 top-0 opacity-10 transform scale-150 translate-x-1/4 -translate-y-1/4 pointer-events-none">
            <SiRedhat size={300} />
          </div>
          <div className="mb-6 md:mb-0 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Need to scale your DevOps infrastructure?</h3>
            <p className="text-red-100">Let's talk about CI/CD, Software Defined Datacenters, and OpenStack.</p>
          </div>
          <a href="mailto:frank.reimer@reimer-itc.com" className="relative z-10 flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-xl">
            <FiMail size={20} />
            <span>frank.reimer@reimer-itc.com</span>
          </a>
        </motion.div>

      </div>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-600 text-sm pb-8 relative z-10">
        &copy; {new Date().getFullYear()} Frank Reimer IT Consulting. All rights reserved. <br/>
        <a href="#" className="hover:text-gray-300 mx-2 transition-colors">Imprint</a> | <a href="#" className="hover:text-gray-300 mx-2 transition-colors">Privacy Policy</a>
      </footer>

      {/* Modals for Detailed Content */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>

              {/* Modal Content: About Me */}
              {activeModal === 'about' && (
                <div>
                  <div className="flex items-center space-x-3 text-red-500 mb-6">
                    <FiUser size={24} />
                    <h2 className="text-2xl font-bold text-white">Über mich (About me)</h2>
                  </div>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Mein Name ist Frank Reimer. Ich bin IT-Spezialist und freiberuflicher IT-Berater mit Sitz in Schleswig-Holstein in der Nähe von Hamburg.
                    </p>
                    <p>
                      Ich verfüge über mehr als 20 Jahre Berufserfahrung im IT-Bereich mit Schwerpunkt auf IT-Infrastrukturarchitektur und Systems Engineering. Meistens arbeite ich mit Linux (Red Hat-zertifiziert) und Opensource-Tools, die in modernen IT-Rechenzentren verwendet werden.
                    </p>
                    <p>
                      Neben konservativen Umgebungen mit traditionellen IT-Silos habe ich funktionsübergreifende globale Arbeitsteams gegründet und geführt, um neue agile IT-Plattformen (z. B. mit Openstack, Docker, Kubernetes, Openshift) zu erstellen, die DevOps-Teams bei ihren schnellen Entwicklungszyklen unterstützen.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">Abschlüsse</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Abitur in Hamburg</li>
                      <li>Ausbildung zum “Fachinformatiker für Systemintegration”</li>
                      <li>Bachelor of Arts in Politik und Verwaltungswissenschaften an der Fernuniversität Hagen</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">Zertifikate</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Red Hat Certified Architect (ID: 120-048-434)</li>
                      <li>Red Hat Certified System Administrator in Red Hat OpenStack</li>
                      <li>Red Hat Certified Security Specialist</li>
                      <li>ITIL v2</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Modal Content: Experience */}
              {activeModal === 'experience' && (
                <div>
                  <div className="flex items-center space-x-3 text-blue-500 mb-6">
                    <FiBriefcase size={24} />
                    <h2 className="text-2xl font-bold text-white">Bisherige Tätigkeiten (Experience)</h2>
                  </div>
                  <div className="space-y-8 text-gray-300">
                    
                    <div className="relative pl-6 border-l border-blue-500/30">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5"></div>
                      <h3 className="text-lg font-bold text-white">Teamlead IT Infrastruktur Architekten (Solution Engineering)</h3>
                      <p className="text-blue-400 text-sm mb-2">Kühne + Nagel</p>
                      <p className="text-sm">Leitung von funktionsübergreifenden Teams zur Entwicklung von Cloud-nativen Architekturen.</p>
                    </div>

                    <div className="relative pl-6 border-l border-blue-500/30">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5"></div>
                      <h3 className="text-lg font-bold text-white">Infrastructure Consultant</h3>
                      <p className="text-blue-400 text-sm mb-2">Red Hat</p>
                      <p className="text-sm">Beratung von Enterprise-Kunden bei der Implementierung von Red Hat OpenShift, OpenStack und Automatisierungslösungen.</p>
                    </div>

                    <div className="relative pl-6 border-l border-blue-500/30">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5"></div>
                      <h3 className="text-lg font-bold text-white">Senior Linux Systems Engineer</h3>
                      <p className="text-blue-400 text-sm mb-2">Wincor Nixdorf Global IT Operations GmbH</p>
                      <p className="text-sm">Verwaltung und Skalierung von komplexen Linux-Umgebungen in Hochverfügbarkeits-Setups.</p>
                    </div>

                    <div className="relative pl-6 border-l border-transparent">
                      <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[6.5px] top-1.5"></div>
                      <h3 className="text-lg font-bold text-white">Systems Engineer und Ausbilder</h3>
                      <p className="text-gray-400 text-sm mb-2">ISA Internet Service Agentur GmbH</p>
                    </div>

                  </div>
                </div>
              )}

              {/* Modal Content: Services */}
              {activeModal === 'services' && (
                <div>
                  <div className="flex items-center space-x-3 text-purple-500 mb-6">
                    <FiServer size={24} />
                    <h2 className="text-2xl font-bold text-white">Dienstleistungen (Services)</h2>
                  </div>
                  <div className="space-y-6 text-gray-300">
                    <p className="mb-6 leading-relaxed">
                      Ich bin vertraut mit dem Aufbau einer Corporate Private Cloud in großen Unternehmen mit IaaS- und PaaS-Komponenten. Dabei liegt mein Fokus stets auf dem Thema "Software Defined Datacenter" und Infrastruktur Automatisierung.
                    </p>

                    <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                      <h3 className="text-white font-bold mb-2 flex items-center"><FiCloud className="mr-2 text-purple-400" /> Corporate Private Cloud</h3>
                      <p className="text-sm">Planung und Aufbau von Infrastructure as a Service (IaaS) und Platform as a Service (PaaS) Umgebungen, einschließlich Software Defined Storage und Network.</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                      <h3 className="text-white font-bold mb-2 flex items-center"><SiKubernetes className="mr-2 text-blue-400" /> Container & Orchestration</h3>
                      <p className="text-sm">Design und Betrieb von hochverfügbaren Kubernetes und Red Hat OpenShift Clustern für moderne Microservice-Architekturen.</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                      <h3 className="text-white font-bold mb-2 flex items-center"><SiAnsible className="mr-2 text-white" /> DevOps & Automatisierung</h3>
                      <p className="text-sm">Erstellung von CI/CD-Pipelines (Jenkins, Git), Python-Skripting, und Infrastruktur-Automatisierung mit Ansible, Terraform und Puppet.</p>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}} />
    </div>
  );
};

export default ModernPortfolio;