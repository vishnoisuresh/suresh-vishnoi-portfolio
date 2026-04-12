import '../globals.css'
import Layout from '../components/Layout'
import { LanguageProvider } from '../context/LanguageContext'
import { ThemeProvider } from '../context/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}
