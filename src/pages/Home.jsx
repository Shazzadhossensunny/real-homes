import Banner from "../components/Banner";
import Estate from "../components/Estate";
import Partner from "../components/Partner";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <div className="bg-[#F2F3F7]">
        <Estate></Estate>
      </div>
    </div>
  )
}
