import { Helmet } from "react-helmet-async";



const HealmetTitle = ({title}) => {
    return <Helmet>
    <title>HealthCampus | {title}</title>
  </Helmet>
};

export default HealmetTitle;