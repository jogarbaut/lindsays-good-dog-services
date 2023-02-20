export enum SelectedPage {
  Home = "home",
  OurServices = "ourservices",
  Testimonials = "testimonials",
  ContactUs = "contactus",
}

export interface ServiceType {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialType {
  id: number;
  review: string;
  author: string;
}