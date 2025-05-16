import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/main/MainPage'
import CompanyPage from './pages/company/CompanyPage'
import BusinessPage from './pages/business/BusinessPage'
import ESGPage from './pages/esg/ESGPage'
import ReferencePage from './pages/reference/ReferencePage'
import SupportPage from './pages/support/SupportPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/company/*" element={<CompanyPage />} />
            <Route path="/business/*" element={<BusinessPage />} />
            <Route path="/esg/*" element={<ESGPage />} />
            <Route path="/reference/*" element={<ReferencePage />} />
            <Route path="/support/*" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 