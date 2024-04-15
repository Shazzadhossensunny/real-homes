
import catImg1 from '../assets/cta-1.jpg'
import catImg2 from '../assets/cta-2.jpg'
import catImg3 from '../assets/cta-3.jpg'
import catImg4 from '../assets/cta-4.jpg'
export default function Partner() {
  return (
    <div className="container mx-auto my-9 lg:my-24 p-3 lg:p-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 w-full lg:w-[48%]">
                <h2 className="text-3xl font-bold text-[#1a1a1a]">We are your partner in creating a legacy building facade.</h2>
                <p className="text-[#808080]">We are one of the leading developers in europe providing exquisitely designed modern living villas in unique locations. We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.</p>
                <button className="btn bg-[#1DB2FF] text-white text-lg">Read More</button>
            </div>
            <div className="w-full h-full lg:h-[628px] lg:w-[48%] grid grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-1 lg:grid-rows-3">
                <img className='w-full h-full object-cover rounded-2xl row-auto lg:row-span-2 object-center transition-all hover:-translate-y-1'  src={catImg1} alt="" />
                <img className='w-full h-full object-cover rounded-2xl object-center transition-all hover:-translate-y-1' src={catImg3} alt="" />
                <img className='w-full h-full object-cover rounded-2xl row-auto lg:row-span-2 object-center transition-all hover:translate-y-1'   src={catImg4} alt="" />
                <img className='w-full h-full object-cover rounded-2xl object-center transition-all hover:translate-y-1' src={catImg2} alt="" />
            </div>
        </div>

    </div>
  )
}
