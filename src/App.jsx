import { useState } from 'react';
import { X, Phone, MapPin, Clock, Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { locations, galleryCategories, companyInfo } from './lib/constants';
import './App.css';

// Import images
import atlantaImg from './assets/atlanta-storefront.jpg';
import suwaneeImg from './assets/suwanee-storefront.jpg';
import athensImg from './assets/athens-storefront.jpg';
import roswellImg from './assets/roswell-storefront.jpg';
import heroImg from './assets/hero-bg.jpg';

const imageMap = {
  atlanta: atlantaImg,
  suwanee: suwaneeImg,
  athens: athensImg,
  roswell: roswellImg
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BR</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Blue Rat</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
            <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-gray-700">Home</a>
            <a href="#locations" className="block py-2 text-gray-700">Locations</a>
            <a href="#gallery" className="block py-2 text-gray-700">Gallery</a>
            <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="block py-2 text-gray-700">Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          Artisanal Glass
          <span className="block text-blue-400">
            & Premium Craftsmanship
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Georgia's premier destination for exceptional quality handcrafted smoking accessories. 
          Discover masterfully crafted pieces, premium products, and curated collections. 
          Four locations dedicated to excellence and expert craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
          >
            Find a Location
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium"
            onClick={() => setShowLoyaltyModal(true)}
          >
            Join Our Community
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Premium</div>
            <div className="text-sm text-gray-300">Handpicked Quality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Artisanal</div>
            <div className="text-sm text-gray-300">Master Craftsmanship</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Expert</div>
            <div className="text-sm text-gray-300">Knowledgeable Service</div>
          </div>
        </div>
      </div>

      {showLoyaltyModal && (
        <LoyaltyModal onClose={() => setShowLoyaltyModal(false)} />
      )}
    </section>
  );
}

function LoyaltyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">BR</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Blue Rat Community</h3>
          <p className="text-gray-600 mb-6">
            Join our community for exclusive access to new collections, special events, and member-only offers!
          </p>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(companyInfo.socialMedia.instagram, '_blank')}
          >
            Follow Us to Join
          </Button>
        </div>
      </div>
    </div>
  );
}

function LocationCard({ location }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageMap[location.id]} 
          alt={`${location.name} storefront`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{location.address}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-800 font-medium">
              {location.phone}
            </a>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-gray-700">
              <div>{location.hours.weekdays}</div>
              {location.hours.weekend !== location.hours.weekdays && (
                <div>{location.hours.weekend}</div>
              )}
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.open(location.mapUrl, '_blank')}
        >
          Visit Location
        </Button>
      </CardContent>
    </Card>
  );
}

function Locations() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit any of our four convenient locations across Georgia for the finest selection 
            of handcrafted smoking accessories, premium products, and expert service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium handcrafted smoking accessories, 
            from functional art to decorative masterpieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${category.color} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">{category.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BR</span>
              </div>
              <span className="text-xl font-semibold">Blue Rat Smoke Shop</span>
            </div>
            <p className="text-gray-400">
              Georgia's premier destination for exceptional quality handcrafted smoking accessories.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#locations" className="block text-gray-400 hover:text-white transition-colors">Locations</a>
              <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors">Gallery</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <a 
              href={companyInfo.socialMedia.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Blue Rat Smoke Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Locations />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

