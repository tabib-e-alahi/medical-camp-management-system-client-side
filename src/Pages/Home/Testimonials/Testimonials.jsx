import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonials.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testimonials = () => {

    const axiosPublic = useAxiosPublic()
    const { data: testimonials = [] } = useQuery({
      queryKey: ["testimonials"],
      queryFn: async () => {
        const res = await axiosPublic.get('/testimonials');
        return res.data;
      },
    });
    console.log(testimonials);



  return (
    <div className="mt-20 pt-8 border bg-rose-50 border-rose-400 rounded-lg">
        <h1 className=" mb-8 text-5xl text-center font-semibold text-rose-500">Testimonials</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {testimonials.map((test) => <SwiperSlide key={test._id}>
          <blockquote className="rounded-lg h-full bg-rose-200 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src={test.testimonial?.image}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {/* ====== */}
                  <Rating
                    name="read-only"
                    value={test.testimonial.ratings}
                    precision={0.2}
                    readOnly
                  />
                </div>
                <p className="mt-0.5 text-lg  font-bold ">
                 {test.testimonial.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
            <p className="mt-4 flex-1 ">
              {test.testimonial.feedback}
            </p>
            <p className="fixed bottom-4">
                Camp Title: {test.testimonial.camp_name}
            </p>
            </div>
          </blockquote>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Testimonials;
