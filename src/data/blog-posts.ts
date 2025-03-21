import { Author } from '@/types/blog';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  tags: string[];
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Cambridge English",
    slug: "getting-started-with-cambridge-english",
    excerpt: "A comprehensive guide to beginning your journey with Cambridge English qualifications and materials.",
    content: `
      # Getting Started with Cambridge English

      Cambridge English qualifications are recognized worldwide as proof of English language ability. Whether you're studying for academic purposes, career advancement, or personal growth, Cambridge English provides structured learning paths and reliable assessments.

      ## Why Choose Cambridge English?

      - **Global Recognition**: Universities and employers worldwide accept Cambridge qualifications
      - **Comprehensive Assessment**: Tests all language skills - reading, writing, listening, and speaking
      - **Clear Progress Path**: From beginner (A1) to advanced (C2) levels
      - **Quality Materials**: Well-designed coursebooks and supplementary resources

      ## How to Begin

      1. Take a placement test to determine your current level
      2. Choose the appropriate qualification path
      3. Get recommended study materials
      4. Create a study schedule
      5. Practice regularly with authentic materials

      Remember, language learning is a journey. Take it one step at a time and celebrate your progress along the way.
    `,
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600",
    author: {
      id: "author-1",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      role: "English Language Specialist"
    },
    publishedAt: "2024-03-15",
    tags: ["beginner", "guide", "cambridge", "english"]
  },
  {
    id: "2",
    title: "Advanced Grammar Tips for IELTS Success",
    slug: "advanced-grammar-tips-for-ielts-success",
    excerpt: "Master these essential grammar concepts to improve your IELTS writing and speaking scores.",
    content: `
      # Advanced Grammar Tips for IELTS Success

      Mastering advanced grammar is crucial for achieving high scores in IELTS. This guide covers key grammatical structures and how to use them effectively in your exam.

      ## Key Grammar Areas

      ### Complex Sentences
      Learn to combine ideas using subordinate clauses and conjunctions.

      ### Conditional Structures
      Master all types of conditionals for discussing hypothetical situations.

      ### Advanced Tenses
      Understand perfect and continuous aspects for precise time expression.

      ## Practice Tips

      - Write daily using target structures
      - Record yourself speaking
      - Get feedback from qualified teachers
      - Review and revise regularly
    `,
    coverImage: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1600",
    author: {
      id: "author-2",
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      role: "IELTS Examiner"
    },
    publishedAt: "2024-03-10",
    tags: ["advanced", "grammar", "ielts", "tips"]
  }
];

export default blogPosts; 