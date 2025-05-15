import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, User, MapPin, Clock } from "lucide-react";
import Logo from "./assets/img/logo.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle dropdown for desktop
  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="w-full font-sans">
      {/* Header Top */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side - Address and Hours */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="mr-2 w-4 h-4" />
                <span>54 Kalkaji South Delhi, 110019</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="mr-2 w-4 h-4" />
                <span>Mon to Sat: 10 am - 6:30 pm</span>
              </div>
            </div>

            {/* Right side - Language, FAQ, Support, Sign In */}
            <div className="ml-auto flex items-center space-x-6">
              {/* Language Dropdown */}
              <div className="relative">
                <div className="flex items-center cursor-pointer text-sm text-gray-600 hover:text-black">
                  <span>Language</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="/faq"
                  className="hidden md:block text-sm text-gray-600 hover:text-black"
                >
                  FAQ
                </a>
                <a
                  href="/contact"
                  className="hidden md:block text-sm text-gray-600 hover:text-black"
                >
                  Support
                </a>
                <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                <a
                  href="#login"
                  className="text-sm text-gray-600 hover:text-black flex items-center"
                >
                  <span>Sign In / Register</span>
                  <User className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Menu Area - Sticky Header */}
      <div
        className={`bg-white w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md z-50" : ""
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src={Logo} 
                  alt="Map My Tour" 
                  className="h-8"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex flex-1 justify-center ml-8">
              <ul className="flex space-x-8">
                {/* Home */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('home')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Home
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 top-full bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'home' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2 w-48">
                      <a href="/" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Home Travel</span>
                      </a>
                      <a href="/home-tour" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Home Tour</span>
                      </a>
                      <a href="/home-agency" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Home Agency</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* About Us */}
                <li>
                  <a
                    href="/about"
                    className="block py-2 text-black hover:text-blue-600 font-medium"
                  >
                    About Us
                  </a>
                </li>
                
                {/* Destination */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('destination')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Destination
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'destination' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2">
                      <a href="/destination" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Destination</span>
                      </a>
                      <a href="/destination-details" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Destination Details</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Service */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('service')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Service
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'service' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2">
                      <a href="/service" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Services</span>
                      </a>
                      <a href="/service-details" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Service Details</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Activities */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('activities')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Activities
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'activities' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2">
                      <a href="/activities" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Activities</span>
                      </a>
                      <a href="/activities-details" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Activities Details</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Pages */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('pages')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Pages
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'pages' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2">
                      <a href="/gallery" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Gallery</span>
                      </a>
                      <a href="/tour" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Our Tour</span>
                      </a>
                      <a href="/tour-details" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Tour Details</span>
                      </a>
                      <a href="/resort" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Resort Page</span>
                      </a>
                      <a href="/faq" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>FAQ</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Blog */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle('blog')}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button className="flex items-center py-2 text-black hover:text-blue-600 font-medium">
                    Blog
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === 'blog' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <div className="py-2">
                      <a href="/blog" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Blog</span>
                      </a>
                      <a href="/blog-details" className="flex items-center px-4 py-2 hover:bg-gray-100 group/item">
                        <span className="transform transition-transform duration-300 opacity-0 -translate-x-2 group-hover/item:translate-x-0 group-hover/item:opacity-100">✈️ </span>
                        <span>Blog Details</span>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Contact Us */}
                <li>
                  <a
                    href="/contact"
                    className="block py-2 text-black hover:text-blue-600 font-medium"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Book Now Button (Desktop) */}
            <div className="hidden xl:block">
              <a
                href="/contact"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Book Now
                <span className="ml-1">→</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 rounded-md focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-64
        bg-white z-50 shadow-xl overflow-auto transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="flex items-center mb-8 mt-4">
            <img 
              src={Logo} 
              alt="Map My Tour" 
              className="h-6"
            />
          </div>

          {/* Mobile Menu Links */}
          <nav>
            <ul className="space-y-1">
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="/" className="block text-black font-medium">
                    Home
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobileHome")}
                    className="p-1"
                  >
                    {activeDropdown === "mobileHome" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobileHome" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/" className="block py-1 text-gray-600">
                      Home Travel
                    </a>
                    <a href="/home-tour" className="block py-1 text-gray-600">
                      Home Tour
                    </a>
                    <a href="/home-agency" className="block py-1 text-gray-600">
                      Home Agency
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <a href="/about" className="block py-3 text-black font-medium">
                  About Us
                </a>
              </li>
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="#" className="block text-black font-medium">
                    Destination
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobileDestination")}
                    className="p-1"
                  >
                    {activeDropdown === "mobileDestination" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobileDestination" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/destination" className="block py-1 text-gray-600">
                      Destination
                    </a>
                    <a
                      href="/destination-details"
                      className="block py-1 text-gray-600"
                    >
                      Destination Details
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="#" className="block text-black font-medium">
                    Service
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobileService")}
                    className="p-1"
                  >
                    {activeDropdown === "mobileService" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobileService" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/service" className="block py-1 text-gray-600">
                      Services
                    </a>
                    <a
                      href="/service-details"
                      className="block py-1 text-gray-600"
                    >
                      Service Details
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="#" className="block text-black font-medium">
                    Activities
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobileActivities")}
                    className="p-1"
                  >
                    {activeDropdown === "mobileActivities" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobileActivities" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/activities" className="block py-1 text-gray-600">
                      Activities
                    </a>
                    <a
                      href="/activities-details"
                      className="block py-1 text-gray-600"
                    >
                      Activities Details
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="#" className="block text-black font-medium">
                    Pages
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobilePages")}
                    className="p-1"
                  >
                    {activeDropdown === "mobilePages" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobilePages" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/gallery" className="block py-1 text-gray-600">
                      Gallery
                    </a>
                    <a href="/tour" className="block py-1 text-gray-600">
                      Our Tour
                    </a>
                    <a
                      href="/tour-details"
                      className="block py-1 text-gray-600"
                    >
                      Tour Details
                    </a>
                    <a href="/resort" className="block py-1 text-gray-600">
                      Resort page
                    </a>
                    <a href="/faq" className="block py-1 text-gray-600">
                      Faq Page
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <a href="#" className="block text-black font-medium">
                    Blog
                  </a>
                  <button
                    onClick={() => handleDropdownToggle("mobileBlog")}
                    className="p-1"
                  >
                    {activeDropdown === "mobileBlog" ? (
                      <span className="text-lg">−</span>
                    ) : (
                      <span className="text-lg">+</span>
                    )}
                  </button>
                </div>
                {activeDropdown === "mobileBlog" && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="/blog" className="block py-1 text-gray-600">
                      Blog
                    </a>
                    <a
                      href="/blog-details"
                      className="block py-1 text-gray-600"
                    >
                      Blog Details
                    </a>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-100">
                <a
                  href="/contact"
                  className="block py-3 text-black font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Book Now Button */}
          <div className="mt-6">
            <a
              href="/contact"
              className="block text-center bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
      
      {/* Dropdown content that appears on hover for "Destination" menu item */}
      {activeDropdown === "destination" && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex">
              <div className="flex-1">
                <div className="font-bold text-lg mb-2">✈️ Destination</div>
                <div className="grid grid-cols-1">
                  <a href="/destination" className="py-1 hover:text-blue-600">Destination</a>
                  <a href="/destination-details" className="py-1 hover:text-blue-600">Destination Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;