import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Estate from "../components/Estate";
import Partner from "../components/Partner";
import Trusted from "../components/Trusted";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Real Homes | Home</title>
      </Helmet>
      <Banner></Banner>
      <Partner></Partner>
      <div className="bg-[#F2F3F7]">
        <Estate></Estate>
      </div>
      <Trusted></Trusted>
    </div>
  )
}
