import { Routes, Route } from 'react-router-dom';
import ESGIntro from './ESGIntro';
import ListPage from './ListPage';
import ReportPage from './ReportPage';

export default function ESGRoute() {
  return (
    <Routes>
      <Route path="/" element={<ESGIntro />} />
      <Route path="list" element={<ListPage />} />
      <Route path="report" element={<ReportPage />} />
    </Routes>
  );
}