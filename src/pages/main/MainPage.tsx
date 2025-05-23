import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainCarousel from './MainCarousel';
import BusinessSection from './BusinessSection';

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1 pt-16 text-white">
        <MainCarousel />
        <BusinessSection />
        </div>
      </div>
      <Footer />
    </div>
  );
} 