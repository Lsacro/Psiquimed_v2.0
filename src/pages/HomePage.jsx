import EducationHome from '../components/container/EducationHome';
import ServicesHome from '../components/container/ServicesHome';
import DoctorSlider from '../components/hero/DoctorSlider';
import HeroSlider from '../components/hero/HeroSlider';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <DoctorSlider />
      <ServicesHome />
      <EducationHome />
    </>
  );
}

export default HomePage;
