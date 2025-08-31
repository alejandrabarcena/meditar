import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticlePage } from './pages/ArticlePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPostId, setCurrentPostId] = useState<string>('');

  const handleNavigation = (page: string, postId?: string) => {
    setCurrentPage(page);
    if (postId) {
      setCurrentPostId(postId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'articles':
        return <ArticlesPage onNavigate={handleNavigation} />;
      case 'article':
        return <ArticlePage postId={currentPostId} onNavigate={handleNavigation} />;
      case 'categories':
        return <CategoriesPage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="relative">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;