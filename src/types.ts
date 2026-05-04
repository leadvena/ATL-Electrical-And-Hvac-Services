export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}
