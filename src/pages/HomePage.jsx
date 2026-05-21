import EducationContainer from '../components/container/EducationContainer';
import ServicesContainer from '../components/container/ServicesContainer';
import DoctorSlider from '../components/hero/DoctorSlider';
import HeroSlider from '../components/hero/HeroSlider';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <DoctorSlider />
      <ServicesContainer />
      <EducationContainer />
    </>
  );
}

export default HomePage;
