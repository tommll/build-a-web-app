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
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Set total pages based on htmlUrls length or book.pages
    if (book.htmlUrls && book.htmlUrls.length > 0) {
      setTotalPages(book.htmlUrls.length);
    } else {
      setTotalPages(book.pages || 1);
    }
  }, [book]);

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
    return (
      <div dangerouslySetInnerHTML={{ __html: book.htmlStrings[currentPage - 1] }} />
    );
  };

  return (
    <div className="w-full bg-reader-background min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center py-8 px-4">
        <div className="relative max-w-4xl w-full">
          <div className="relative bg-white rounded-sm mx-auto max-w-3xl shadow-lg overflow-hidden">
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
