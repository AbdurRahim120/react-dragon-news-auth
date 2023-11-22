import Navber from "../sheared/Navbar/Navber";
import Header from "../sheared/header/Header";
import LeftSideNav from "../sheared/leftSideNav/LeftSideNav";
import RightSideNav from "../sheared/rightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";

const Home = () => {
  return (
    <div>
        <Header></Header>
        <BrakingNews></BrakingNews>
        <Navber></Navber>
      
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2">
          <h2 className="text-4xl">
            news comming soon
          </h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
