import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <a
          className="text-lg border-2 p-3 rounded-t-lg flex items-center gap-2"
          href=""
        >
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a className="text-lg border-2 p-3  flex items-center gap-2" href="">
          <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a
          className="text-lg border-2 p-3 rounded-b-lg flex items-center gap-2"
          href=""
        >
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-lg font-semibold">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
