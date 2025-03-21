
import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="text-foreground p-1 rounded-full hover:bg-muted transition-colors duration-200"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu size={24} />
        </button>

        <Link to="/" className="text-foreground font-medium text-lg transition-opacity duration-200 hover:opacity-80">
          Book Reader
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative hidden sm:block">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search books..."
            className="pl-10 pr-4 py-2 rounded-full bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-52 lg:w-64 transition-all duration-200"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
