import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";


const useCamps = () => {
    

    const axiosSecure = useAxiosSecure();

    const {data: camps = [], isPending: loading, refetch} = useQuery({
        queryKey: ['camps'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/camps');
            console.log(res.data);
            return res.data;
        }
    })
    console.log(camps);


    return [camps, loading, refetch]
};

export default useCamps;