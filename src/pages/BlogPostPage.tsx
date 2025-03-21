import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import blogPosts from '@/data/blog-posts';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Markdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={() => {}} sidebarOpen={false} />
      
      <main className="pt-24 pb-12">
        <article className="max-w-3xl mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="flex items-center gap-4 mb-8">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-medium">{post.author.name}</h3>
              <div className="text-sm text-muted-foreground">
                <span>{post.author.role}</span>
                <span className="mx-2">•</span>
                <time>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</time>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Markdown>{post.content}</Markdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage; 