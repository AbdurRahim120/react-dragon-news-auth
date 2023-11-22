import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className=" text-center space-y-2 my-5">
      <img src={logo} alt="" className=" mx-auto" />
      <p className="font-medium">Journalism Without Fear or Favour</p>
      <p className="text-xl font-thin">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
