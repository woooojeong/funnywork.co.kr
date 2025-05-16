import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import HistoryPage from './HistoryPage';
import CEOPage from './CEOPage';

export default function CompanyPage() {
  return (
    <Routes>
      <Route path="about" element={<AboutPage />} />
      <Route path="history" element={<HistoryPage />} />
      <Route path="ceo" element={<CEOPage />} />
    </Routes>
  );
} 