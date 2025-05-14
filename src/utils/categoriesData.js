const Shopbycategories = [
  {
    id: 1,
    title: 'Men',
    imageUrl: require('../utils/images/man.jpg'),
    subcategories: ['mens-shirts', 'mens-shoes', 'mens-watches'],
  },
  {
    id: 2,
    title: 'Women',
    imageUrl: require('../utils/images/woman.jpg'),
    subcategories: [
      'womens-bags',
      'womens-dresses',
      'womens-jewellery',
      'womens-shoes',
      'womens-watches',
    ],
  },
  {
    id: 3,
    title: 'Food',
    imageUrl: require('../utils/images/food.jpg'),
    subcategories: ['groceries'],
  },
  {
    id: 4,
    title: 'Personal Care',
    imageUrl: require('../utils/images/skin-care.jpg'),
    subcategories: [
      'skin-care',
      'fragrances',
      'beauty',
      'sunglasses',
      'sports-accessories',
    ],
  },
  {
    id: 5,
    title: 'Furniture',
    imageUrl: require('../utils/images/furniture.jpg'),
    subcategories: ['home-decoration', 'kitchen-accessories', 'furniture'],
  },
  {
    id: 6,
    title: 'Electronics',
    imageUrl: require('../utils/images/smartphone.jpg'),
    subcategories: ['smartphones', 'tablets', 'mobile-accessories', 'laptops'],
  },
];

export default Shopbycategories;
