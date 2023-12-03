import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useParticipantCount = () => {
    const  axiosPublic = useAxiosPublic();
    const {  data: participatedCamps=[],refetch} =useQuery({
        queryKey: ['participatedCamps'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/campy-data')
            return res.data
        }
    })
    return [participatedCamps, refetch]
};

export default useParticipantCount;