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
import MainDashboard from './pages/MainDashboard';
import Login from './pages/Login';
import DashDoctors from './pages/DashDoctors';
import PrivacyPolitics from './pages/PrivacyPolitics';
import DashServices from './pages/DashServices';

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
          <Route path='/privacy' element={<PrivacyPolitics />} />
        </Route>
        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<MainDashboard />} />
          <Route path='/dashboard/doctors' element={<DashDoctors />} />
          <Route path='/dashboard/services' element={<DashServices />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
