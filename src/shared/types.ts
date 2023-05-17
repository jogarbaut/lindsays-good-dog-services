export enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "services",
  Training = "training",
  Gallery = "gallery",
  Testimonials = "testimonials",
  ContactUs = "contactus",
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
}

export interface GalleryItemType {
  id: number;
  imageURL: string;
  description: string;
}

export interface TestimonialType {
  id: number;
  review: string;
  author: string;
}

export interface PhotoType {
  id: number;
  alt: string;
  src: string;
  caption?: string
}