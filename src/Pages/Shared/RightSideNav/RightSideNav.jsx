import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import bgRight from "../../../assets/bg1.png";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

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
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>

      {/* amazing news paper section */}

      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url(${bgRight})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
