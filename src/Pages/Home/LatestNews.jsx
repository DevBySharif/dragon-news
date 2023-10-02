import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-primary">Latest</button>
      <Marquee pauseOnHover="true" speed={200}>
        hello im latest news
      </Marquee>
    </div>
  );
};

export default LatestNews;
