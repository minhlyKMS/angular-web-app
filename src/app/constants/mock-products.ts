import { Product } from '../models/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Leaf Rake',
    code: 'gdn 0011',
    price: '19.95',
    imgSrc: 'assets/img/leaf-rake.png',
    availableDate: 'March 19, 2016',
    rating: 3.5
  },
  {
    id: 2,
    name: 'Gardern Cart',
    code: 'gdn 0023',
    price: '32.99',
    imgSrc: 'assets/img/garden-cart.png',
    availableDate: 'March 18, 2016',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Hammer',
    code: 'tbx 0048',
    price: '8.90',
    imgSrc: 'assets/img/hammer.png',
    availableDate: 'May 21, 2016',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Saw',
    code: 'tbx 0022',
    price: '11.55',
    imgSrc: 'assets/img/saw.png',
    availableDate: 'May 15, 2016',
    rating: 3.8
  },
  {
    id: 5,
    name: 'Video game controller',
    code: 'gmg 0042',
    price: '35.95',
    imgSrc: 'assets/img/game-controller.png',
    availableDate: 'October 15, 2015',
    rating: 4.6
  }
];
