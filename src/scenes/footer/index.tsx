import HomePageLogo from "@/assets/HomePageLogo.jpeg";
import { SelectedPage } from "@/shared/types";
import FooterLink from "./FooterLink";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-300 py-16 text-white w-full mx-auto">
      <div className="justify-content mx-auto w-5/6 md:flex">
        <div className="mt-16 basis-1/3 md:mt-0">
          <img alt="logo" src={HomePageLogo} className="mb-4 max-h-[120px]" />
          <p>&copy; Lindsay's Good Dog Services</p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col gap-1 md:mt-0">
          <h4 className="my-2 font-bold">Links</h4>
          <FooterLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <FooterLink
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <FooterLink
            page="Services"
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
        <div className="mt-16 flex basis-1/4 flex-col gap-1 md:mt-0">
          <h4 className="my-2 font-bold">Contact</h4>
          <address className="text-sm not-italic">
            <div className="font-bold">Address</div>
            <p>325 S Grand Ave, Pullman, WA 99163</p>
            <div className="mt-1 font-bold">Email</div>
            <a href="mailto:lindsaysgooddogservices@gmail.com">
              lindsaysgooddogservices@gmail.com
            </a>
            <div className="mt-1 font-bold">Phone</div>
            <a href="tel:+15097151009">(509) 715-1009</a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
