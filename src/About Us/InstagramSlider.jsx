import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
import InstagramIcon from '@mui/icons-material/Instagram';

const images = [
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
    'https://gleeful-eclair-61ad48.netlify.app/assets/img/gallery/gallery_4_5.jpg',
];

const InstagramSlider = () => {
    return (
       <div className='mb-25'>
         <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
                640: { slidesPerView: 3.3 },
                1024: { slidesPerView: 4.5 },
            }}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 3000 }}
            modules={[FreeMode, Autoplay]}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src={img}
                            alt={`Instagram post ${index + 1}`}
                            className="w-full h-full object-cover duration-600 transform group-hover:scale-135"
                        />
                        <a
                            href="https://instagram.com/dummy-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 text-white rounded-full p-1 transition"
                        >
                            <InstagramIcon fontSize="small" />
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
       </div>
    );
};

export default InstagramSlider;
