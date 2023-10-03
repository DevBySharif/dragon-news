import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex">
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Latest
      </button>
      <Marquee pauseOnHover="true" speed={200}>
        hello im latest news
      </Marquee>
    </div>
  );
};

export default LatestNews;
