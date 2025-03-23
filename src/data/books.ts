import { Book } from '@/components/BookCard';

// Sample book data
const books: Book[] = [
  {
    id: "starter-1",
    title: "Cambridge Starter 1",
    author: "Cambridge University Press",
    description: "Cambridge Young Learners English Tests Starters 1 Student's Book: Examination Papers from the University of Cambridge ESOL Examinations",
    coverImage: "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-1-4I0mWgHLEvm1w2DNkO4AzklLTONuI2.jpg",
    pages: 423,
    category: "fiction",
    readerMode: "pdf",
    pdfUrls: [
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-1-4I0mWgHLEvm1w2DNkO4AzklLTONuI2.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-2-RT6s3907c3umP6whnlYIdz7MVqpQt6.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-3-XWbkaqU8pph1RVeIFinoibtjIWLDPk.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-4-c3Q6bxekkraVjQTvCrqZp3nMV5HPn4.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-5-1tmo7232d3Zd8TGaQqEdI50FVX4fds.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-6-Y2clScnekylRXuKMyPf9NETAdnTARc.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-7-CEzqfORtXc2XoeNDYOpsHxHW0z8NSV.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-8-fA0THu5YeSbnyj18MZLVHZH3GmZYJo.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-9-MvyGkAIs28qke73F72JnbhWG8ukiO3.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-10-pXP2yudFEG6P8ECvYnHXiMwjuzaoA6.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-11-KK51aGzOJC059qYt1xxtcCDMJbqnEc.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-12-i2sObfWo5BaRxlOF6MeIlJA15ImNog.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-13-wRYCMP16fYdllGdxhvR9IJEvN7Qq43.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-14-VqgIVMXmtkkypst1PDPC0eNVCQhIrI.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-15-Xko7NQLi4r2Iea72t1OA8W71pVDuSL.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-16-PS8AFuZwTJXXDDGimvtYQv2mbLc5JY.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-17-VcZ17mxn24JmT3BeOH4HvVIxhQcFNg.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-18-KQmoSnkf7MlIx3y5Z04xJE6YUKc9F6.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-19-JbxGUqjkkhwYKzV0JZrK1JYdf5N6by.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-20-Aft6WccqYwB2a7G2MieLJV0LxQN3s7.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-21-4YJ5z1rIDt3KQLALZxioLImFKbIOIL.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-22-JaC8dk2AcNctPXe0yYq6OgTiS3bdxZ.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-23-cGVHGnx3ucoM909LMZGyaeLVrSfJ1o.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-24-PSiS616oDAAMpQFH5HblHarr0g992u.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-25-fKdePRv4BFlskIqLgm1orjHL8S8EDL.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-26-ae7neByvGXhT1b2l9H0ECGaB8cpsjg.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-27-hD8wyFxAic1VlgPLM7iBGpsBlTmraC.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-28-q8sBwMG9q7WeV3TNo6pVIDfJ3dZ4fM.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-29-7T5oUMWy68jCPA58lk3G4G0AqUKAPz.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-30-CL6idgol8WLKGSrkwKb0H4DDrXvONL.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-31-nWAeVOaLhyGDZf9tF7jCrm8G3YVk9I.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-32-ueN0l8dFXJ7efrhu5jk68zePRVsX1x.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-33-rwP1AWJ33ILLGkifixPcNFIg9fiQ5r.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-34-mgBkPbXi21YRoxOQJf7AYlNXJyhUHV.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-35-v4CSqNSaaJKwv91QK9otEtrFcCPihu.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-36-L2dvhVFYQ2POCjWw37X4RnU2BmFShu.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-37-gIfrm3T909ulnMs4fbQz8PM2s4e230.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-38-44ZXPkoWAJHRq60VDEJGv8tbhHQbBY.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-39-dgmkydrfRxLDlUWaoMadTMwbzFnxKY.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-40-8w8xND5fuKsnd0ORT2omfccnK2ymKp.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-41-Yq4eMCrmlpr0HI0CSaWY5S3RECZbQk.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-42-efNIqArftTgtMJCWL7WZtFVhyOFsaz.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-43-8MBK2ySUC79y8XGZkcrqXcLUYEWdTL.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-44-jgk0T26vG6db5jtsv73pjypIm9XUdw.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-45-5gCvN3UhSO2zaoZ3s7zRGnI9AaqrKU.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-46-0VawmezNmSGml88wUfAEoEkSpSTdPS.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-47-HegWOsu6YUF9uHIF0ETqrAjzwpUGPK.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-48-yH0h7EV10dfZZtCFZYRfaV8bmP5jRv.jpg",
      "https://dtilc093idoxh0lh.public.blob.vercel-storage.com/Starter_1/Starter_book-49-WTTpWG3qLk1un33qLhzVvwqYrErhlt.jpg",
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
