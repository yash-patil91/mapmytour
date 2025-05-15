import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TravelCard = () => {
    return (
        <div className="relative py-16 bg-white" id="about-sec">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row">

                    {/* Left Side: Images */}
                    <div className="relative flex-1 flex ">
                        {/* Main large image */}
                        <div className="relative w-92 h-96 overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://gleeful-eclair-61ad48.netlify.app/assets/img/normal/about_3_1.jpg"
                                alt="About 1"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Top-right smaller image */}
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-6 w-92 h-96 overflow-hidden rounded-2xl shadow-md hidden sm:block">
                            <img
                                src="https://gleeful-eclair-61ad48.netlify.app/assets/img/normal/about_3_2.jpg"
                                alt="About 2"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Bottom-right moving image */}
                        <div className="absolute bottom-14 left-5 w-92 h-60 overflow-hidden rounded-2xl shadow-md animate-slideX hidden sm:block">
                            <img
                                src="https://gleeful-eclair-61ad48.netlify.app/assets/img/normal/about_3_3.jpg"
                                alt="About 3"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>



                    {/* Right Side: Text and Features */}
                    <div className="flex-1 text-left">
                        <h2 className="text-2xl font-cursive">Welcome To Map My Tour</h2>
                        <h1 className="text-4xl font-bold mt-2 mb-8">We are world reputeted travel agency</h1>
                        <p className="text-gray-600 mb-6 max-w-prose text-[18px] leading-[26px]">
                            There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words.
                        </p>
                        <p className="mt-1 text-gray-600 mb-6 max-w-prose text-[18px] leading-[26px]">
                            Leiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <img src="assets/img/icon/map3.svg" alt="Trip" className="w-20 h-20 p-4" style={{ background: "black", borderRadius: "50%" }} />
                                <div>
                                    <h5 className="text-xl font-semibold">Exclusive Trip</h5>
                                    <p className="text-gray-600 text-[18px] leading-[26px]">There are many variations of passages<br /> of available but the majority.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img src="assets/img/icon/map3.svg" alt="Trip" className="w-20 h-20 p-4" style={{ background: "black", borderRadius: "50%" }} />
                                <div>
                                    <h5 className="text-xl font-semibold">Safety First Always</h5>
                                    <p className="text-gray-600 text-[18px] leading-[26px]">There are many variations of passages of available but the majority.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img src="assets/img/icon/guide.svg" alt="Guide" className="w-20 h-20 p-4" style={{ background: "black", borderRadius: "50%" }} />
                                <div>
                                    <h5 className="text-xl font-semibold">Professional Guide</h5>
                                    <p className="text-gray-600 text-[18px] leading-[26px]">There are many variations of passages<br /> of available but the majority.</p>
                                </div>
                            </div>
                        </div>


                        <a
                            href="#"
                            className="mt-2 travel-card-slider-button-animate inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium relative z-10 border bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 overflow-hidden group"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Contact With Us <span className="ml-1"><ArrowForwardIcon /></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;
