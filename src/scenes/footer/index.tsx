import HomePageLogo from "@/assets/HomePageLogo.jpeg";
import { SelectedPage } from "@/shared/types";
import FooterLink from "./FooterLink";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-300 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/3 md:mt-0">
          <img alt="logo" src={HomePageLogo} className="mb-4 max-h-[120px]" />
          <p>&copy; Lindsay's Good Dog Services</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-1">
          <h4 className="font-bold my-2">Links</h4>
          <FooterLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <FooterLink
            page="Our Services"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <FooterLink
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <FooterLink
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-1">
          <h4 className="font-bold my-2">Contact</h4>
          <div>325 S Grand Ave, Pullman, WA 99163</div>
          <div>(509) 715-1009</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
