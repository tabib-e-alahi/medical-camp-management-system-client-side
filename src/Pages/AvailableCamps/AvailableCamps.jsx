import { useEffect, useState } from "react";
import AvailableCamp from "./AvailableCamp";

const AvailableCamps = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    fetch("camps.json")
      .then((res) => res.json())
      .then((data) => setCamps(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto  mt-8 lg:mt-16">
        <h1 className="text-center text-5xl mb-6 lg:mb-16 font-bold">Available Camps</h1>
      <div className="grid grid-cols-1  gap-10">
        {camps.map((camp, idx) => (
          <AvailableCamp key={idx} camp={camp}></AvailableCamp>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
