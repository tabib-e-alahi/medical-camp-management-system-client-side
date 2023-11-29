import Camp from "./Camp";

import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { useEffect, useState } from "react";

const PopularCamps = () => {
  const axiosPublic = useAxiosPublic();

  const [popularCamps, setPopularCamps] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/popular-camps")
      .then((res) => {
        setPopularCamps(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosPublic]);

  const handleSorting = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    console.log("Popular camps cat: ", category);
    axiosPublic
      .get(`/popular-camps?sortBy=${category}`)
      .then((res) => {
        setPopularCamps(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  //   const handleSubmit = e=>{
  //     e.preventDefault();
  //     // const date = new Date();
  //     const campDate = e.target.campDate.value;
  //     // const formattedDate = moment(campDate).format('DD MMM YYYY, h:mmA');
  //     // console.log(formattedDate);
  //     console.log(campDate);
  //   }
  // console.log(loading);

  return (
    <div className=" ">
      <form className="flex gap-2 items-center" onSubmit={handleSorting}>
        <label htmlFor="" className="text-lg font-medium">
          Sort by Participant Engagement:
        </label>
        <select
          name="category"
          className="border-2 border-sky-200 rounded-md px-4 py-2"
        >
          <option disabled defaultValue={"Pick category"}>
            Sort by
          </option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
        <button className="bg-sky-400 py-2 px-5 text-white font-medium rounded-md">
          Sort
        </button>
      </form>

      <h1 className="text-4xl font-semibold mb-8 mt-10">
        Popular medical camps:
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10  px-4  lg:px-0">
        {popularCamps.map((camp) => (
          <Camp key={camp.name} camp={camp}></Camp>
        ))}
      </div>
    </div>
  );
};

export default PopularCamps;


