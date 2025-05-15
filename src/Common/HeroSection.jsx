import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = ({ title, name, description, bgImage }) => {
    return (
        <div
            className="relative w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0D0D0C] opacity-5"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center
                            md:min-h-[300px] lg:min-h-[400px] px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                <div className="flex flex-wrap justify-center items-center gap-2 text-base sm:text-lg">
                    <span>{name}</span>
                    <ArrowForwardIcon fontSize="small" />
                    <span className="font-semibold">{description}</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
