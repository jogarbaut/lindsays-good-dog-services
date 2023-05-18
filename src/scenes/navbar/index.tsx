import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "./Link";
import ActionButton from "@/shared/ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Paw from "@/assets/paw-solid.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isUserTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isUserTopOfPage }: Props) => {
  // Boolean for media size to use query hook
  const isSmallScreenAndAbove = useMediaQuery("(min-width:768px)");

  // Conditional navbar style
  const navbarBackground = isUserTopOfPage
    ? ""
    : "bg-white drop-shadow transition duration-500";

  // State boolean for menuToggle
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="max-w-7xl w-full">
      <div
        className={`${navbarBackground} fixed top-0 z-30 flex w-full items-center justify-between py-4 transition duration-500`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between max-w-7xl">
          <div className="flex w-full items-center justify-between gap-16">
            <img alt="logo" src={Paw} className="h-6 w-6 text-white" />
            {isSmallScreenAndAbove ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                                    <Link
                    page="Staff"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Grooming"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Classes & Training"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Contact Us
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isSmallScreenAndAbove && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-300 drop-shadow-xl ">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
