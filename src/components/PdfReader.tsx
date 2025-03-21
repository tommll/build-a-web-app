
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Book } from './BookCard';
import { Button } from './ui/button';

interface PdfReaderProps {
  book: Book;
}

const PdfReader: React.FC<PdfReaderProps> = ({ book }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(book.pages || 1);

  // This will be replaced with actual PDF rendering once a URL is provided
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

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

  return (
    <div className="w-full bg-reader-background min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center py-8 px-4">
        <div className="relative max-w-4xl w-full">
          {/* PDF placeholder - will be replaced with actual PDF viewer */}
          <div className="relative bg-white rounded-sm mx-auto max-w-3xl shadow-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            
            {book.pdfUrl ? (
              <iframe 
                src={`${book.pdfUrl}#page=${currentPage}`}
                className="w-full h-[80vh]"
                onLoad={handleIframeLoad}
                title={`${book.title} PDF`}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-[80vh] p-6 text-center">
                <BookIcon className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">PDF Not Available</h3>
                <p className="text-muted-foreground mb-6">
                  The PDF version of this book is not yet available. Please check back later.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8 items-center px-4">
            <Button
              onClick={goToPrevPage}
              disabled={currentPage <= 1 || !book.pdfUrl}
              variant="outline"
              className="rounded-full p-2 h-10 w-10"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
              
              {book.pdfUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(book.pdfUrl, '_blank')}
                >
                  <Download size={16} />
                  Download PDF
                </Button>
              )}
            </div>
            
            <Button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages || !book.pdfUrl}
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

// BookIcon component for the placeholder
const BookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export default PdfReader;
