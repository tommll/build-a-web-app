import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import blogPosts from '@/data/blog-posts';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={() => {}} sidebarOpen={false} />
      
      <main className="pt-24 pb-12 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-64 h-48 overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{post.author.name}</span>
                          <span>•</span>
                          <time>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</time>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 