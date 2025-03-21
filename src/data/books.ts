
import { Book } from '@/components/BookCard';

// Sample book data
const books: Book[] = [
  {
    id: "starter-1",
    title: "Cambridge Starter 1",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Starters 1 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "https://pwuogdvophzlkdmvdrzi.supabase.co/storage/v1/object/sign/book/starter_1/Starter_book-1_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJib29rL3N0YXJ0ZXJfMS9TdGFydGVyX2Jvb2stMV8xLmpwZyIsImlhdCI6MTc0MjU2NTI4NCwiZXhwIjoxNzc0MTAxMjg0fQ.dZX9ZGT-sgA4py4FnvzQxVrYV4ZHPlg6jRZVAxWbRhI",
    pages: 423,
    category: "fiction",
    readerMode: "pdf",
    pdfUrls: [
      'https://pwuogdvophzlkdmvdrzi.supabase.co/storage/v1/object/sign/book/starter_1/Starter_book-10_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJib29rL3N0YXJ0ZXJfMS9TdGFydGVyX2Jvb2stMTBfMS5qcGciLCJpYXQiOjE3NDI1NjQ4MzAsImV4cCI6MTc0MzE2OTYzMH0.jVWXzcpfSnMKqWb9EZ2pgX4rcX_PlAEb0a_zAhff1tQ',
      'https://pwuogdvophzlkdmvdrzi.supabase.co/storage/v1/object/sign/book/starter_1/Starter_book-11_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJib29rL3N0YXJ0ZXJfMS9TdGFydGVyX2Jvb2stMTFfMS5qcGciLCJpYXQiOjE3NDI1NjQ4MzcsImV4cCI6MTc0MzE2OTYzN30.V7vuNpUaq9cpV7D_G0cdk14lwnnAqKJWair8EvQx4AE',
      'https://pwuogdvophzlkdmvdrzi.supabase.co/storage/v1/object/sign/book/starter_1/Starter_book-12_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJib29rL3N0YXJ0ZXJfMS9TdGFydGVyX2Jvb2stMTJfMS5qcGciLCJpYXQiOjE3NDI1NjQ4ODcsImV4cCI6MTc0MzE2OTY4N30.-0lw9Qh3y0iZLALDRUeo4c1wbIMGaHU0E9_-x7GJtZU',
    ]
  },
  {
    id: "starter-2",
    title: "Cambridge Starter 2",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Starters 2 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "/lovable-uploads/6e011b1d-9107-434d-9805-dd0a92d22ca8.png",
    pages: 387,
    category: "fiction",
    readerMode: "text",
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
    readerMode: "text",
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
    readerMode: "text",
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
    readerMode: "text",
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
    readerMode: "text",
    pdfUrls: undefined
  }
];

export default books;
