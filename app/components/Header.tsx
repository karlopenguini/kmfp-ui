import Logo from "./svg/Logo";
import Wave from "./svg/Wave";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="max-md:mx-auto scale-75">
        <Logo />
      </div>
      <div className="max-md:hidden">
        <Wave />
      </div>
    </div>
  );
};

export default Header;
