
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BookCard from '@/components/BookCard';
import books from '@/data/books';
import { cn } from '@/lib/utils';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [staggeredBooks, setStaggeredBooks] = useState<typeof books>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Create staggered animation effect
    if (!loading) {
      const displayBooks = [...books];
      setStaggeredBooks([]);
      
      const interval = 100;
      displayBooks.forEach((book, index) => {
        setTimeout(() => {
          setStaggeredBooks(prev => [...prev, book]);
        }, index * interval);
      });
    }
  }, [loading]);

  // Filter books by active category if needed
  const filteredBooks = activeCategory === 'all' 
    ? books 
    : books.filter(book => book.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} activeCategory={activeCategory} />
      
      <main className={cn(
        "pt-20 pb-12 transition-all duration-300",
        sidebarOpen ? "ml-0 sm:ml-16 md:ml-64" : "ml-0"
      )}>
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-medium mb-2">Read Now</h1>
            <p className="text-muted-foreground">Top picks for you. Updated daily.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {loading ? (
              // Skeleton loaders
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-muted rounded-md mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              ))
            ) : (
              staggeredBooks.map((book, index) => (
                <div 
                  key={book.id}
                  className="animate-slide-in" 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <BookCard book={book} />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
