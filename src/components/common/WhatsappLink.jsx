import { NavLink } from 'react-router-dom';

const WhatsappLink = () => {
  return (
    <>
      <NavLink
        className='fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center z-50 shadow-lg shadow-green-200 dark:shadow-none hover:scale-110 transition-transform active:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2 '
        to='https://wa.me/593998964126'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp' />
      </NavLink>
    </>
  );
};

export default WhatsappLink;
