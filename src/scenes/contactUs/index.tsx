import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsImage from "@/assets/ContactUsImage.png";
import HeaderText from "@/shared/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-secondary-300 mb-5 px-5 py-3 placeholder-black`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-16 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="mx-auto md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>Contact Us</HeaderText>
          <div className="my-5 text-lg">
            Contact us to get in contact with a staff member to book your next
            grooming session or training. Our team will get back to you as soon
            as possible.
          </div>
        </motion.div>
        {/* Form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/b25a84fb1c4918442ef58931163d0ef8"
              method="POST"
            >
              {errors.name && (
                <p className="text-red-500">
                  {errors.name.type === "required" && "Name is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.email && (
                <p className="text-red-500">
                  {errors.email.type === "required" &&
                    "Email is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.number && (
                <p className="text-red-500">
                  {errors.number.type === "required" &&
                    "Phone number is required."}
                  {errors.number.type === "maxLength" &&
                    "Max length is 10 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Phone Number"
                {...register("number", {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors.message && (
                <p className="text-red-500">
                  {errors.message.type === "required" &&
                    "Message is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="Message"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              <button
                type="submit"
                className="mt-5 bg-primary-500 px-20 py-3 text-white transition duration-500"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsImage}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
