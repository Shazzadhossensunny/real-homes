import { useEffect, useState } from "react"
import SingleEstate from "./SingleEstate"


export default function Estate() {
    const [estates, setEstates] = useState([])
    useEffect(()=>{
      fetch('/data.json')
      .then(res => res.json())
      .then(data => setEstates(data))
    },[])
    console.log(estates)
  return (
    <div className="py-9 lg:py-24 container mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a1a1a]">Discover Latest Properties</h2>
            <p className="text-[#808080] mt-3">Newest Properties Around You</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {
            estates.map((estate)=> <SingleEstate key={estate.id} estate={estate}></SingleEstate>)
          }
        </div>
    </div>
  )
}
