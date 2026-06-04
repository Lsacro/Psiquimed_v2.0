import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import WhatsappLink from '../components/common/WhatsappLink';
import Footer from '../components/common/Footer';
import MobileNavbar from '../components/common/MobileMenu';

export default function MainLayout() {
  return (
    <div className='bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container'>
      <Navbar />
      <MobileNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsappLink />
    </div>
  );
}
