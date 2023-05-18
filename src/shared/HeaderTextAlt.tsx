type Props = {
  children: React.ReactNode;
};

const HeaderTextAlt = ({ children }: Props) => {
  return (
    <div className="w-full whitespace-nowrap py-1 text-center text-xl font-bold text-primary-500">
      &bull; {children} &bull;
    </div>
  );
};

export default HeaderTextAlt;
