import { SelectedPage, StaffType } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import StaffCard from "./StaffCard";

const staff: Array<StaffType> = [
  {
    id: 1,
    name: "Lindsay",
    role: "Owner, Groomer, Trainer",
    background: "To be filled in",
    photo: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684416667/lindsays-good-dog-services/profile-pic_auh8bn.png"
  },
  {
    id: 2,
    name: "Walt",
    role: "Trainer, Head of Maintenance, Bather",
    background: "To be filled in",
    photo: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684416667/lindsays-good-dog-services/profile-pic_auh8bn.png"
  },
  {
    id: 3,
    name: "Samantha",
    role: "Office Manager, Bather",
    background: "To be filled in",
    photo: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684416667/lindsays-good-dog-services/profile-pic_auh8bn.png"
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Staff = ({ setSelectedPage }: Props) => {
  return (
    <section id="staff" className="mx-auto w-5/6 max-w-7xl py-24">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Staff)}>
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
          <HeaderText>Staff</HeaderText>
        </motion.div>
        {/* Staff */}
        <motion.div
          className="mt-5 items-start justify-between gap-4 grid grid-cols-1 w-1/2 md:grid-cols-3 md:w-full mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {staff.map((staff: StaffType) => (
            <StaffCard
              key={staff.id}
              name={staff.name}
              role={staff.role}
              background={staff.background}
              photo={staff.photo}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Staff;
