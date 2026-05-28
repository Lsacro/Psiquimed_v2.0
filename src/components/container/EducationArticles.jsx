import EducationCardUp from '../cards/EducationCardUp';

const articles = [
  {
    id: 1,
    slug: 'como-manejar-la-ansiedad-diaria',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVv_PJ59oqU3IRVfo8_SrvYgoR4Y6w3PjFFIohL_6GhVXwFkv5A1VVQAKY0FD7cO_ySJNqeFjV8KrVSnvGoHo7IC3kMjH2l6Xf9W1CtKOsf24n2iruV_hZ-IzJPnrNfNVcK5I4ePGOxLqak-6lZK0pLgkUXWHqM0lFxFwSI5y6ukXyDlwZRNPy6m77JWh1jcDYgyZy_V4XHyL4Ncdg4MeC84FWU3hmuxe8tniBzqYqkCJObhwNEdCVPUfi8Cgj3hJAc1KxR5Eu51c',
    lectureTime: '5 MIN LECTURA',
    title: 'Cómo manejar la ansiedad diaria',
    body: 'Estrategias prácticas y basadas en evidencia para regular el sistema nervioso y recuperar el centro en momentos de estrés cotidiano.',
  },
  {
    id: 2,
    slug: 'importancia-del-sueno-en-la-salud-mental',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU5Okmd4BjolTP2XqyjnrRVSi_Q-nzMiy7CASqC06LuSOTDahm3AG3doKDGO0T44LbIAzW5RIlZ1iaYWHQ5r4NqD9nEB0OCWhCWvT_M2sEAX7zGqaBmfeLXkFGGenKCEXaZ75ThuFjqSL-IGIAwzgr7xj7SLsN3vftZLqViNNRzdKLGe0R4jGm3kwaj_Zbz8P0ckB3Ticzi61pR0qMDM8K3U7MVN4rUnUwaB8Qt32HMQL5Pls0gRTLVS-Bv1Nvd8EBwO9TlLOLWds',
    lectureTime: '8 MIN LECTURA',
    title: 'La importancia del sueño en la salud mental',
    body: 'Descubre cómo el descanso nocturno profundo es fundamental para la regulación emocional y la consolidación de la memoria.',
  },
  {
    id: 3,
    slug: 'comunicacion-asertiva-en-familia',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5T3euONryo1G0wwS3YOg18VVPCdQ5lzMVI3FdmFGkCkcNLpoQWz9dm_wVFbCy5yKVwjpwg0VD-yFOCseD7WXYcx9k88Iw87_EpTh17nINdBK6zG-TWAWhxVCl1czRxqxFg_7p2YGsVAGNXd6T7CgK0i3HcslL82npcox7rUENL_5ijjibWs0be-1uiDNxAx-bb5Wv6u4wQ_O-2JKCOSQZmfo7b_F6vWJO8VTS45AReQBw7kEV5zD_cZEGUhF2UhLmFhqy7bJdRf4',
    lectureTime: '6 MIN LECTURA',
    title: 'Comunicación asertiva en familia',
    body: 'Herramientas para establecer límites sanos y expresar necesidades de manera clara y empática dentro del núcleo familiar.',
  },
];

export default function EducationArticles() {
  return (
    <>
      <section className='max-w-container-max mx-auto px-6 pb-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter'>
          {articles.map((article) => (
            <EducationCardUp
              key={article.id}
              src={article.src}
              lectureTime={article.lectureTime}
              title={article.title}
              body={article.body}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <section className='max-w-container-max mx-auto px-6 pb-xl'>
        <div className='bg-primary-fixed/30 rounded-xl p-lg flex flex-col md:flex-row items-center gap-gutter border border-primary-fixed'>
          <div className='w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0'>
            <span className='material-symbols-outlined !text-3xl'>info</span>
          </div>
          <div>
            <h4 className='font-headline-md text-headline-md text-primary mb-xs'>Aviso Importante</h4>
            <p className='font-body-md text-body-md text-on-surface-variant'>
              La información proporcionada en esta sección tiene un propósito puramente educativo y no pretende diagnosticar, tratar, curar o prevenir
              ninguna enfermedad. Estos artículos{' '}
              <strong>no reemplazan la evaluación, diagnóstico o tratamiento de un profesional de la salud mental calificado</strong>. Si estás
              experimentando una crisis, por favor contacta a emergencias inmediatamente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
