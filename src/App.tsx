import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import CompanyRoute from './pages/company/CompanyRoute'
import BusinessRoute from './pages/business/BusinessRoute'
import ESGRoute from './pages/esg/ESGRoute'
import ReferenceRoute from './pages/reference/ReferenceRoute'
import SupportPage from './pages/support/SupportPage'
import CompactLayout from './layouts/CompactLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지는 단독 렌더링 */}
        <Route path="/" element={<MainPage />} />

        {/* 공통 레이아웃을 사용하는 그룹 */}
        <Route element={<CompactLayout />}>
          <Route path="/company/*" element={<CompanyRoute />} />
          <Route path="/business/*" element={<BusinessRoute />} />
          <Route path="/esg/*" element={<ESGRoute />} />
          <Route path="/reference/*" element={<ReferenceRoute />} />
          <Route path="/support/*" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App 