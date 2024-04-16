import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import t5 from '../assets/t5.png'
import t6 from '../assets/t6.png'
import t7 from '../assets/t7.png'
export default function Trusted() {
  return (
    <div className="my-9 lg:my-24 container mx-auto px-3 xl:px-0">
        <h3 className="text-lg font-semibold text-center">Trusted by <span className="text-[#1db2ff] ">2000+</span> businesses</h3>
        <div className="mt-8 flex lg:justify-between flex-wrap gap-5">
          <img src={t1} alt="" />
          <img src={t2} alt="" />
          <img src={t3} alt="" />
          <img src={t4} alt="" />
          <img src={t5} alt="" />
          <img src={t6} alt="" />
          <img src={t7} alt="" />

        </div>
    </div>
  )
}
