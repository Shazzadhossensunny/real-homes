import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import bannerImg1 from '../assets/banner1.jpg'
import bannerImg2 from '../assets/banner2.jpg'
import bannerImg3 from '../assets/banner3.jpg'
export default function Banner() {
  return (

    <Swiper  navigation={true} loop={true} modules={[Navigation]}>
        <SwiperSlide>
        <img src={bannerImg1} className="w-full h-full lg:h-[600px] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={bannerImg2} className="w-full h-full lg:h-[600px] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={bannerImg3} className="w-full h-full lg:h-[600px] object-cover object-center" />
        </SwiperSlide>
      </Swiper>
  )
}
