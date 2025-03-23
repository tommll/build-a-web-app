import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Book } from './BookCard';
import { Button } from './ui/button';

interface TextReaderProps {
  book: Book;
}

const TextReader: React.FC<TextReaderProps> = ({ book }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Set total pages based on htmlUrls length or book.pages
    if (book.htmlUrls && book.htmlUrls.length > 0) {
      setTotalPages(book.htmlUrls.length);
    } else {
      setTotalPages(book.pages || 1);
    }
  }, [book]);

  useEffect(() => {
    const loadHtmlContent = async () => {
      setIsLoading(true);
      
      if (book.htmlUrls && book.htmlUrls.length > 0) {
        try {
          const response = await fetch(book.htmlUrls[currentPage - 1]);
          if (response.ok) {
            const html = await response.text();
            setHtmlContent(html);
          } else {
            console.error('Failed to load HTML content');
            setHtmlContent('');
          }
        } catch (error) {
          console.error('Error loading HTML content:', error);
          setHtmlContent('');
        }
      } else {
        setHtmlContent('');
      }
      
      setIsLoading(false);
    };

    loadHtmlContent();
  }, [book.htmlUrls, currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const renderHtmlContent = () => {
    if (!htmlContent) {
      return (
        <div className="flex flex-col items-center justify-center h-[80vh] p-6 text-center">
          <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Content Not Available</h3>
          <p className="text-muted-foreground mb-6">
            The HTML content for this book is not available. Please check back later.
          </p>
        </div>
      );
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

  return (
    <div className="w-full bg-reader-background min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center py-8 px-4">
        <div className="relative max-w-4xl w-full">
          <div className="relative bg-white rounded-sm mx-auto max-w-3xl shadow-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            
            {renderHtmlContent()}
          </div>

          <div className="flex justify-between mt-8 items-center px-4">
            <Button
              onClick={goToPrevPage}
              disabled={currentPage <= 1 || !book.htmlUrls || book.htmlUrls.length === 0}
              variant="outline"
              className="rounded-full p-2 h-10 w-10"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            
            <Button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages || !book.htmlUrls || book.htmlUrls.length === 0}
              variant="outline"
              className="rounded-full p-2 h-10 w-10"
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextReader;
