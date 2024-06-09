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
        >
            {
                slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <img src={`https://image.tmdb.org/t/p/original${slide.poster_path}`} alt="Preview Image" onClick={() => {
                            slideChange(slide.backdrop_path, slide)
                        } }/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    
    );
    }

export default MovieCarousel