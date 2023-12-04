import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";


const useParticipantCount = () => {
    
    const axiosSecure= useAxiosSecure()
    const {  data: participatedCamps=[],refetch} =useQuery({
        queryKey: ['participatedCamps'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/campy-data')
            return res.data
        }
    })
    return [participatedCamps, refetch]
};

export default useParticipantCount;