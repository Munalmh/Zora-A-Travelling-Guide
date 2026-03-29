export interface Zone {
  id: string;
  name: string;
  category: string;
  region: string;
  price: number;
  rating: number;
  duration: number;
  imageUrl: string;
  badge: string;
}

export const mockZones: Zone[] = [
  {
    id: 'n1',
    name: 'Everest Base Camp',
    category: 'Trekking Routes',
    region: 'Khumbu Region',
    price: 1200,
    rating: 4.9,
    duration: 14,
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', // Everest Base Camp
    badge: 'Iconic',
  },
  {
    id: 'n2',
    name: 'Pokhara Valley',
    category: 'Valleys & Lakes',
    region: 'Gandaki Province',
    price: 300,
    rating: 4.8,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800', // Pokhara Valley
    badge: 'Relaxing',
  },
  {
    id: 'n3',
    name: 'Chitwan National Park',
    category: 'Wildlife Reserves',
    region: 'Terai Region',
    price: 450,
    rating: 4.7,
    duration: 4,
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800', // Chitwan National Park
    badge: 'Safari',
  },
  {
    id: 'n4',
    name: 'Lumbini (Birthplace of Buddha)',
    category: 'Cultural Sites',
    region: 'Rupandehi District',
    price: 150,
    rating: 4.6,
    duration: 2,
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Lumbini
    badge: 'Spiritual',
  },
  {
    id: 'n5',
    name: 'Annapurna Circuit',
    category: 'Trekking Routes',
    region: 'Annapurna Region',
    price: 900,
    rating: 4.9,
    duration: 18,
    imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800', // Annapurna Circuit
    badge: 'Adventure',
  },
  {
    id: 'n6',
    name: 'Bhaktapur Durbar Square',
    category: 'Cultural Sites',
    region: 'Kathmandu Valley',
    price: 50,
    rating: 4.8,
    duration: 1,
    imageUrl: 'https://images.unsplash.com/photo-1582638651720-b1d3e3f18cb8?w=800', // Bhaktapur Durbar Square
    badge: 'Heritage',
  },
  {
    id: 'n7',
    name: 'Rara Lake',
    category: 'Valleys & Lakes',
    region: 'Karnali Province',
    price: 600,
    rating: 4.7,
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1591298869318-0f4ac7657673?w=800&q=80', // Rara Lake
    badge: 'Pristine',
  },
  {
    id: 'n8',
    name: 'Swayambhunath Stupa',
    category: 'Cultural Sites',
    region: 'Kathmandu',
    price: 20,
    rating: 4.7,
    duration: 1,
    imageUrl: 'https://images.unsplash.com/photo-1575529319557-e91f74e2b49e?w=800&q=80', // Swayambhunath Stupa
    badge: 'Views',
  },
  {
    id: 'n9',
    name: 'Namche Bazaar',
    category: 'Himalayas',
    region: 'Solukhumbu District',
    price: 400,
    rating: 4.9,
    duration: 6,
    imageUrl: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800', // Namche Bazaar
    badge: 'Mountain City',
  },
  {
    id: 'n10',
    name: 'Bardia National Park',
    category: 'Wildlife Reserves',
    region: 'Bardia District',
    price: 550,
    rating: 4.8,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1615892041870-a4c4aa2c07df?w=800&q=80', // Bardia National Park
    badge: 'Wild Tigers',
  }
];
