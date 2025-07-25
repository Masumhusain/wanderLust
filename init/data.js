// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };


const sampleListings = [
  {
    "title": "Listing 1",
    "description": "Sample description for Listing 1",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 100,
    "location": "Malibu, California",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
       118.6923,
       34.0381
      ]
    }
  },
  {
    "title": "Listing 2",
    "description": "Sample description for Listing 2",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 200,
    "location": "New York City, New York",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
         74.0060,
        40.7128
      ]
    }
  },
  {
    "title": "Listing 3",
    "description": "Sample description for Listing 3",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 300,
    "location": "Aspen, Colorado",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
         106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Listing 4",
    "description": "Sample description for Listing 4",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 400,
    "location": "Florence, Tuscany",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
       11.2577,
       43.7700
      ]
    }
  },
  {
    "title": "Listing 5",
    "description": "Sample description for Listing 5",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 500,
    "location": "Portland, Oregon",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        122.6784,
        45.5152
      ]
    }
  },
  {
    "title": "Listing 6",
    "description": "Sample description for Listing 6",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 600,
    "location": "Cancun, Quintana Roo",
    "country": "Mexico",
    "geometry": {
      "type": "Point",
      "coordinates": [
        86.8515,
        21.1619
      ]
    }
  },
  {
    "title": "Listing 7",
    "description": "Sample description for Listing 7",
    "image": {
      "filename": "listingimage",
      "url":  "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 700,
    "location": "Lake Tahoe, California",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
      120.0324  ,
        39.0968
      ]
    }
  },
  {
    "title": "Listing 8",
    "description": "Sample description for Listing 8",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 800,
    "location": "Los Angeles, California",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        118.2426,
        34.0549
      ]
    }
  },
  {
    "title": "Listing 9",
    "description": "Sample description for Listing 9",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Verbier, Valais",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
       , 7.2286,
       46.0961
      ]
    }
  },
  {
    "title": "Listing 10",
    "description": "Sample description for Listing 10",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1000,
    "location": "Serengeti National Park, Mara",
    "country": "Tanzania",
    "geometry": {
      "type": "Point",
      "coordinates": [
         34.8333,
       2.3333
      ]
    }
  },
  {
    "title": "Listing 11",
    "description": "Sample description for Listing 11",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Amsterdam, North Holland",
    "country": "Netherlands",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.9041,
       52.3676
      ]
    }
  },
  {
    "title": "Listing 12",
    "description": "Sample description for Listing 12",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "Fiji, Western Division",
    "country": "Fiji",
    "geometry": {
      "type": "Point",
      "coordinates": [
       177.7763,
      17.7511
      ]
    }
  },
  {
    "title": "Listing 13",
    "description": "Sample description for Listing 13",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1300,
    "location": "Cotswolds, Gloucestershire",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        1.8839,
        51.7950
      ]
    }
  },
  {
    "title": "Listing 14",
    "description": "Sample description for Listing 14",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1400,
    "location": "Boston, Massachusetts",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        71.0565,
        42.3555
      ]
    }
  },
  {
    "title": "Listing 15",
    "description": "Sample description for Listing 15",
    "image": {
      "filename": "listingimage",
      "url":"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Bali, Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
       8.4095,
        115.1889
      ]
    }
  },
  {
    "title": "Listing 16",
    "description": "Sample description for Listing 16",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Banff, Alberta",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Listing 17",
    "description": "Sample description for Listing 17",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1700,
    "location": "Miami, Florida",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
       80.1918,
       25.7617
      ]
    }
  },
  {
    "title": "Listing 18",
    "description": "Sample description for Listing 18",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Phuket, Phuket",
    "country": "Thailand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Listing 19",
    "description": "Sample description for Listing 19",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1900,
    "location": "Scottish Highlands, Scotland",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
       5.0993,
        57.3596
      ]
    }
  },
  {
    "title": "Listing 20",
    "description": "Sample description for Listing 20",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Dubai, Dubai",
    "country": "United Arab Emirates",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.2708,
        25.2048
      ]
    }
  },
  {
    "title": "Listing 21",
    "description": "Sample description for Listing 21",
    "image": {
      "filename": "listingimage",
      "url":"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2100,
    "location": "Montana, Montana",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        110.3626,
        46.8797
      ]
    }
  },
  {
    "title": "Listing 22",
    "description": "Sample description for Listing 22",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Mykonos, South Aegean",
    "country": "Greece",
    "geometry": {
      "type": "Point",
      "coordinates": [
         25.3667,
        37.4415
      ]
    }
  },
  {
    "title": "Listing 23",
    "description": "Sample description for Listing 23",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2300,
    "location": "Costa Rica, Puntarenas",
    "country": "Costa Rica",
    "geometry": {
      "type": "Point",
      "coordinates": [
       84.8294,
        9.9778
      ]
    }
  },
  {
    "title": "Listing 24",
    "description": "Sample description for Listing 24",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2400,
    "location": "Charleston, South Carolina",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.9320,
        32.7833
      ]
    }
  },
  {
    "title": "Listing 25",
    "description": "Sample description for Listing 25",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Tokyo, Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6500,
      35.6764
      ]
    }
  },
  {
    "title": "Listing 26",
    "description": "Sample description for Listing 26",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2600,
    "location": "New Hampshire, New Hampshire",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        71.5724,
       43.1939
      ]
    }
  },
  {
    "title": "Listing 27",
    "description": "Sample description for Listing 27",
    "image": {
      "filename": "listingimage",
      "url":  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2700,
    "location": "Maldives, Kaafu Atoll",
    "country": "Maldives",
    "geometry": {
      "type": "Point",
      "coordinates": [
       73.4635277390953,
        4.95876855
      ]
    }
  },
  {
    "title": "Listing 28",
    "description": "Sample description for Listing 28",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2800,
    "location": "Aspen, Colorado",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        106.8175,
       39.1911
      ]
    }
  },
  {
    "title": "Listing 29",
    "description": "Sample description for Listing 29",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2900,
    "location": "Costa Rica, Guanacaste",
    "country": "Costa Rica",
    "geometry": {
      "type": "Point",
      "coordinates": [
        85.4376,
        10.4073
      ]
    }
  },
  {
    "title": "Listing 30",
    "description": "Sample description for Listing 30",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Jaipur, Rajasthan",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
       75.7873,
       26.9124
      ]
    }
  }
];

module.exports = {data: sampleListings};