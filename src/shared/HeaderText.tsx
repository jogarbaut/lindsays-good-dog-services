import Paw from "@/assets/paw-solid.png";

type Props = {
  children: React.ReactNode;
};

const HeaderText = ({ children }: Props) => {
  return (
    <div className="flex basis-3/5 items-center justify-center gap-3 text-center font-montserrat text-3xl font-bold">
      <h2>{children} </h2>
      <img src={Paw} alt="Paw" className="h-6 w-6" />
    </div>
  );
};

export default HeaderText;
