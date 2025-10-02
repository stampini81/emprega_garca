import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <div className='embla overflow-hidden relative'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container flex'>
          <div
            className='embla__slide flex-[0_0_100%] h-screen relative bg-center bg-cover'
            style={{ backgroundImage: `url('/banner-1.jpg')` }}
          >
            <div className='absolute text-white w-[40%] backdrop-blur-sm h-full flex flex-col justify-center items-start pl-20'>
              <h3 className='text-[70px] font-extrabold mb-5'>
                O Emprega Garça está de cara nova
              </h3>
              <p className='text-xl font-bold'>
                Mais moderno e fácil para você encontrar oportunidades e
                conquistar seu espaço no mercado de trabalho
              </p>
            </div>
          </div>{' '}
          <div
            className='embla__slide flex-[0_0_100%] h-screen relative bg-center bg-cover'
            style={{ backgroundImage: `url('/banner-2.jpg')` }}
          >
            <div className='absolute text-white w-[40%] backdrop-blur-sm h-full flex flex-col justify-center items-start pr-20 right-0'>
              <h3 className='text-[68px] font-extrabold mb-5'>
                Consulte VAGAS disponíveis
              </h3>
              <p className='text-xl font-bold'>
                Faça seu cadastro e candidata-se de forma simples e rápida.
              </p>
            </div>
          </div>
          <div
            className='embla__slide flex-[0_0_100%] h-screen relative bg-center bg-cover'
            style={{ backgroundImage: `url('/banner-3.jpg')` }}
          >
            <div className='absolute text-white w-[40%] backdrop-blur-sm h-full flex flex-col justify-center items-start pl-24'>
              <h3 className='text-[68px] font-extrabold mb-5'>
                Conectando Empresas e Trabalhadores
              </h3>
              <p className='text-xl font-bold'>
                Empresas locais podem anunciar oportunidades e cidadãos
                acompanham novas vagas em tempo real.
              </p>
            </div>
          </div>{' '}
        </div>
        <div className='absolute bottom-6 w-full flex justify-center gap-3 z-20'>
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === index
                  ? 'w-12 bg-blue-600'
                  : 'w-12 bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        className='embla__prev absolute top-1/2 left-5 z-10 text-white bg-blue-500 rounded-full p-3'
        onClick={scrollPrev}
      >
        <ChevronLeft />
      </button>
      <button
        className='embla__next absolute top-1/2 right-5 z-10 text-white bg-blue-500 rounded-full p-3'
        onClick={scrollNext}
      >
        <ChevronRight />
      </button>
    </div>
  );
};
