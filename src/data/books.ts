
import { Book } from '@/components/BookCard';

// Sample book data
const books: Book[] = [
  {
    id: "starter-1",
    title: "Cambridge Starter 1",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Starters 1 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "/lovable-uploads/455bae8c-13d4-4dd2-b7c5-a62b719067dd.png",
    pages: 423,
    category: "fiction",
    pdfUrls: undefined // JPG URLs will be provided later
  },
  {
    id: "starter-2",
    title: "Cambridge Starter 2",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Starters 2 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "/lovable-uploads/6e011b1d-9107-434d-9805-dd0a92d22ca8.png",
    pages: 387,
    category: "fiction",
    pdfUrls: undefined // JPG URLs will be provided later
  },
  {
    id: "movers-1",
    title: "Cambridge Movers 1",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Movers 1 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
    pages: 356,
    category: "fiction",
    pdfUrls: undefined
  },
  {
    id: "flyers-1",
    title: "Cambridge Flyers 1",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Flyers 1 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    pages: 412,
    category: "fiction",
    pdfUrls: undefined
  },
  {
    id: "prof-english",
    title: "Professional English in Use",
    author: "Cambridge University Press",
    description: "Professional English in Use series is designed for intermediate to advanced level students who need to use English in a professional environment.",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800",
    pages: 298,
    category: "nonfiction",
    pdfUrls: undefined
  },
  {
    id: "advanced-grammar",
    title: "Advanced Grammar in Use",
    author: "Cambridge University Press",
    description: "Advanced Grammar in Use is a reference and practice book for learners of English at advanced (C1-C2) level.",
    coverImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800",
    pages: 376,
    category: "nonfiction",
    pdfUrls: undefined
  }
];

export default books;
