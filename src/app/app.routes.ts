import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/home/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'gifts/:id',
        children: [
          { 
            path: '',
            loadComponent: () => import('./pages/home/item-detail/item-detail.page').then( m => m.ItemDetailPage)
          },
          {
            path: 'cart',
            loadComponent: () => import('./pages/home/cart/cart.page').then( m => m.CartPage)
          }
        ],       
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/home/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/home/privacy/privacy.page').then( m => m.PrivacyPage)
  }
];
