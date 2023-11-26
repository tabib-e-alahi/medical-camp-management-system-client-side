import { useEffect, useState } from "react";
import Camp from "./Camp";




const PopularCamps = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("camps.json")
      .then((res) => res.json())
      .then((data) => setCamps(data));
  }, []);

//   const handleSubmit = e=>{
//     e.preventDefault();
//     // const date = new Date();
//     const campDate = e.target.campDate.value;
//     // const formattedDate = moment(campDate).format('DD MMM YYYY, h:mmA');
//     // console.log(formattedDate);
//     console.log(campDate);
//   }


  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-semibold mb-8">Popular medical camps:</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 px-10  lg:px-0">
        {camps.map((camp) => (
          <Camp key={camp.name} camp={camp}></Camp>
        ))}
      </div>
    </div>
  );
};

export default PopularCamps;
