import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SalesPage from './pages/SalesPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import EcommercePage from './pages/industries/EcommercePage';
import HealthcarePage from './pages/industries/HealthcarePage';
import InsurancePage from './pages/industries/InsurancePage';
import RecruitmentPage from './pages/industries/RecruitmentPage';
import HospitalityPage from './pages/industries/HospitalityPage';
import BusinessSetupPage from './pages/industries/BusinessSetupPage';
import Footer from './components/Footer/Footer';
import LeadForm from './components/Forms/LeadForm';
import { FormProvider } from './context/FormContext';

export default function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <div className="flex flex-col min-h-screen bg-[#0B0B10]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<SalesPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/industries/ecommerce" element={<EcommercePage />} />
              <Route path="/industries/healthcare" element={<HealthcarePage />} />
              <Route path="/industries/insurance" element={<InsurancePage />} />
              <Route path="/industries/recruitment" element={<RecruitmentPage />} />
              <Route path="/industries/hospitality" element={<HospitalityPage />} />
              <Route path="/industries/business-setup" element={<BusinessSetupPage />} />
            </Routes>
          </main>
          <Footer />
          <LeadForm />
        </div>
      </FormProvider>
    </BrowserRouter>
  );
}