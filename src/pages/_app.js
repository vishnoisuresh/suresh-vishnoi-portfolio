import Head from 'next/head'
import '../globals.css'
import Layout from '../components/Layout'
import { LanguageProvider } from '../context/LanguageContext'
import { ThemeProvider } from '../context/ThemeContext'

export default function App({ Component, pageProps }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Suresh Vishnoi",
    "jobTitle": "Senior Cloud Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "Red Hat"
    },
    "url": "https://vishnoisuresh.github.io/suresh-vishnoi-portfolio",
    "sameAs": [
      "https://www.linkedin.com/in/vishnoisuresh",
      "https://stackoverflow.com/users/8803619/suresh-vishnoi",
      "https://github.com/vishnoisuresh"
    ],
    "description": "Senior Cloud Consultant specializing in Kubernetes, OpenShift, Linux, and Cloud-Native Engineering. Helping enterprise customers migrate to agile, containerized platforms.",
    "email": "vishnoi.suresh2016@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressCountry": "Germany"
    },
    "knowsAbout": [
      "Kubernetes", "OpenShift", "Linux", "Docker", "DevOps",
      "Red Hat Enterprise Linux (RHEL)", "Ansible", "GitOps",
      "RHACM", "RHACS", "Quay", "ODF", "OpenShift AI"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification",
        "name": "Red Hat Certified Architect (RHCA)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification",
        "name": "Certified Kubernetes Administrator (CKA)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification",
        "name": "Certified Kubernetes Security Specialist (CKS)"
      }
    ]
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Head>
          <title>Suresh Vishnoi - Senior Cloud Consultant</title>
          <meta name="description" content="Portfolio of Suresh Vishnoi, Senior Cloud Consultant at Red Hat specializing in Kubernetes, OpenShift, and Linux infrastructure." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://vishnoisuresh.github.io/suresh-vishnoi-portfolio" />
          <link rel="alternate" type="text/plain" title="LLMs representation" href="https://vishnoisuresh.github.io/suresh-vishnoi-portfolio/llms.txt" />
          <link rel="alternate" type="application/json" title="Machine-readable portfolio JSON" href="https://vishnoisuresh.github.io/suresh-vishnoi-portfolio/portfolio.json" />
          <meta property="og:title" content="Suresh Vishnoi - Senior Cloud Consultant" />
          <meta property="og:description" content="Portfolio of Suresh Vishnoi, Senior Cloud Consultant at Red Hat specializing in Kubernetes, OpenShift, and Linux infrastructure." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vishnoisuresh.github.io/suresh-vishnoi-portfolio" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}
