

import HealmetTitle from "../../../hooks/HealmetTitle";
import Banner from "../Banner/Banner";
import NewsLetter from "../Newsletter/NewsLetter";
import PopularCamps from "../PopularCamps/PopularCamps";
import Speakers from "./Speakers/Speakers";


const Home = () => {

  return (
    <div>
      <HealmetTitle title='Home'></HealmetTitle>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <Speakers></Speakers>
      <NewsLetter></NewsLetter>
      
    
    </div>
  );
};

export default Home;
