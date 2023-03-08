import { motion } from "framer-motion";

type Props = {
  imageURL: string;
  description: string;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const GalleryItem = ({imageURL, description}: Props) => {
  return (
    <motion.div 
      className="text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center items-center">
        <div className="overflow-hidden w-full h-48 rounded-lg">
          <img src={imageURL} alt={description} className="object-cover h-full w-full object-center"/>
        </div>
      </div>
      <p className="my-3">{description}</p>
    </motion.div>
  )
}

export default GalleryItem