
export type Category = 'Cookware' | 'Kitchen Tools' | 'Storage' | 'Home Décor' | 'Cleaning Essentials';

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  category: Category;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
}

export interface LegalContent {
  title: string;
  content: string;
}
