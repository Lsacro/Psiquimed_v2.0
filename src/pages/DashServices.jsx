import DashNavbar from '../components/common/DashNavbar';
import DashHorizontalbar from '../components/container/DashHorizontalbar';
import DashServicesContainer from '../components/container/DashServicesContainer';

export default function DashServices() {
  return (
    <>
      <div className='bg-background text-on-background font-body-md text-body-md antialiased flex h-screen overflow-hidden'>
        <DashNavbar activePage='Servicios' />

        <div className='flex-1 md:ml-64 flex flex-col h-screen overflow-y-auto bg-surface-container-lowest'>
          <DashHorizontalbar />
          <DashServicesContainer />
        </div>
      </div>
    </>
  );
}
