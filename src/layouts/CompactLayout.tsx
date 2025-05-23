import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function CompactLayout() {
  const location = useLocation();

  // URL에서 최상위 path 추출
  const section = location.pathname.split('/')[1] || 'main';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 max-w-7xl w-full mx-auto ">
        <aside className="w-48 shrink-0 p-4">
          <SideNav section={section} />
        </aside>
        <main className="flex-1 p-4 bg-white">
          <Outlet /> 
        </main>
      </div>
      <Footer />
    </div>
  );
}
