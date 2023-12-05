

import HealmetTitle from "../../../hooks/HealmetTitle";
import Banner from "../Banner/Banner";
import NewsLetter from "../Newsletter/NewsLetter";
import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonials from "../Testimonials/Testimonials";
import Speakers from "./Speakers/Speakers";


const Home = () => {

  return (
    <div>
      <HealmetTitle title='Home'></HealmetTitle>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <Testimonials></Testimonials>
      <Speakers></Speakers>
      <NewsLetter></NewsLetter>
      
    
    </div>
  );
};

export default Home;
