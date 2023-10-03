import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center my-6 space-y-4">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-xl text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
