import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface Book {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  pages: number;
  category: string;
  pdfUrl?: string; // Optional PDF URL for books that have PDF versions
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/book/${book.id}`}
      className="group"
      aria-label={`Open ${book.title} by ${book.author}`}
    >
      <div className="book-card relative w-full rounded-md overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-book">
        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <BookOpen size={32} className="text-muted-foreground/50" />
            </div>
          )}
          <img
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {book.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            {book.author}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
