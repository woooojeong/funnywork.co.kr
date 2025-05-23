import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  section: string;
};

const NAV_CONFIG: Record<string, {
  title: string;
  items: {
    name: string;
    path: string;
    children?: { name: string; path: string }[];
  }[];
}> = {
  company: {
    title: '회사소개',
    items: [
      { name: '회사소개', path: '/company/about' },
      { name: '연혁', path: '/company/history' },
      { name: 'CEO', path: '/company/ceo' }
    ]
  },
  business: {
    title: '사업분야',
    items: [
      { name: 'IT서비스', path: '/business/itservice' },
      { name: 'AI 시스템', path: '/business/aisystem' }
    ]
  },
  esg: {
    title: 'ESG경영',
    items: [
      { name: 'ESG 소개', path: '/esg' },
      {
        name: 'ESG 목록',
        path: '/esg/list',
        children: [
          { name: '환경', path: '/esg/list/environment' },
          { name: '사회', path: '/esg/list/social' },
          { name: '지배구조', path: '/esg/list/governance' }
        ]
      },
      { name: '제보하기', path: '/esg/report' }
    ]
  },
  reference: {
    title: '레퍼런스',
    items: [
      { name: '레퍼런스', path: '/reference' }
    ]
  },
  support: {
    title: '고객지원',
    items: [
      { name: 'Contact Us', path: '/support' }
    ]
  }
};

export default function SideNav({ section }: Props) {
  const nav = NAV_CONFIG[section];
  const location = useLocation();
  const navigate = useNavigate();
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const matched = nav?.items.find(item =>
      item.children?.some(child => location.pathname === child.path)
    );
    if (matched) setOpenItem(matched.name);
  }, [location.pathname, nav]);

  if (!nav) return null;

  const handleItemClick = (item: any) => {
    const isCurrentlyOpen = openItem === item.name;
    const hasChildren = !!item.children;

    if (isCurrentlyOpen) {
      setOpenItem(null); // 접기
    } else {
      setOpenItem(item.name); // 펼치기
      if (hasChildren) {
        navigate(item.children[0].path); // 처음 펼칠 때만 이동
      } else {
        navigate(item.path);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg mx-auto pt-28">
      <h3 className="bg-indigo-900 text-white text-center text-lg font-bold px-4 py-5 rounded-t-lg">
        {nav.title}
      </h3>
      <ul>
        {nav.items.map((item, idx) => {
          const isOpen = openItem === item.name;
          return (
            <div key={item.path}>
              {idx > 0 && <div className="my-3 mx-auto border-t border-gray-300 w-4/5" />}
              <button
                onClick={() => handleItemClick(item)}
                className={`flex justify-between items-center w-full px-4 py-2 text-sm font-medium rounded transition border
                  ${isOpen ? 'bg-blue-200 text-black font-semibold border-blue-300' : 'text-gray-700 hover:bg-blue-100 border-transparent'}`}
              >
                <span>{item.name}</span>
                {item.children && <span className="ml-2">{isOpen ? '∧' : '∨'}</span>}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && item.children && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 space-y-1"
                  >
                    {item.children.map((sub) => (
                      <li key={sub.path}>
                        <button
                          onClick={() => navigate(sub.path)}
                          className={`block w-full px-4 py-2 text-sm border rounded transition text-left
                            ${location.pathname === sub.path ? 'border-blue-500 font-semibold text-black bg-blue-50' : 'text-gray-600 hover:bg-blue-50 border-transparent'}`}
                        >
                          • {sub.name}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </ul>
    </div>
  );
}