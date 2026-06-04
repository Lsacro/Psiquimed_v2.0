import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import HomePage from './pages/HomePage';
import Professionals from './pages/Professionals';
import Services from './pages/Services';

import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';
import Education from './pages/Education';
import ScrollToTop from './components/common/ScrollToTop';
import Article from './pages/Article';
import DashboradLayout from './layouts/DashboardLayout';
import MainDashboard from './pages/MainDashboard';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/professionals' element={<Professionals />} />
          <Route path='/services' element={<Services />} />
          <Route path='/education' element={<Education />} />
          <Route path='/articulo/:slug' element={<Article />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route element={<DashboradLayout />}>
          <Route path='/dashboard' element={<MainDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
