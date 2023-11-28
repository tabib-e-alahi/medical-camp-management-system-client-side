import Camp from "./Camp";
import useCamps from "../../../hooks/useCamps";
import loader from "../../../Routes/loader.json";
import Lottie from "lottie-react";

const PopularCamps = () => {
  const [camps, loading] = useCamps();
  const popularCamps = camps.filter((camp) => camp.category === "popular");

  //   const handleSubmit = e=>{
  //     e.preventDefault();
  //     // const date = new Date();
  //     const campDate = e.target.campDate.value;
  //     // const formattedDate = moment(campDate).format('DD MMM YYYY, h:mmA');
  //     // console.log(formattedDate);
  //     console.log(campDate);
  //   }
  console.log(loading);

  return (
    <div className=" ">
      {loading ? (
        <Lottie className="w-3/4 mx-auto" animationData={loader} loop={true} />
      ) : (
        <>
          <h1 className="text-4xl font-semibold mb-8 mt-10">
            Popular medical camps:
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10  px-4  lg:px-0">
            {popularCamps.map((camp) => (
              <Camp key={camp.name} camp={camp}></Camp>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PopularCamps;
