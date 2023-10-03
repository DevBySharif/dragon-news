import { FaEye } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";

const Home = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className=" border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border space-y-5">
          <h1 className="text-xl font-semibold py-4 pl-4">Dragon News Home</h1>
          {newsData.map((news) => (
            <div
              key={news._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <div className="h-[80px] bg-gray-200 flex items-center">
                <div className="flex items-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={news.author.img} alt="" />
                    </div>
                  </label>
                  <div>
                    <h3>{news.author.name}</h3>
                    <p>{news.author.published_date}</p>
                  </div>
                </div>
                <div></div>
              </div>
              <h2 className="text-xl font-bold px-4 py-4">{news.title}</h2>
              <figure className="px-4">
                <img src={news.image_url} alt="Shoes" />
              </figure>
              <div className="card-body p-4">
                {news.details.length > 200 ? (
                  <p>
                    {news.details.slice(0, 200)}{" "}
                    <Link
                      to={`/news/${news._id}`}
                      className="text-blue-600 font-bold"
                    >
                      Read more...
                    </Link>
                  </p>
                ) : (
                  <p>{news.details}</p>
                )}

                <hr />
                <div className="card-actions justify-between">
                  <div>
                    <Rating
                      emptySymbol={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      }
                      fullSymbol={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      initialRating={news.rating.number}
                      readonly
                    />
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <FaEye></FaEye>
                    {news.total_view}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
