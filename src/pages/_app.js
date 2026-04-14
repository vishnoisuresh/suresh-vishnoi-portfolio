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
      "https://stackoverflow.com/users/8803619/suresh-vishnoi"
    ],
    "description": "I help enterprise customers build stable, scalable, and modern IT infrastructures – focusing on Kubernetes, OpenShift, and Linux.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressCountry": "Germany"
    }
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
