import React, { useState, useEffect } from 'react';
import { Dialog, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
    "/assets/img/gallery/gallery_1_1.jpg",
    "/assets/img/gallery/gallery_1_2.jpg",
    "/assets/img/gallery/gallery_1_3.jpg",
    "/assets/img/gallery/gallery_1_4.jpg",
    "/assets/img/gallery/gallery_1_5.jpg",
    "/assets/img/gallery/gallery_1_6.jpg",
    "/assets/img/gallery/gallery_1_7.jpg",
];

const RecentGallery = () => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [swiperKey, setSwiperKey] = useState(0);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        setOpen(true);
    };

    useEffect(() => {
        if (open) {
            setTimeout(() => setSwiperKey(prev => prev + 1), 50);
        }
    }, [open]);

    return (
        <div className="text-center my-10 px-4">
            <h2 className="text-xl md:text-2xl font-cursive">Make Your Tour More Pleasure</h2>
            <h1 className="text-2xl md:text-4xl font-bold mt-2 mb-8">Recent Gallery</h1>

            {/* Responsive layout */}
            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {[
                    [[0]], // column 1
                    [1, 2], // column 2
                    [[3, true]], // column 3 (tall)
                    [4, 5], // column 4
                    [[6]] // column 5
                ].map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-4 items-center w-full sm:w-auto">
                        {col.map((item, idx) => {
                            const [imgIndex, tall] = Array.isArray(item) ? item : [item, false];
                            return (
                                <GalleryImage
                                    key={imgIndex}
                                    img={images[imgIndex]}
                                    index={imgIndex}
                                    onClick={handleImageClick}
                                    tall={tall}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Swiper Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
                <div className="p-4">
                    <Swiper
                        key={swiperKey}
                        onSwiper={(swiper) => {
                            if (open) swiper.slideTo(selectedIndex, 0);
                        }}
                        navigation
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    alt={`Slide ${idx}`}
                                    className="w-full max-h-[80vh] object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Dialog>
        </div>
    );
};

const GalleryImage = ({ img, index, onClick, tall = false }) => (
    <div
        className={`
            relative rounded-xl overflow-hidden cursor-pointer group 
            w-[140px] sm:w-[160px] md:w-[200px] 
            ${tall ? 'h-[320px] sm:h-[360px] md:h-[420px]' : 'h-[140px] sm:h-[160px] md:h-[200px]'}
        `}
        onClick={() => onClick(index)}
    >
        <img
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <IconButton>
                <ZoomInIcon fontSize="large" className="text-white drop-shadow-md" />
            </IconButton>
        </div>
    </div>
);

export default RecentGallery;
