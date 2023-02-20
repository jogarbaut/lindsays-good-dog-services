import { SelectedPage, TestimonialType } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Testimonial from "./testimonial";

const testimonials: Array<TestimonialType> = [
  {
    id: 1,
    review: "Lindsay did an awesome job on my dog despite his mats. She asked questions before she started to make sure we were on the same page. Definitely recommend!",
    author: "Laurie H.",
  },
  {
    id: 2,
    review: "Lindsay is one of a kind! I enrolled my mini Aussie in her puppy class and it did wonders from him! Her trainings are super focused on how the puppy can be successful. We took the puppy 1 class twice and I do not regret it. My pup went from a little shy puppy to one who seeks attention from everyone now.  She makes her self very available for questions, which I loved because I had a lot of them!",
    author: "Gil M.",
  },
  {
    id: 3,
    review: "Lindsay has been grooming Delilah her whole life and she just loves her. She gets so excited when I let her know we are going to go see miss Lindsay. Schnauzers are known to have issues with grooming and Lindsey handles her perfectly. Her background with schnauzers and other terriers makes for some pretty beautiful grooms. Lindsay is the best groomer.",
    author: "Audrey K.",
  },
  {
    id: 4,
    review: "Lindsay is an amazing groomer who has been grooming dogs and cats for over ten years! She is extremely compassionate with animals and they always leave her care looking amazing.",
    author: "Angel C.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
      >
        {/* Header */}
        <motion.div
          className="mx-auto md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>Testimonials</HeaderText>
          <p className="my-5 w-full text-center text-md">
            For additional reviews, please see our Facebook Page or Google Reviews Page.
          </p>
        </motion.div>
        {/* Testimonials */}
        <motion.div
          className="mt-5 items-center justify-between gap-16 md:grid md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {testimonials.map((testimonial: TestimonialType) => (
            <Testimonial
              key={testimonial.id}
              review={testimonial.review}
              author={testimonial.author}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
