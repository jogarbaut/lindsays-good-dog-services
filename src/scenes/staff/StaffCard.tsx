import { motion } from "framer-motion";

type Props = {
  name: string;
  photo: string;
  role: string;
  background: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const StaffCard = ({ name, photo, role, background }: Props) => {
  return (
    <motion.div
      className="mt-5 px-4 py-8 text-center border border-slate-300 rounded flex flex-col gap-4 items-center justify-center"
      variants={childVariant}
    >
      <div className="rounded-full border border-primary-100 overflow-hidden h-32 w-32 mx-auto">
        <img src={photo} alt="profile photo" />
      </div>
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="font-semibold">{role}</div>
      <div className="">{background}</div>
    </motion.div>
  )
}

export default StaffCard