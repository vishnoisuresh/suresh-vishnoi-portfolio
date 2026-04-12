import React, { useState } from 'react';
import { FiTerminal, FiGithub, FiLinkedin, FiMail, FiServer, FiGitBranch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const YamlPortfolio = () => {
  const [activeTab, setActiveTab] = useState('deployment.yaml');

  const files = {
    'deployment.yaml': `apiVersion: apps/v1
kind: Deployment
metadata:
  name: frank-reimer-consulting
  labels:
    app: portfolio
    tier: frontend
spec:
  replicas: 1
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: consultant-profile
        image: quay.io/freimer/portfolio:latest
        env:
        - name: ROLE
          value: "IT Consultant & Systems Engineer"
        - name: FOCUS
          value: "Infrastructure Architecture & OpenShift"
        - name: EXPERIENCE_YEARS
          value: "20+"
        resources:
          requests:
            cpu: "500m"
            memory: "1Gi"
          limits:
            cpu: "1000m"
            memory: "2Gi"`,
            
    'configmap.yaml': `apiVersion: v1
kind: ConfigMap
metadata:
  name: skills-config
data:
  core-competencies: |
    - OpenShift & Kubernetes
    - OpenStack
    - Software Defined Datacenter
    - CI/CD & DevOps
  tools: |
    - Ansible
    - Terraform
    - Jenkins
    - Git
  certifications: |
    - Red Hat Certified Architect
    - RHCE, RHCSA
    - Red Hat Certified Specialist in Virtualization`,
    
    'service.yaml': `apiVersion: v1
kind: Service
metadata:
  name: contact-service
spec:
  type: LoadBalancer
  ports:
  - port: 443
    targetPort: 8443
    protocol: TCP
    name: https
  selector:
    app: portfolio
  endpoints:
    - name: "Frank Reimer"
      email: "frank.reimer@reimer-itc.com"
      phone: "+49 151 22358459"
      location: "Hamburg / Schleswig-Holstein, Germany"`
  };

  const colorizeYaml = (text) => {
    return text.split('\\n').map((line, i) => {
      if (line.trim().startsWith('#')) {
        return <div key={i} className="text-yaml-comment">{line}</div>;
      }
      
      const match = line.match(/^(\\s*)([a-zA-Z0-9_-]+):(.*)$/);
      if (match) {
        const [_, indent, key, value] = match;
        
        let coloredValue = value;
        if (value.trim().startsWith('"') || value.trim().startsWith("'")) {
          coloredValue = <span className="text-yaml-string">{value}</span>;
        } else if (!isNaN(Number(value.trim())) && value.trim() !== '') {
          coloredValue = <span className="text-yaml-number">{value}</span>;
        } else if (value.trim() === 'true' || value.trim() === 'false') {
          coloredValue = <span className="text-yaml-boolean">{value}</span>;
        } else {
           coloredValue = <span className="text-terminal-text">{value}</span>;
        }

        return (
          <div key={i}>
            {indent}
            <span className="text-yaml-key">{key}</span>:
            {coloredValue}
          </div>
        );
      }
      
      if (line.trim().startsWith('- ')) {
        const parts = line.split('- ');
        return (
          <div key={i}>
            <span className="text-terminal-text">{parts[0]}- </span>
            <span className="text-yaml-string">{parts[1]}</span>
          </div>
        );
      }

      return <div key={i} className="text-terminal-text">{line}</div>;
    });
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono p-4 md:p-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-[#252526] rounded-lg shadow-2xl overflow-hidden border border-[#3c3c3c]"
      >
        <div className="bg-[#323233] flex items-center px-4 py-2 border-b border-[#1e1e1e]">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-xs text-gray-400 flex items-center">
              <FiTerminal size={14} className="mr-2" />
              freimer@openshift-cluster:~
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[600px]">
          <div className="w-full md:w-48 bg-[#252526] border-r border-[#3c3c3c] flex flex-col hidden md:flex">
            <div className="p-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Explorer</div>
            <div className="px-2 text-sm text-gray-300">
              <div className="flex items-center py-1 cursor-pointer">
                <FiServer size={14} className="mr-2 text-blue-400" />
                MANIFESTS
              </div>
              <div className="pl-4">
                {Object.keys(files).map(file => (
                  <div 
                    key={file}
                    onClick={() => setActiveTab(file)}
                    className={`py-1 cursor-pointer text-sm flex items-center ${activeTab === file ? 'bg-[#37373d] text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    <FiGitBranch size={12} className="mr-2 text-green-400" />
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            <div className="flex bg-[#252526] overflow-x-auto">
              {Object.keys(files).map(file => (
                <div 
                  key={file}
                  onClick={() => setActiveTab(file)}
                  className={`px-4 py-2 text-sm cursor-pointer border-r border-[#3c3c3c] flex items-center ${activeTab === file ? 'bg-[#1e1e1e] border-t-2 border-t-blue-500 text-white' : 'text-gray-400 hover:bg-[#2d2d2d]'}`}
                >
                  <FiGitBranch size={12} className="mr-2 text-green-400" />
                  {file}
                </div>
              ))}
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex">
                <div className="w-8 text-right pr-4 text-[#858585] select-none">
                  {files[activeTab].split('\\n').map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1 whitespace-pre">
                  {colorizeYaml(files[activeTab])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex space-x-6"
      >
        <a href="mailto:frank.reimer@reimer-itc.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
          <FiMail size={20} className="mr-2" /> Email
        </a>
        <a href="https://de.linkedin.com/in/frank-reimer-3356a71a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
          <FiLinkedin size={20} className="mr-2" /> LinkedIn
        </a>
        <a href="https://www.xing.com/profile/Frank_Reimer10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
          <FiGithub size={20} className="mr-2" /> Xing
        </a>
      </motion.div>
    </div>
  );
}

export default YamlPortfolio;
