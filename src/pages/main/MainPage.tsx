import MainCarousel from '../../components/MainCarousel';
import BusinessSection from '../../components/BusinessSection';
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