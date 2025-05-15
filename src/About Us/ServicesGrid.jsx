import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const services = [
    { title: 'Photo Shoot', listing: 20 },
    { title: 'Tour Guide', listing: 22 },
    { title: 'Cozy Event', listing: 23 },
    { title: 'Interesting Rest', listing: 24 },
    { title: 'Resort Stay', listing: 25 },
    { title: 'Mountain Trip', listing: 18 },
    { title: 'Sunset Cruise', listing: 15 },
    { title: 'City Tour', listing: 27 },
];

const imageUrl = 'https://gleeful-eclair-61ad48.netlify.app/assets/img/destination/destination_4_2.jpg';

const ServicesGrid = () => {
    return (
        <div className="px-4 py-12 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-cursive">Services We Offer</h2>
                <h1 className="text-4xl font-bold mt-2 mb-8">Our Amazing services</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#0000000f] rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-hidden rounded-t-xl">
                            <img
                                src={imageUrl}
                                alt={service.title}
                                className="w-full h-56 object-cover transform transition-transform duration-600 hover:scale-125"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{service.listing} Listing</p>
                            <a
                                href="#"
                                className="travel-card-slider-button-animate inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium relative z-10 border bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 overflow-hidden group"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                    Book Now <span className="ml-1"><ArrowForwardIcon /></span>
                                </span>
                            </a>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
