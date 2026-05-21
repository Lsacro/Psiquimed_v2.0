import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import HomePage from './pages/HomePage';
import Professionals from './pages/Professionals';
import Services from './pages/Services';
import Education from './pages/Contact';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/professionals' element={<Professionals />} />
          <Route path='/services' element={<Services />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
