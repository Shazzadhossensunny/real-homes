import { useLoaderData, useParams } from "react-router-dom"


export default function EstateDetails() {
    const data = useLoaderData()
    const {id} = useParams()
    const estateDetail = data.find((item) => item.id == id)
    const {image, property_id, bedrooms, bathrooms, garage, year_built, area, description, additional_details} = estateDetail


  return (
    <div>EstateDetails</div>
  )
}
