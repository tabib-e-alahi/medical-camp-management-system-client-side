import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const CampDetails = () => {
    const axiosSecure = useAxiosSecure()
    const {id} = useParams()
    console.log(id);
    // axiosSecure.get(`/camp-details/${id}`)

    const {data: camp = {}, isPending: loading, refetch} = useQuery({
        queryKey: ['camp'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/camp-details/${id}`);
            return res.data;
        }
    })

    console.log(camp);




    return (
        <div>
            
        </div>
    );
};

export default CampDetails;