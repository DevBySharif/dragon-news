import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import leftNavImg1 from "../../../assets/1.png";
import leftNavImg2 from "../../../assets/2.png";
import leftNavImg3 from "../../../assets/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">All Categories</h1>
      {categories.map((category) => (
        <NavLink
          className="block text-lg font-medium px-4"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}

      <div className="space-y-3">
        <div className="card card-compact  bg-base-100 shadow-xl space-y-2">
          <figure>
            <img src={leftNavImg1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <SlCalender></SlCalender> Jan 4,2022
              </span>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl space-y-2">
          <figure>
            <img src={leftNavImg2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <SlCalender></SlCalender> Jan 4,2022
              </span>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl space-y-2">
          <figure>
            <img src={leftNavImg3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <SlCalender></SlCalender> Jan 4,2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
