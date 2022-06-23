import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text:
        'O sistema ajudou muito os centros de Maputo, Beira e Pemba. Muito obrigrada pelo excelente trabalho',
      username: 'IFPELAC',
      name: 'Dra Celia',
    },
    {
      image: testimonialsImage2,
      text:
        'Muito obrigado pelo seu serviço gentil e eficiente. Eu já recomendei e definitivamente continuarei a recomendar seus serviços para outras pessoas no futuro.',
      username: 'Cooperação Italiana',
      name: 'Anna Romboli',
    },
  ],
  
  [
    {
      image: testimonialsImage1,
      text:
        'O sistema ajudou muito os centros de Maputo, Beira e Pemba. Muito obrigrada pelo excelente trabalho',
      username: 'IFPELAC',
      name: 'Dra Celia',
    },
    {
      image: testimonialsImage2,
      text:
        'Muito obrigado pelo seu serviço gentil e eficiente. Eu já recomendei e definitivamente continuarei a recomendar seus serviços para outras pessoas no futuro.',
      username: 'Cooperação Italiana',
      name: 'Anna Romboli',
    },
  ],
  
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="O que o cliente diz sobre nós"
        text="Depoimento do cliente"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
