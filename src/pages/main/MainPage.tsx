import MainCarousel from './MainCarousel';
import BusinessSection from './BusinessSection';
import SideNav from '../../components/SideNav';

export default function MainPage() {
  return (
    <div className="flex">
      <div className="flex-1 pt-16 text-white">
      <MainCarousel />
      <BusinessSection />
      </div>
    </div>
  );
} 