import AvailableCamp from "./AvailableCamp";
// import useCamps from "../../hooks/useCamps";
import Lottie from "lottie-react";
import loader from '../../Routes/loader.json'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const AvailableCamps = () => {
  // const [camps, loading] = useCamps();
  const axiosSecure = useAxiosSecure()
  const { data: camps = [],isPending: loading } = useQuery({
    queryKey: ['camps'],
    queryFn: async () => {
        const res = await axiosSecure.get('/camps');
        return res.data;
    }
})s
  
  return (
    <>
      {
        loading ?
        <Lottie className="w-3/4 mx-auto" animationData={loader} loop={true} />
        :
        <div className=" mt-8lg:mt-16">
          <h1 className="text-center text-5xl mb-6 lg:mb-16 font-bold">
            Available Camps
          </h1>
          <div className="grid grid-cols-1  gap-10">
            {camps?.map((camp, idx) => (
              <AvailableCamp key={idx} camp={camp}></AvailableCamp>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default AvailableCamps;
