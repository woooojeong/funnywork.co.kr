import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const navItems = {
  '회사소개': ['회사소개', '연혁', 'CEO'],
  '사업분야': ['IT 서비스', 'AI'],
  'ESG 경영': ['ESG 목록', '제보하기'],
  '레퍼런스': [],
  '고객지원': ['CONTACT US'],
};

const getPath = (section: string, item: string) => {
  const paths: { [key: string]: { [key: string]: string } } = {
    '회사소개': {
      '회사소개': '/company/about',
      '연혁': '/company/history',
      'CEO': '/company/ceo'
    },
    '사업분야': {
      'IT 서비스': '/business/it-service',
      'AI': '/business/ai'
    },
    'ESG 경영': {
      'ESG 목록': '/esg/list',
      '제보하기': '/esg/report'
    },
    '레퍼런스': {},
    '고객지원': {
      'CONTACT US': '/support/contact'
    }
  };
  return paths[section]?.[item] || `/${section.toLowerCase()}`;
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 약간의 지연을 주어 페이지 전환 후 스크롤이 동작하도록 함
    setTimeout(scrollToTop, 100);
  };

  return (
    <footer className="bg-white border-t relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-navy-800 transition-colors shadow-lg z-50"
        aria-label="맨 위로 이동"
      >
        <FaArrowUp size={20} />
      </button>

      <div className="container mx-auto px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start py-8 md:gap-x-12">
          {/* Logo and Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <img
                src="/images/funnylogo.png"
                alt="FunnyWork Logo"
                className="h-10"
              />
              <img
                src="/images/SK_PBP_logo.png"
                alt="SK PBP Logo"
                className="w-40 h-auto object-contain"
              />
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>(주)퍼니웍 | 서울 마포구 마포대로, 신화빌딩 5층</p>
              <p>T. 02-394-1416 F. 02-394-1417</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 w-1/2 md:pl-12 text-left">
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key} className="min-w-0 max-w-[120px] w-full">
                <h3 className="text-gray-900 font-bold mb-2">{key}</h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        to={getPath(key, item)}
                        onClick={handleNavClick}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-sm text-gray-600 text-center">
          Copyright © {new Date().getFullYear()} FUNNYWORK CO.,LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 