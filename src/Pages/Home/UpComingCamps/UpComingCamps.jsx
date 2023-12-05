import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import UpComingCamp from "./UpComingCamp";


const UpComingCamps = () => {

    const axiosPublic = useAxiosPublic();

    const { data: upComingCamps = [] } = useQuery({
        queryKey: ['upComingCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upComing-camps');
            return res.data;
        }
    })
    console.log(upComingCamps)



    return (
        <div className="mt-16">
            <h1 className="text-5xl font-semibold text-center mb-12">UpComing Camps</h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10  px-4  lg:px-0">
        {upComingCamps.map((camp) => (
          <UpComingCamp key={camp.name} camp={camp}></UpComingCamp>
        ))}
      </div>
        </div>
    );
};

export default UpComingCamps;