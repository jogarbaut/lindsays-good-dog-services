export enum SelectedPage {
  Home = "home",
  About = "about",
  Staff = "staff",
  Grooming = "grooming",
  Training = "classes&training",
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

export interface StaffType {
  id: number;
  photo?: string;
  name: string;
  role: string;
  background: string;
}