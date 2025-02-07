import React, { useEffect, useState } from 'react'
import './trend.css'

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import TrendCard from '../components/TrendCard'

const apiKey = import.meta.env.VITE_APP_API_KEY;

function Trend() {
    const [slides, setSlides] = useState([])

    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
          .then(res => res.json())
          .then(data => {
            setSlides(data.results);
          })
          .catch(e => console.log(e.message));
      };
    
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
        <section id="trending" className='trend'>
            <div className="container-fluild">
                <div className="row">
                    <h4 className="section-title">Coming Soon</h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            }
                        }}     
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="trendSwiper" 
                    >
                        {slides && slides.length > 0 &&
                        slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <TrendCard slide={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Trend