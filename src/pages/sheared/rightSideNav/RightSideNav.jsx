import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div className="border-2 p-4">
      <div className=" space-y-3 mb-8">
        <h2 className=" font-bold">Login With</h2>
        <button className=" btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className=" btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="">
        <h2 className=" font-bold mb-4">Find Us On</h2>
        <a href="" className="flex items-center border p-3 rounded-t-lg">
            <FaFacebook></FaFacebook>
            <span className="ml-4">Facebook</span>
        </a>
        <a href="" className="flex items-center border-x p-3">
            <FaTwitter></FaTwitter>
            <span className="ml-4">Twitter</span>
        </a>
        <a href="" className="flex items-center border p-3 rounded-b-lg">
            <FaInstagram></FaInstagram>
            <span className="ml-4">Instagram</span>
        </a>
      </div>
      <div className=" space-y-3 mt-8">
        <h2 className=" font-bold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
