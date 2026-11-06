const images = {
  monstera: 'https://images.unsplash.com/photo-1614594575927-6c8c0f6f9c4c?auto=format&fit=crop&w=800&q=85',
  fiddle: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?auto=format&fit=crop&w=800&q=85',
  snake: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=85',
  calathea: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85',
  pilea: 'https://images.unsplash.com/photo-1632207691143-643e2a4f6c3d?auto=format&fit=crop&w=800&q=85',
  fern: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=800&q=85',
  succulent: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=85',
  aloe: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=800&q=85',
  cactus: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85',
}

export const categories = [
  {
    name: 'Statement Greens',
    description: 'Bold silhouettes for rooms that need a little more life.',
    plants: [
      { id: 'monstera', name: 'Swiss Cheese Plant', price: 34, image: images.monstera, tag: 'Bestseller' },
      { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 48, image: images.fiddle, tag: 'New arrival' },
      { id: 'snake', name: 'Snake Plant Laurentii', price: 28, image: images.snake, tag: 'Low light' },
      { id: 'rubber', name: 'Ruby Rubber Tree', price: 38, image: 'https://images.unsplash.com/photo-1616766414463-8dbf4a8f3c7b?auto=format&fit=crop&w=800&q=85', tag: 'Statement' },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 55, image: 'https://images.unsplash.com/photo-1597055181300-a8f2b1d1b3c9?auto=format&fit=crop&w=800&q=85', tag: 'Tropical' },
      { id: 'zz-plant', name: 'Raven ZZ Plant', price: 30, image: 'https://images.unsplash.com/photo-1612363228106-3e6e8c5c6e7d?auto=format&fit=crop&w=800&q=85', tag: 'Beginner' },
    ],
  },
  {
    name: 'Tropical Calm',
    description: 'Lush, textured foliage for your own indoor retreat.',
    plants: [
      { id: 'calathea', name: 'Calathea Orbifolia', price: 32, image: images.calathea, tag: 'Pet friendly' },
      { id: 'pilea', name: 'Chinese Money Plant', price: 22, image: images.pilea, tag: 'Easy care' },
      { id: 'fern', name: 'Bird’s Nest Fern', price: 26, image: images.fern, tag: 'Fresh pick' },
      { id: 'prayer', name: 'Maranta Prayer Plant', price: 24, image: 'https://images.unsplash.com/photo-1603436326446-7e6a8f3b4a1f?auto=format&fit=crop&w=800&q=85', tag: 'Pet friendly' },
      { id: 'peperomia', name: 'Peperomia Obtusifolia', price: 21, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8a4c5a5?auto=format&fit=crop&w=800&q=85', tag: 'Easy care' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 29, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85', tag: 'Air purifier' },
    ],
  },
  {
    name: 'Sun-Loving Succulents',
    description: 'Small, resilient companions for bright windowsills.',
    plants: [
      { id: 'succulent', name: 'Echeveria Rosette', price: 16, image: images.succulent, tag: 'Bright light' },
      { id: 'aloe', name: 'Aloe Vera', price: 18, image: images.aloe, tag: 'Wellness' },
      { id: 'cactus', name: 'Golden Barrel Cactus', price: 20, image: images.cactus, tag: 'Easy care' },
      { id: 'haworthia', name: 'Haworthia Zebra', price: 15, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85', tag: 'Bright light' },
      { id: 'jade', name: 'Jade Plant', price: 19, image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=85', tag: 'Good luck' },
      { id: 'string-of-pearls', name: 'String of Pearls', price: 23, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=85', tag: 'Trailing' },
    ],
  },
]

export const allPlants = categories.flatMap((category) => category.plants)
