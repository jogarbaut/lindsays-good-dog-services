import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

type Props = {
  icon: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Service = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-xl px-12 py-16 text-center border-neutral-400 border-[1px] drop-shadow-md bg-white"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full overflow-hidden">
          <img src={icon} alt={title} className="md:w-48 md:h-48 object-cover w-36 h-36"/>
        </div>
      </div>
      <h4 className="font-bold bg-primary-500 w-min whitespace-nowrap mx-auto py-1 px-4 text-white">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Contact To Book</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Service;
