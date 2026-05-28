export default function ImgCard() {
  return (
    <>
      <section className='pb-xl px-6 max-w-container-max mx-auto'>
        <div className='rounded-xl overflow-hidden indigo-shadow-1 h-[400px] relative bg-surface-variant border border-outline-variant'>
          <div className='absolute inset-0 flex items-center justify-center bg-surface-container text-outline font-body-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7974143991983!2d-78.49268579999999!3d-0.1854796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a39e43cd75fd%3A0x8c4140fcdf6a0ce1!2sPSIQUIMED!5e0!3m2!1ses-419!2sec!4v1779983528198!5m2!1ses-419!2sec'
              width='100%'
              height='100%'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
