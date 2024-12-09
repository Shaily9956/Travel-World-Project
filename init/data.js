const sampleDestinations = [
  {
    location: "Kashmir",
    description:
      "Kashmir: Where the Valleys Bloom and Dreams Take Flight.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 24500,

  },
  {
    location: "Kashmir",
    description:
      "Where Every Meadow Whispers Tales of Heaven—Welcome to Kashmir.",
    image:
      "https://images.unsplash.com/photo-1591112982184-5467f13498bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price:27750,
  },
  {
    location: "Kashmir",
    description:
      "Visit Kashmir, the most beautiful place on Earth..",
    image:
      "https://images.unsplash.com/photo-1650384585230-ab9ade0cec63?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 29050,
  },
  {
    location: "Kashmir",
    description:
      "Come to Kashmir and create memories in paradise..",
    image:
      "https://images.unsplash.com/photo-1664212008987-705d2ec758e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 31350,
  },
  {
    location: "Kashmir",
    description:
      "Experience the beauty of blooming gardens and majestic peaks.",
    image:
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 21000,
  },
  {
    location: "Kashmir",
    description:
      "Kashmir welcomes you with its natural beauty and warm hospitality.",
    image:
      "https://images.unsplash.com/photo-1664212008939-6afc24cc6ce8?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 18000,
  },
  {
    location: "Kashmir",
    description:
      "Explore snow-covered mountains and green valleys in Kashmir.",
    image:
      "https://images.unsplash.com/photo-1671958646921-50781a13a7ac?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 32799,
  },
  {
    location: "Kashmir",
    description:
      "In the Embrace of the Himalayas, Kashmir Paints a Picture of Tranquility.",
    image:
      "https://images.unsplash.com/photo-1698300653426-3f6a52ba322c?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 27999,
  },
  {
    location: "Bali",
    description:
      "Bali: A tropical island full of beauty and culture..",
    image:
      "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 102875,
  },
  {
    location: "Bali",
    description:
      "Relax on sandy beaches and explore stunning temples.",
    image:
      "https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 100662,
  },
  {
    location: "Bali",
    description:
      "Visit Bali to enjoy peaceful nature and vibrant traditions.",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhbGklMjBjb3VwbGVzJTIwcGljcyUyMGxvdmluZ3xlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 114699,
  },

  {
    location: "Dubai",
    description:
      "Dubai is a perfect place for fun, adventure, and memories.",
    image:
      "https://images.unsplash.com/photo-1518925591184-152905776d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 90099,
  },
  {
    location: "Dubai",
    description:
      "Enjoy the luxury, shop in grand malls, and explore the desert",
    image:
      "https://images.unsplash.com/photo-1523212307269-b5645414b985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 88099,
  },
   {
    location: "Dubai",
    description:
      "See the tallest building, Burj Khalifa, and amazing attractions.",
    image:
      "https://images.unsplash.com/photo-1523212307269-b5645414b985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 95999,
  },
  {
    location: "Dubai",
    description:
      "Dubai: A city of wonders and modern skyscrapers.",
    image:
      "https://images.unsplash.com/photo-1508842486971-80e43cd3b916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 90999,
  },
  {
    location: "Goa",
    description:
      "Goa: Sun, Sand, and Serenity.",
    image:
      "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 20999,
  },
   {
    location: "Goa",
    description:
      "Party, Peace, and Paradise in Every Wave—That’s Goa.",
    image:
      "https://images.unsplash.com/photo-1490723186985-6d7672633c86?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 21000,
  },
  {
    location: "Goa",
    description:
      "Where Every Sunset Feels Like a Celebration—Goa Awaits.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYSUyMGhvbmV5bW9vbiUyMGNvdXBsZSUyMGJlYWNofGVufDB8fDB8fHww.jpg",
    price: 18099,
  },

  {
    location: "Italy",
    description:
      "Italy: A land of history, art, and delicious food.",
    image:
      "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXRhbHl8ZW58MHx8MHx8fDA%3D.jpg",
    price: 201899,
  },
   {
    location: "Italy",
    description:
      "Visit ancient ruins, beautiful cities, and scenic countryside.",
    image:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 326999,
  },
  {
    location: "Italy",
    description:
      "From Rome to Venice, every corner of Italy is full of charm.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962292128-879bb496ce17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 250999,
  },
  {
    location: "London",
    description:
      "London: A city of history, culture, and iconic landmarks.",
    image:
      "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww.jpg",
    price: 201999,
  },
   {
    location: "London",
    description:
      "Experience the charm of royal palaces and vibrant streets.",
    image:
      "https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww.jpg",
    price: 320999,
  },
  {
    location: "London",
    description:
      "Explore the Tower Bridge, Big Ben, and the London Eye.",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 350999,
  },
  {
    location: "Mumbai",
    description:
      "Mumbai: The city that never sleeps, full of dreams and energy.",
    image:
      "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE11bWJhaXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 21050,
  },
  {
    location: "Mumbai",
    description:
      "Explore Marine Drive, Bollywood, and the Gateway of India.",
    image:
      "https://images.unsplash.com/photo-1726154879842-2556d878f868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVtYmFpJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D.jpg",
    price: 22999,
  },

  {
    location: "Manali",
    description:
      "A peaceful hill station surrounded by snowy mountains.",
    image:
      "https://images.unsplash.com/photo-1712388429936-2abc7144083f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8fDB8fHww.jpg",
    price: 14099,
  },
  {
    location: "Manali",
    description:
      "Enjoy adventure sports, pine forests, and beautiful valleys.",
    image:
      "https://images.unsplash.com/photo-1655470062377-ef3f5161960a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 15088,
  },
  {
    location: "Manali",
    description:
      "Manali is perfect for nature lovers and adventure seekers.",
    image:
      "https://images.unsplash.com/photo-1656833111546-07d98abab448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 16999,
  },
  {
    location: "Manali",
    description:
      "Feel the magic of Rohtang Pass and the charm of Solang Valley in Manali.",
    image:
      "https://images.unsplash.com/photo-1571677465484-2dd540924245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 17900,
  },

  {
    location: "Paris",
    description:
      "Visit the iconic Eiffel Tower and take in stunning views of the city.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBhcmlzfGVufDB8fDB8fHww.jpg",
    price:220999,
  },

  {
    location: "Paris",
    description:
      "Enjoy delicious French pastries and dine in charming cafes.",
    image:
      "https://images.unsplash.com/photo-1477089884677-c596568bd120?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFBhcmlzfGVufDB8fDB8fHww.jpg",
    price: 240999,
  },
  {
    location: "Paris",
    description:
      "Paris is where history, art, and culture come together in perfect harmony",
    image:
      "https://plus.unsplash.com/premium_photo-1718035556963-84554578858e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFBhcmlzfGVufDB8fDB8fHww.jpg",
    price: 350899,
  },
  {
    location: "Paris",
    description:
      "Wander through beautiful gardens like Jardin des Tuileries and Luxembourg Gardens.",
    image:
      "https://images.unsplash.com/photo-1541264161754-445bbdd7de52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fFBhcmlzfGVufDB8fDB8fHww.jpg",
    price: 260999,
  },
  {
    location: "Paris",
    description:
      "Visit the iconic Eiffel Tower and take in stunning views of the city.",
    image:
      "https://plus.unsplash.com/premium_photo-1718035556967-2ec373a9b431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fFBhcmlzfGVufDB8fDB8fHww.jpg",
    price: 300099,
  },
  {
    location: "Agra",
    description:
      "A symbol of eternal love and one of the world’s most beautiful monuments.",
    image:
      "https://plus.unsplash.com/premium_photo-1694475146466-f9608a5fd118?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 5999,
  },
  {
    location: "Rajasthan",
    description:
      "A land of royal palaces, majestic forts, and golden deserts.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 10999,
  },
  {
    location: "Rajasthan",
    description:
      "Rajasthan’s colorful culture, folk dances, and vibrant festivals will captivate you.",
    image:
      "https://images.unsplash.com/photo-1621427639820-fb18ffbe8a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFqYXN0aGFufGVufDB8fDB8fHww.jpg",
    price: 16000,
  },
  {
    location: "Rajasthan",
    description:
      "Take a camel ride through the vast Thar Desert under the starry sky.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFqYXN0aGFufGVufDB8fDB8fHww.jpg",
    price: 10999,
  },
  {
    location: "Rajasthan",
    description:
      "Visit the beautiful lakes and palaces of Udaipur, the City of Lakes.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730388194-0f8f7943dbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D.jpg",
    price: 14599,
  },
  {
    location: "Thailand",
    description:
      "A tropical paradise with golden beaches, vibrant cities, and rich culture.",
    image:
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 54999,
  },
  {
    location: "Thailand",
    description:
      "Experience the unique Thai cuisine, with flavors that range from spicy to sweet.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 68999,
  },
  {
    location: "Thailand",
    description:
      "Take a boat trip through the beautiful islands and limestone cliffs of Phang Nga Bay.",
    image:
      "https://plus.unsplash.com/premium_photo-1693149386423-2e4e264712e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 76000,
  },
  {
    location: "Thailand",
    description:
      "Thailand is a place of adventure, culture, and natural beauty for every traveler.",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYWlsYW5kfGVufDB8fDB8fHww.jpg",
    price: 90999,
  },
  {
    location: "Thailand",
    description:
      "Explore the ancient temples, bustling markets, and stunning palaces in Bangkok.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 98750,
  },
  {
    location: "Shimla",
    description:
      "Take a toy train ride for scenic views of the hills and valleys.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpbWxhfGVufDB8fDB8fHww.jpg",
    price: 18999,
  },
  {
    location: "Shimla",
    description:
      "Shimla offers the perfect escape for nature lovers and peace seekers.",
    image:
      "https://images.unsplash.com/photo-1601983038860-17f26c8c2d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpbWxhJTIwc25vd2ZhbGx8ZW58MHx8MHx8fDA%3D.jpg",
    price: 19800,
  },
  {
    location: "Shimla",
    description:
      "Explore the nearby Kufri for skiing, hiking, and adventure sports.",
    image:
      "https://plus.unsplash.com/premium_photo-1661328070967-6783b83419a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpbWxhJTIwc25vd2ZhbGwlMjBjb3VwbGVzfGVufDB8fDB8fHww.jpg",
    price: 16799,
  },
  {
    location: "Singapore",
    description:
      "A modern city-state full of innovation, gardens, and skyscrapers.",
    image:
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww.jpg",
    price: 198750,
  },
  {
    location: "Singapore",
    description:
      "Discover culture and history at the National Museum and Chinatown.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww.jpg",
    price: 148999,
  },
  {
    location: "Singapore",
    description:
      "Stroll through the futuristic Gardens by the Bay with its stunning Supertree Grove.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729420937-0ecb0ddb6e85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww.jpg",
    price: 159800,
  },
  {
    location: "Singapore",
    description:
      "Singapore’s food scene is a melting pot of flavors from around the world.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730367384-b3c2e3f0d733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww.jpg",
    price: 169799,
  },
  {
    location: "Switzerland",
    description:
      "A land of snow-capped mountains, serene lakes, and charming villages.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962627529-73e5d332d04a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 199750,
  },
  {
    location: "Switzerland",
    description:
      "Explore the iconic Swiss Alps, perfect for skiing, hiking, and breathtaking views.",
    image:
      "https://images.unsplash.com/photo-1504218727796-db522606b16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D.jpg",
    price: 168999,
  },
  {
    location: "Switzerland",
    description:
      "Visit cities like Zurich and Lucerne for their rich history and beautiful architecture.",
    image:
      "https://images.unsplash.com/photo-1527095655060-4026c4af2b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww.jpg",
    price: 159899,
  },
  {
    location: "Switzerland",
    description:
      "Switzerland is famous for its delicious chocolate, cheese, and watches.",
    image:
      "https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww.jpg",
    price: 169788,
  },
  {
    location: "Delhi",
    description:
      " Discover the serene beauty of the Lotus Temple.",
    image:
      "https://images.unsplash.com/photo-1688257899811-d96d969416bf?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 10000,
  },
  {
    location: "Hyderabad",
    description:
      "  Hyderabad offers a perfect blend of rich culture, royal heritage.",
    image:
      "https://images.unsplash.com/photo-1712422813106-dfb845a8a7ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 27870,
  },
  {
    location: "kasol",
    description:
      "  A peaceful haven in the Parvati Valley, surrounded by lush mountains.",
    image:
      "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price: 16000,
  },
  {
    location: "Mussorie",
    description:
      "A peaceful haven in the Parvati Valley, surrounded by lush mountains.",
    image:
      "https://images.unsplash.com/photo-1655916312035-3e72cecef11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    price:16000,
  },

];
module.exports = { data: sampleDestinations };