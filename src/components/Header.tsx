import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type NavItems = {
  [key: string]: {
    path: string;
    items: Array<{
      name: string;
      path: string;
    }>;
  };
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPage = location.pathname === '/';

  const navItems: NavItems = {
    '회사소개': {
      path: '/company/about',
      items: [
        { name: '회사소개', path: '/company/about' },
        { name: '연혁', path: '/company/history' },
        { name: 'CEO', path: '/company/ceo' }
      ]
    },
    '사업분야': {
      path: '/business',
      items: [
        { name: 'IT서비스', path: '/business/it-service' },
        { name: 'AI', path: '/business/ai' }
      ]
    },
    'ESG경영': {
      path: '/esg',
      items: [
        { name: 'ESG목록', path: '/esg/list' },
        { name: '제보하기', path: '/esg/report' }
      ]
    },
    '레퍼런스': {
      path: '/reference',
      items: []
    },
    '고객지원': {
      path: '/support',
      items: [
        { name: 'CONTACT US', path: '/support/contact' }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    if (isMainPage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isMainPage, location.pathname]);

  const getPath = (key: string) => {
    const section = navItems[key];
    return section.path;
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setShowDropdown(false);
    setIsOpen(false);
    
    if (path === location.pathname) {
      // Force re-render by navigating to the same route and scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(path, { replace: true });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || showDropdown || !isMainPage
      ? 'bg-white text-gray-800 border-b' 
      : 'bg-transparent text-white'
  }`;

  const linkClass = `py-5 transition-colors text-base font-medium whitespace-nowrap ${
    isScrolled || showDropdown || !isMainPage
      ? 'hover:text-blue-600'
      : 'hover:text-blue-300'
  }`;

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className={headerClass}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="h-10" onClick={(e) => handleNavigation('/', e)}>
            <img
              src="/images/funnylogo.png"
              alt="FunnyWork Logo"
              className={`h-full w-auto ${isScrolled || showDropdown || !isMainPage ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-start mr-10"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex justify-end space-x-16 w-full ">
              <a
                href="/"
                className={`${linkClass} flex items-center font-bold text-[#1de9ff]`}
                onClick={(e) => handleNavigation('/', e)}
              >
                <span className="w-2 h-2 rounded-full bg-[#1de9ff] mr-2 inline-block align-middle"></span>
                Home
              </a>
              {Object.entries(navItems).map(([key, section]) => (
                <a
                  key={key}
                  href={getPath(key)}
                  className={`${linkClass} ${location.pathname === getPath(key) ? 'text-blue-600' : ''}`}
                  onClick={(e) => handleNavigation(getPath(key), e)}
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled || showDropdown || !isMainPage ? 'text-gray-800' : 'text-white'}`}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Dropdown Panel */}
        {showDropdown && (
          <div 
            className="hidden md:block absolute left-0 right-0 bg-white border-t shadow-lg"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="container mx-auto px-1">
              <div className="flex justify-end py-8">
                <div className="flex justify-end space-x-10 w-full">
                  {Object.entries(navItems).map(([key, section]) => (
                    <div key={key} className="min-w-[60px]">
                      <ul className="space-y-3 mr-10">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            <a
                              href={item.path}
                              className="text-sm text-center text-gray-600 hover:text-blue-600 transition-colors block whitespace-nowrap"
                              onClick={(e) => handleNavigation(item.path, e)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white">
            {Object.entries(navItems).map(([key, section]) => (
              <div key={key} className="border-t">
                <a 
                  href={getPath(key)} 
                  className="block px-4 py-3 font-medium text-right"
                  onClick={(e) => handleNavigation(getPath(key), e)}
                >
                  {key}
                </a>
                {section.items.length > 0 && (
                  <div className="bg-gray-50">
                    {section.items.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-8 py-2 text-sm hover:text-blue-600 text-right"
                        onClick={(e) => handleNavigation(item.path, e)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;