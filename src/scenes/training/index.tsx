import { SelectedPage, PhotoType } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Slider from "@/shared/Slider";
import HeaderTextAlt from "@/shared/HeaderTextAlt";

const photos: Array<PhotoType> = [
  {
    id: 1,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-1_qfjs4p.png",
  },
  {
    id: 2,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359608/lindsays-good-dog-services/Training/dog-training-7_emahjk.png",
  },
  {
    id: 3,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359608/lindsays-good-dog-services/Training/dog-training-17_jmaoxa.png",
  },
  {
    id: 4,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359608/lindsays-good-dog-services/Training/dog-training-12_uxulpi.png",
  },
  {
    id: 5,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359607/lindsays-good-dog-services/Training/dog-training-14_vdqm0w.png",
  },
  {
    id: 6,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359606/lindsays-good-dog-services/Training/dog-training-13_tgj7co.png",
  },
  {
    id: 7,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359598/lindsays-good-dog-services/Training/dog-training-11_lrqt5c.png",
  },
  {
    id: 8,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359598/lindsays-good-dog-services/Training/dog-training-8_fnrgkl.png",
  },
  {
    id: 9,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359598/lindsays-good-dog-services/Training/dog-training-18_olrovh.png",
  },
  {
    id: 10,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359598/lindsays-good-dog-services/Training/dog-training-9_wayww2.png",
  },
  {
    id: 11,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359597/lindsays-good-dog-services/Training/dog-training-15_syheag.png",
  },
  {
    id: 12,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359597/lindsays-good-dog-services/Training/dog-training-10_vqtuvb.png",
  },
  {
    id: 13,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-4_fweyst.png",
  },
  {
    id: 14,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-6_eqc7e8.png",
  },
  {
    id: 15,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-2_bjrkow.png",
  },
  {
    id: 16,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359585/lindsays-good-dog-services/Training/dog-training-5_k3nhmf.png",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Training = ({ setSelectedPage }: Props) => {
  return (
    <section id="training" className="mx-auto w-5/6 max-w-7xl py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Training)}
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
          <HeaderText>Classes & Training</HeaderText>
          <p className="text-md my-5 w-full text-center">We offer classes and training that are led by our experienced staff. Classes and trainings come in a variety of formats. We love to help dogs with people problems!</p>
          <p className="text-md my-5 w-full text-center">Please contact us to register your pet.</p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="overflow-hidden rounded-lg md:w-3/5">
              {/* Slider */}
              <Slider items={photos} />
            </div>
            <div className="mx-auto flex flex-1 flex-col items-center justify-center gap-6 text-center text-sm text-primary-300 md:text-base">
              <div className="border border-slate-300 rounded drop-shadow-sm py-4 px-8">
                <HeaderTextAlt>Classes</HeaderTextAlt>
                <div>
                  6 Week Puppy -
                  <span className="font-bold text-primary-500"> $150</span>
                </div>
                <div>
                  5 Week Adult -
                  <span className="font-bold text-primary-500"> $150</span>
                </div>
              </div>
              <div className="border border-slate-300 rounded drop-shadow-sm py-4 px-8">
                <HeaderTextAlt>Consultation</HeaderTextAlt>
                <div>
                  In Shop -
                  <span className="font-bold text-primary-500"> $75</span>
                </div>
                <div>
                  At Home -
                  <span className="font-bold text-primary-500"> $150</span>
                </div>
              </div>
                            <div className="border border-slate-300 rounded drop-shadow-sm py-4 px-8">
                <HeaderTextAlt>Private Sessions - $150 Per Hour</HeaderTextAlt>
                <div>
                  5 At Home Sessions -
                  <span className="font-bold text-primary-500"> $625</span>
                </div>
                <div>
                  5 In Shop Sessions -
                  <span className="font-bold text-primary-500"> $500</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Training;
