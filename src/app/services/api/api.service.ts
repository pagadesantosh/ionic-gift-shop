import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Surprise Gift Basket',
      price: 999,
      status: true,
      rating: 4.9,
      cover: 'https://images.stockcake.com/public/3/4/d/34d5e94e-8fc2-4351-936e-d886c2932d15_large/intricate-gift-box-stockcake.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 500,
      status: true,
      rating: 4.7,
      cover: 'https://images.stockcake.com/public/1/d/0/1d078c63-d6a8-40c6-ab0d-ff19946b8196_large/assorted-chocolate-box-stockcake.jpg',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'OTT Subscription',
      price: 1500,
      status: true,
      rating: 4.9,
      cover: 'https://images.stockcake.com/public/b/2/2/b2216d4e-cb86-4543-824a-d1cf4cb39134_large/elegant-wrapped-gift-stockcake.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Designer Handbag',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'https://images.stockcake.com/public/7/0/a/70a09b93-9ab4-4b13-a5e6-78c1fe772bf8_large/elegant-orange-handbag-stockcake.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Personalized Mug',
      price: 350,
      status: true,
      rating: 4.5,
      cover: 'https://images.stockcake.com/public/0/9/f/09f5f655-b675-48cb-9fcc-ba9efafc6fad_large/cozy-holiday-mug-stockcake.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'
    },
    {
      id: '6',
      name: 'Perfume Set',
      price: 2000,
      status: true,
      rating: 4.9,
      cover: 'https://images.stockcake.com/public/0/9/8/09858ff9-5847-434f-895f-c2b18372e3ac_large/elegant-perfume-bottle-stockcake.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '7',
      name: 'Jewelry Box',
      price: 4000,
      status: true,
      rating: 4.6,
      cover: 'https://images.stockcake.com/public/3/4/6/3462136b-f3ab-4c4e-b48d-6cb419ec1e59_large/decorative-jewelry-box-stockcake.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'
    },
    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'https://images.stockcake.com/public/7/9/1/791dd7ee-90d0-4b00-bce7-55014e8d6263_large/romantic-dinner-setup-stockcake.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'
    },
    {
      id: '9',
      name: 'Leather Wallet',
      price: 2500,
      status: true,
      rating: 4.6,
      cover: 'https://images.stockcake.com/public/8/f/2/8f2c2bb4-3446-4ed3-ace3-5f70cef916b8_large/elegant-leather-wallet-stockcake.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'
    },
    {
      id: '10',
      name: 'Phone Case',
      price: 999,
      status: true,
      rating: 4.7,
      cover: 'https://images.stockcake.com/public/6/f/9/6f99237d-66a3-465a-b6c4-c38a2aafdbf3_large/luxurious-gold-smartphone-stockcake.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'
    },
    {
      id: '11',
      name: 'Diamond Jewelry',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'https://images.stockcake.com/public/6/6/d/66da1909-89b7-45db-9b3f-998c2f3daa78_large/elegant-diamond-necklace-stockcake.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'
    },
    {
      id: '12',
      name: 'Leather Travel Set',
      price: 5000,
      status: true,
      rating: 4.5,
      cover: 'https://images.stockcake.com/public/2/7/0/27070bfa-50f3-4185-a078-eff1f0d350f4_large/organized-travel-bag-stockcake.jpg',
      description: 'Embark on journeys in style with our Leather Travel Set, crafted for the modern-day explorer.'
    },
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 2500,
      status: true,
      rating: 4.7,
      cover: 'https://images.stockcake.com/public/4/8/b/48b3c891-4208-4223-b5ad-5a89c84886a3_large/neon-clock-glow-stockcake.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'
    },
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 850,
      status: true,
      rating: 4.5,
      cover: 'https://images.stockcake.com/public/0/7/f/07f5791c-2d16-4c88-887f-d282ce59e05e_large/indoor-succulent-garden-stockcake.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, designed for the eco-conscious and nature enthusiasts.'
    },
  ];

  coupons: any[] = [
    {
      id: "1",
      code: "SAVE10",
      discount: 10,
      isPercentage: true,
      description: "Get 10% off on your order",
      isActive: true,
      expiryDate: "2024-06-30",
      minimumOrderAmount: 50,
    },
    {
      id: "2",
      code: "FREESHIP",
      discount: 50,
      isPercentage: false,
      description: "Flat 50 bucks off on all orders",
      isActive: true,
      expiryDate: "2024-12-31",
    },
    {
      id: "3",
      code: "BUNDLEDEAL",
      discount: 20,
      isPercentage: true,
      description: "Buy one get one 50% off",
      isActive: false,
      expiryDate: "2024-09-15",
    },
    {
      id: "4",
      code: "GIFTSHOP",
      discount: 30,
      isPercentage: true,
      description: "Get 30% off on orders above 5000",
      isActive: true,
      expiryDate: "2024-12-31",
      minimumOrderAmount: 5000,
    },
  ];


  constructor() { }

  getCoupons() {
    return this.coupons.filter(coupon => coupon.isActive);
  }
}
