
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import books from '@/data/books';
import BookReader from '@/components/BookReader';
import PdfReader from '@/components/PdfReader';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<'text' | 'pdf'>('text');

  const book = books.find(b => b.id === id);
  
  useEffect(() => {
    // First set mounted to trigger enter animation
    setMounted(true);
    
    // Simulate book loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6 text-muted-foreground">
            <BookOpen size={48} className="mx-auto mb-4" />
          </div>
          <h1 className="text-2xl font-medium mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the book you're looking for. It may have been removed or the link is incorrect.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  const hasPdfPages = book.pdfUrls && book.pdfUrls.length > 0;

  return (
    <div className={cn(
      "min-h-screen transition-opacity duration-500",
      mounted ? "opacity-100" : "opacity-0"
    )}>
      <div className="fixed top-0 left-0 z-50 p-4 flex items-center gap-2">
        <Link 
          to="/"
          className="inline-flex items-center rounded-full p-2 bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background transition-colors duration-200"
          aria-label="Back to library"
        >
          <ArrowLeft size={20} />
        </Link>
        
        {hasPdfPages && (
          <div className="flex items-center bg-background/80 backdrop-blur-sm rounded-full p-1">
            <Button
              variant={viewMode === 'text' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full text-xs px-3 h-8"
              onClick={() => setViewMode('text')}
            >
              <BookOpen size={16} className="mr-1" />
              Text
            </Button>
            <Button
              variant={viewMode === 'pdf' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full text-xs px-3 h-8"
              onClick={() => setViewMode('pdf')}
            >
              <FileText size={16} className="mr-1" />
              PDF
            </Button>
          </div>
        )}
      </div>
      
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse space-y-4 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-muted"></div>
            <div className="text-muted-foreground">Loading book...</div>
          </div>
        </div>
      ) : (
        <>
          {viewMode === 'pdf' && hasPdfPages ? (
            <PdfReader book={book} />
          ) : (
            <BookReader book={book} />
          )}
        </>
      )}
    </div>
  );
};

export default BookPage;
