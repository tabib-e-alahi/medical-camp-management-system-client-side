import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";
import "./CampDetails.css";

const CampDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);
  // axiosSecure.get(`/camp-details/${id}`)

  const {
    data: camp = {},
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["camp"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/camp-details/${id}`);
      return res.data;
    },
  });

  console.log(camp);

  const {
    name,
    image,
    fees,
    scheduledDateAndTime,
    venueLocation,
    specializedServicesProvided,
    healthcareProfessionalsInAttendance,
    targetAudience,
    participantCount,
    description,
    accommodationInformation,
    cancellationRefundPolicy,
    whatToBring,
  } = camp;
  const newLocation = venueLocation?.split(",");
  console.log(newLocation);

  const formattedDate =
    moment(scheduledDateAndTime).format("DD MMM YYYY, h:mmA");
  console.log(specializedServicesProvided);

  return (
    <div className="mt-16 grid grid-cols-3 gap-24">
     
      <div className="col-span-2">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              className="h-[500px]"
              image={image}
              alt="green iguana"
            />
            <CardContent className="">
              <h1 className="text-4xl font-bold mb-6">{name}</h1>
              <Typography color="text.secondary">{description}</Typography>
              <h4 className="text-xl font-medium "></h4>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="flex ">
          <div className="block w-fit  rounded-sm mt-10 px-2 pt-10 space-y-4  ">
            <h1 className="text-3xl font-semibold custom-class text-center">
              Recommended for: <br />{" "}
              <span className="text-2xl font-medium">{targetAudience}</span>
            </h1>
            <h1 className="text-3xl font-semibold custom-class text-center">
              What to bring: <br />{" "}
              <span className="text-2xl font-normal">{whatToBring}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* right side column======================== */}

      <div className="flex flex-col gap-12 ">
        <div className="flex items-center gap-4">
          <button className="bg-[#f60] hover:bg-[#cd926a] w-[10rem] text-white px-5 py-3 text-xl font-medium rounded-md">
            Join Camp
          </button>
          <p className="text-2xl font-bold ">
            Join Fee: <span className="custom-class text-2xl">{fees}$</span>
          </p>
        </div>
        <div className="block max-w-[22rem]  rounded-lg bg-white border-2 ">
          <div className="p-4 ">
            <h5 className="text-2xl  font-bold">Special Services:</h5>
          </div>
          <ul className="w-full">
            {specializedServicesProvided?.map((service, idx) => (
              <li
                className="w-full last:rounded-b-lg text-lg font-semibold border-b-2 bg-[#eea97b] hover:bg-[#f60] border-neutral-50 text-white border-opacity-100 px-6 py-3 "
                key={idx}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="block max-w-[22rem]   rounded-lg bg-white border-2 ">
          <div className="p-4 ">
            <h5 className="text-2xl  font-bold">Professionals:</h5>
          </div>
          <ul className="w-full">
            {healthcareProfessionalsInAttendance?.map((professional, idx) => (
              <li
                className="w-full text-lg font-semibold border-b-2 bg-[#eea97b] last:rounded-b-lg hover:bg-[#f60] border-neutral-50 text-white border-opacity-100 px-6 py-3 "
                key={idx}
              >
                {professional}
              </li>
            ))}
          </ul>
        </div>

        <div className="block max-w-[22rem] pb-6 rounded-sm  pt-10 space-y-4 border-2 border-[#eea97b]">
          <h1 className="text-4xl font-bold text-center custom-class">Venue</h1>
          <div className="w-20 h-20 mx-auto bg-[#3B251A] rounded-full flex justify-center items-center">
            <SlLocationPin className="text-[#f60] h-10 w-10" />
          </div>
          <div className="flex flex-col gap-2 mt-6 custom-class">
            {newLocation?.map((location, idx) => (
              <p
                key={idx}
                className="text-3xl text-[#3B251A] font-medium text-center"
              >
                {location}
              </p>
            ))}
          </div>
          <p className="font-bold text-2xl">
            <span className="text-lg font-semibold pl-2">Will be held:</span>{" "}
            <span className="custom-class">{formattedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
