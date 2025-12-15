export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  avatar?: string;
  rating: number;
  quote: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

