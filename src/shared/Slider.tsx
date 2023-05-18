import { useState } from "react";
import { PhotoType } from "./types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  items: Array<PhotoType>;
};

const Slider = ({ items }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextArrowClick = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePreviousArrowClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative grid h-full w-full content-center">
      <div
        className="duartion-300 absolute top-1/2 left-0 cursor-pointer rounded bg-primary-500/50 p-2 text-2xl text-white hover:bg-primary-500 hover:duration-300"
        onClick={handlePreviousArrowClick}
      >
        <ChevronLeftIcon className="h-3 w-3 md:h-5 md:w-5" />
      </div>
      <div
        className="absolute top-1/2 right-0 cursor-pointer rounded bg-primary-500/50 p-2 text-2xl text-white duration-300 hover:bg-primary-500 hover:duration-300"
        onClick={handleNextArrowClick}
      >
        <ChevronRightIcon className="h-3 w-3 md:h-5 md:w-5" />
      </div>
      <div className="h-full md:w-10/12 mx-auto duration-500">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="mx-auto w-full max-w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Slider;
