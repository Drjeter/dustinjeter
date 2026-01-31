
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
