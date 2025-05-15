import React from 'react';
import {
    Facebook,
    Twitter,
    LinkedIn,
    WhatsApp,
    Instagram,
    Phone,
    Email,
    LocationOn,
    KeyboardArrowRight
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#0D0D0C] text-white">
            {/* Newsletter */}
            <div className="max-w-7xl mx-auto py-12 px-4 border-b border-gray-700">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <h2 className="text-3xl font-semibold">Get Updated The Latest Newsletter</h2>
                    <form className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="px-6 py-3 border border-white rounded-full bg-black text-white placeholder-gray-400 w-full sm:w-80"
                            required
                        />
                        <button
                            type="submit"
                            className="button-animate relative z-10 bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:text-black transition-colors duration-300"
                        >
                            <span className="relative z-10">Subscribe Now</span>
                            <img src="assets/img/icon/plane.svg" alt="" className="relative z-10" />
                        </button>

                    </form>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/assets/img/logo3.svg" alt="Tourm" className="h-10" />
                        <div>
                            <h3 className="text-xl font-bold">Tourm</h3>
                            <p className="text-sm">Explore World</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm">
                        Rapidiously myocardinate cross-platform intellectual capital model.
                        Appropriately create interactive infrastructures.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-3 text-white">
                        {[
                            { Icon: Facebook, link: 'https://facebook.com' },
                            { Icon: Twitter, link: 'https://twitter.com' },
                            { Icon: LinkedIn, link: 'https://linkedin.com' },
                            { Icon: WhatsApp, link: 'https://whatsapp.com' },
                            { Icon: Instagram, link: 'https://instagram.com' }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 cursor-pointer transition-transform duration-300 hover:bg-black hover:rotate-y-180"
                            >
                                <item.Icon fontSize="small" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {['Home', 'About us', 'Our Service', 'Terms of Service', 'Tour Booking Now'].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="flex items-center transition-colors duration-200 group"
                                >
                                    <KeyboardArrowRight className="text-white group-hover:text-gray-400 mr-1 transition-colors duration-200" />
                                    <span className="group-hover:text-gray-400 transition-colors duration-200">
                                        {link}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                    <ul className="space-y-5 text-sm text-gray-300">
                        <li className="flex gap-3 items-start">
                            <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
                                <Phone fontSize="small" />
                            </div>
                            <span>+919260927665</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
                                <Email fontSize="small" />
                            </div>
                            <span>
                                info@mapmytour.in<br />
                                help@mapmytour.in
                            </span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
                                <LocationOn fontSize="small" />
                            </div>
                            <span>
                                54 Colony Kalkaji<br />
                                Tenament Kalkaji South<br />
                                Delhi, New Delhi, Delhi,<br />
                                India 110019
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Instagram Gallery */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">Instagram Post</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <motion.a
                                key={i}
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden rounded-md aspect-square"
                                whileHover="hover"
                            >
                                <img
                                    src={`/assets/img/widget/gallery_1_${i}.jpg`}
                                    alt={`Instagram ${i}`}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                            y: 0
                                        }
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                >
                                    <Instagram className="text-white" />
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 py-4 text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                    <p className="text-gray-400">
                        Copyright 2025 <span className="text-red-500 font-bold">Map</span> My Tour. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-400">We Accept</span>
                        <img src="/assets/img/shape/cards.png" alt="cards" className="h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
