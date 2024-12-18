import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', i: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', i: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', i: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    h4: 'saving money',
    p: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-wallet fa-fw',
  },
  {
    id: 2,
    h4: 'endless hiking',
    p: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-tree fa-fw',
  },
  {
    id: 3,
    h4: 'amazing comfort',
    p: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-socks fa-fw',
  },
];

export const toursData = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'China',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: '  hong kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2020',
    title: 'kenya highlights',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
];
