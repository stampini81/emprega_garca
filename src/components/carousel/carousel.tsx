import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide relative h-full w-screen bg-[url("/banner-1.jpg")] bg-center bg-cover '>
            <div className='absolute text-white w-[40%] backdrop-blur-sm grayscale-[40%] h-full flex flex-col justify-center items-center pl-20'>
              <h3 className='text-[70px] font-extrabold mb-5'>
                O Emprega Garça está de cara nova
              </h3>
              <p className='text-2xl font-medium'>
                Mais moderno e fácil para você encontrar oportunidades e
                conquistar seu espaço no mercado de trabalho
              </p>
            </div>
          </div>
          {/* <div className='embla__slide'>Slide 2</div>
          <div className='embla__slide'>Slide 3</div> */}
        </div>
      </div>

      {/* <button className='embla__prev' onClick={scrollPrev}>
        Prev
      </button>
      <button className='embla__next' onClick={scrollNext}>
        Next
      </button> */}
    </div>
  );
};
