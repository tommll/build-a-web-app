
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Book } from './BookCard';

interface BookReaderProps {
  book: Book;
}

const BookReader: React.FC<BookReaderProps> = ({ book }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pageAnimation, setPageAnimation] = useState('');

  const totalPages = book.pages || 423; // Default to 423 if not specified

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPageAnimation('animate-page-turn');
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setPageAnimation('');
      }, 300);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setPageAnimation('animate-page-turn');
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setPageAnimation('');
      }, 300);
    }
  };

  // Mock content generator based on page number
  const getPageContent = () => {
    if (currentPage === 1) {
      return (
        <div className="text-center py-16">
          <h1 className="text-3xl font-serif mb-6">{book.title}</h1>
          <div className="w-16 h-1 bg-muted mx-auto mb-6"></div>
          <h2 className="text-xl text-muted-foreground mb-12">by {book.author}</h2>
          
          <p className="text-muted-foreground mt-24 text-sm">
            Cambridge University Press
          </p>
        </div>
      );
    }
    
    return (
      <div className="font-serif leading-relaxed">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl 
          aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
          aliquam nisl, eget ultricies nisl nisl eget nisl.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {currentPage % 3 === 0 && (
          <p className="mb-4 italic">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          </p>
        )}
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    );
  };

  return (
    <div className="w-full bg-reader-background min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center py-8 px-4">
        <div className={cn(
          "relative max-w-3xl w-full transition-all duration-300",
          isLoading ? "opacity-0" : "opacity-100",
        )}>
          <div className={cn(
            "book-page relative bg-reader-paper rounded-sm px-8 py-12 mx-auto max-w-2xl",
            pageAnimation
          )}>
            <div className="page-shadow left"></div>
            <div className="page-shadow right"></div>
            {getPageContent()}
          </div>

          <div className="flex justify-between mt-8 items-center px-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
              className={cn(
                "p-2 rounded-full transition-all duration-200",
                currentPage <= 1 ? "text-muted-foreground/40" : "hover:bg-muted/70 text-foreground"
              )}
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className={cn(
                "p-2 rounded-full transition-all duration-200",
                currentPage >= totalPages ? "text-muted-foreground/40" : "hover:bg-muted/70 text-foreground"
              )}
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
