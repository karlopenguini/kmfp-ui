import Logo from "./svg/Logo";
import Wave from "./svg/Wave";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <Logo />
      <Wave />
    </div>
  );
};

export default Header;
