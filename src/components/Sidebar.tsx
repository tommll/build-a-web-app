
import React from 'react';
import { BookOpen, BookType, Library } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  activeCategory?: string;
}

const categories = [
  { id: 'all', name: 'All Books', icon: Library },
  { id: 'fiction', name: 'Fiction', icon: BookOpen },
  { id: 'nonfiction', name: 'Non-Fiction', icon: BookType },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeCategory = 'all' }) => {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-full bg-sidebar pt-16 transition-all duration-300 ease-in-out border-r border-border shadow-sm",
        isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full sm:translate-x-0 sm:w-16"
      )}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="px-4 py-3">
          <h2 className={cn(
            "font-medium transition-all duration-300 text-sidebar-foreground",
            isOpen ? "text-base opacity-100" : "text-xs opacity-0 sm:opacity-0"
          )}>
            Library
          </h2>
        </div>
        
        <nav className="mt-2 flex-1">
          <ul className="space-y-1 px-2">
            {categories.map((category) => {
              const Icon = category.icon;
              
              return (
                <li key={category.id}>
                  <Link
                    to={category.id === 'all' ? '/' : `/category/${category.id}`}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md transition-all duration-200",
                      activeCategory === category.id
                        ? "bg-sidebar-accent text-sidebar-primary font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <span className="inline-flex">
                      <Icon size={20} className={isOpen ? "mr-3" : "mx-auto"} />
                    </span>
                    <span 
                      className={cn(
                        "transition-all duration-300",
                        isOpen ? "opacity-100" : "opacity-0 w-0 hidden sm:hidden"
                      )}
                    >
                      {category.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
