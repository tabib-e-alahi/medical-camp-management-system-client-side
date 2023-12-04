import axios from "axios";
import {  useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  axios("speakers.json").then((res) => setSpeakers(res.data));

  return (
    <div className="mt-24">
      <h1 className="text-5xl font-serif text-center mb-16">Some WellKnown <span className="font-semibold text-[#F25421]">Speakers</span></h1>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-14">
       {
        speakers.map((speaker,idx) =>  
        <Card key={idx} sx={{ height: 350, width: 280,borderRadius:10,border:0,padding:0}}>
        <CardCover >
          <img
            src={speaker.speaker_img}
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'flex-end',paddingBottom:4 }} className=' hover:bg-[#F25421]  opacity-90 tracking-wide text-white rounded-lg' >
          <Typography textAlign='center' fontSize='24px' fontWeight='700' textColor='common.white' level="title-lg">
            {speaker.name}
          </Typography>
          <Typography textAlign='center' fontSize='18px' fontWeight='500' textColor='common.white' level="title-lg"
          >
            {speaker.designation}
          </Typography>
        </CardContent>
      </Card>)
       }
      </div>
    </div>
  );
};

export default Speakers;
