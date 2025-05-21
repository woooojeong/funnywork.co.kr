import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_CONFIG = {
  '/company': {
    title: '회사소개',
    items: [
      { name: '회사소개', path: '/company/about' },
      { name: '연혁', path: '/company/history' },
      { name: 'CEO', path: '/company/ceo' }
    ]
  },
  '/business': {
    title: '사업분야',
    items: [
      { name: 'IT서비스', path: '/business/it-service' },
      { name: 'AI', path: '/business/ai' }
    ]
  },
  '/esg': {
    title: 'ESG경영',
    items: [
      { name: 'ESG 소개', path: '/esg' },
      { name: 'ESG 목록', path: '/esg/list' },
      { name: '제보하기', path: '/esg/report' }
    ]
  },
  '/reference': {
    title: '레퍼런스',
    items: [
      { name: '레퍼런스', path: '/reference' }
    ]
  },
  '/support': {
    title: '고객지원',
    items: [
      { name: 'CONTACT US', path: '/support/contact' }
    ]
  }
};

const getSection = (pathname) => {
  const keys = Object.keys(NAV_CONFIG).sort((a, b) => b.length - a.length);
  return keys.find(key => pathname.startsWith(key));
};

const SideNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const sectionKey = getSection(currentPath);
  const nav = NAV_CONFIG[sectionKey] || null;

  if (!nav) return null;

  return (
    <aside className="relative z-30">
      <div className="absolute left-0 top-24 ml-12">
        <div className="w-64 rounded-xl shadow-2xl bg-white border border-gray-200 overflow-hidden">
          {/* 상단 타이틀 */}
          <div className="bg-indigo-700 text-white text-xl font-bold px-6 py-5 relative">
            {nav.title}
            {/* 왼쪽 포인트 바 */}
            <span className="absolute left-0 top-0 h-full w-3 bg-[#1de9ff] rounded-tr-xl rounded-br-xl"></span>
          </div>
          {/* 메뉴 목록 */}
          <ul>
            {nav.items.map(item => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={
                      `w-full text-left px-6 py-4 border-b border-gray-100 font-semibold transition ` +
                      (isActive
                        ? 'bg-[#1de9ff] text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-50')
                    }
                  >
                    {item.name}
                    {isActive && (
                      <span className="float-right text-lg font-bold">›</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideNav; 