import DashNavbar from '../components/common/DashNavbar';

export default function DashboradLayout() {
  return (
    <>
      <div className='bg-background text-on-background font-body-md text-body-md antialiased flex h-screen overflow-hidden'>
        <DashNavbar />
      </div>
    </>
  );
}
