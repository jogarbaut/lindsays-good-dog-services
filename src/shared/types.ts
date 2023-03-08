export enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "services",
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