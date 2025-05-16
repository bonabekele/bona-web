import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-white">
            Bona Bekele
          </NavLink>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop navigation - Reordered as requested */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white/80 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile navigation - Reordered as requested */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;