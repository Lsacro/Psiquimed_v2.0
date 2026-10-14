import DashNavbar from '../components/common/DashNavbar';
import DashboardContent from '../components/container/DashboardContent';
import DashHorizontalbar from '../components/container/DashHorizontalbar';

export default function MainDashboard() {
  return (
    <>
      <div className='bg-background text-on-background font-body-md text-body-md antialiased flex h-screen overflow-hidden'>
        <DashNavbar activePage='Dashboard' />

        <div className='flex-1 md:ml-64 flex flex-col h-screen overflow-y-auto bg-surface-container-lowest'>
          <DashHorizontalbar />
          <DashboardContent />
        </div>
      </div>
    </>
  );
}
