import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiUser, FiBriefcase, FiServer, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const router = useRouter();
  const { lang, toggleLang } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const t = {
    de: { home: 'Home', about: 'Über mich', exp: 'Erfahrung', services: 'Dienstleistungen', contact: 'Kontakt', imprint: 'Impressum', privacy: 'Datenschutz' },
    en: { home: 'Home', about: 'About', exp: 'Experience', services: 'Services', contact: 'Contact', imprint: 'Imprint', privacy: 'Privacy Policy' }
  }[lang];

  const navLinks = [
    { name: t.home, path: '/', icon: <FiHome /> },
    { name: t.about, path: '/about', icon: <FiUser /> },
    { name: t.exp, path: '/experience', icon: <FiBriefcase /> },
    { name: t.services, path: '/services', icon: <FiServer /> },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-red-500/30 flex flex-col transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300 shadow-sm dark:shadow-none">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-bold text-white shadow-sm group-hover:scale-105 transition-transform">
              SV
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block text-gray-900 dark:text-white">Suresh Vishnoi</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 bg-gray-100 dark:bg-[#111] p-1 rounded-full border border-gray-200 dark:border-white/5 transition-colors duration-300">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5'
                  }`}
                >
                  <span className={isActive ? "text-red-500 dark:text-red-400" : ""}>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            
            <button 
              onClick={toggleTheme}
              className="p-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-full transition-colors text-gray-700 dark:text-gray-200"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button 
              onClick={toggleLang}
              className="hidden sm:flex px-3 py-1.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-md text-xs font-bold tracking-wider transition-colors text-gray-700 dark:text-gray-200"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>

            <a 
              href="https://www.linkedin.com/in/vishnoisuresh/" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              <FiMail />
              <span>{t.contact}</span>
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden overflow-x-auto pb-3 px-4 flex items-center space-x-2 hide-scrollbar border-t border-gray-200 dark:border-white/5 pt-3 transition-colors duration-300">
          <button 
            onClick={toggleLang}
            className="shrink-0 px-3 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-bold tracking-wider mr-2 text-gray-700 dark:text-gray-200"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  isActive 
                    ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-transparent' 
                    : 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#111] hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className={isActive ? "text-red-500 dark:text-red-400" : ""}>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-8 pt-8 md:pt-12">
        {children}
      </main>

      <footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0a0a0a] py-8 mt-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Suresh Vishnoi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors">{t.imprint}</Link>
            <Link href="#" className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors">{t.privacy}</Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Layout;