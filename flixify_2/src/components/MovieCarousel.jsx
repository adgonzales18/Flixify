import React from 'react';
import './movieCarousel.css';

//import carousel from swiper react component
import { Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow} from 'swiper/modules';


function MovieCarousel({slides, slideChange}) {
    if(!Array.isArray(slides)) {
        return null;
    }
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="movieSwiper"
        onSlideChange={(swiper) => {
            const currentSlide = swiper.slides[swiper.activeIndex];
            const backdropPath = currentSlide.getAttribute('data-backdrop');
            const movie = slides[swiper.activeIndex];

            console.log("Slide Change to :", movie.title);
            slideChange(backdropPath, movie);
        }}
        >
            {
                slides.map((slide) => (
                    <SwiperSlide key={slide.id} data-backdrop={slide.backdrop_path}>
                        <img src={`https://image.tmdb.org/t/p/original${slide.poster_path}`} 
                        alt="Preview Image" 
                        onClick={() => {
                        console.log("Image Clicked: ", slide.title);
                        slideChange(slide.backdrop_path, slide);
                        }}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    
    );
    }

export default MovieCarousel