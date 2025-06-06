// Location data for Blue Rat Smoke Shop
export const locations = [
  {
    id: 'atlanta',
    name: 'Blue Rat Atlanta',
    address: '2084 Cheshire Bridge Rd NE, Atlanta, GA 30324',
    phone: '(404) 320-8004',
    hours: {
      weekdays: 'Monday-Saturday 10AM–2AM',
      weekend: 'Sunday 10AM-12AM'
    },
    image: '/src/assets/atlanta-storefront.jpg',
    mapUrl: 'https://maps.google.com/?q=2084+Cheshire+Bridge+Rd+NE,+Atlanta,+GA+30324'
  },
  {
    id: 'suwanee',
    name: 'Blue Rat Suwanee',
    address: '3959 Lawrenceville-Suwanee Rd, Suwanee, GA 30024',
    phone: '(470) 266-1080',
    hours: {
      weekdays: 'Monday-Sunday 10AM–12AM',
      weekend: 'Monday-Sunday 10AM–12AM'
    },
    image: '/src/assets/suwanee-storefront.jpg',
    mapUrl: 'https://maps.google.com/?q=3959+Lawrenceville-Suwanee+Rd,+Suwanee,+GA+30024'
  },
  {
    id: 'athens',
    name: 'Blue Rat Athens',
    address: '2712, 260 1/2 W Clayton St, Athens, GA 30601',
    phone: '(706) 548-8030',
    hours: {
      weekdays: 'Monday-Sunday 10AM–12AM',
      weekend: 'Monday-Sunday 10AM–12AM'
    },
    image: '/src/assets/athens-storefront.jpg',
    mapUrl: 'https://maps.google.com/?q=260+W+Clayton+St,+Athens,+GA+30601'
  },
  {
    id: 'roswell',
    name: 'Blue Rat Roswell',
    address: '1000 Marietta Hwy #400, Roswell, GA 30075',
    phone: '(770) 676-6026',
    hours: {
      weekdays: 'Monday-Sunday 10AM–12AM',
      weekend: 'Monday-Sunday 10AM–12AM'
    },
    image: '/src/assets/roswell-storefront.jpg',
    mapUrl: 'https://maps.google.com/?q=1000+Marietta+Hwy+400,+Roswell,+GA+30075'
  }
];

// Gallery categories
export const galleryCategories = [
  { 
    id: 'functionals', 
    name: 'Functional Art', 
    color: 'from-pink-500 to-rose-500',
    description: 'Masterfully crafted functional smoking pieces'
  },
  { 
    id: 'pendants', 
    name: 'Pendants', 
    color: 'from-purple-500 to-indigo-500',
    description: 'Exquisite decorative pendant collections'
  },
  { 
    id: 'accessories', 
    name: 'Accessories', 
    color: 'from-orange-500 to-red-500',
    description: 'Premium smoking accessories and curated tools'
  },
  { 
    id: 'marbles', 
    name: 'Art Glass', 
    color: 'from-green-500 to-emerald-500',
    description: 'Artistic glass marbles and collectible pieces'
  }
];

// Company information
export const companyInfo = {
  name: 'Blue Rat Smoke Shop',
  tagline: 'Premium Handcrafted Smoking Accessories',
  description: 'Georgia\'s premier destination for exceptional quality handcrafted smoking accessories. We specialize in masterfully crafted pieces, premium products, and curated collections with expert service at four convenient locations.',
  socialMedia: {
    instagram: 'https://instagram.com/blueratsmokeshop',
  },
  loyaltyProgram: {
    name: 'Blue Rat Community',
    description: 'Join our community for exclusive access to new collections, special events, and member-only offers!'
  }
};

