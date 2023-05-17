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
        className="duartion-300 absolute top-1/2 left-0 cursor-pointer rounded bg-primary-500/30 p-2 text-2xl text-white hover:bg-primary-500 hover:duration-300"
        onClick={handlePreviousArrowClick}
      >
        <ChevronLeftIcon className="h-4 w-4 md:h-8 md:w-8" />
      </div>
      <div
        className="absolute top-1/2 right-0 cursor-pointer rounded bg-primary-500/30 p-2 text-2xl text-white duration-300 hover:bg-primary-500 hover:duration-300"
        onClick={handleNextArrowClick}
      >
        <ChevronRightIcon className="h-4 w-4 md:h-8 md:w-8" />
      </div>
      <div className="h-full w-5/6 md:w-full mx-auto duration-500">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="mx-auto w-full max-w-[500px] rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Slider;
