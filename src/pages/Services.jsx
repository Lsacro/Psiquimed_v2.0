import BenefitsContainer from '../components/container/BenefitsContainer';
import ServiceContainer from '../components/container/ServicesContainer';
import ServiceHero from '../components/hero/ServiceHero';

function Services() {
  return (
    <>
      <ServiceHero />
      <ServiceContainer />
      <BenefitsContainer />
    </>
  );
}

export default Services;
