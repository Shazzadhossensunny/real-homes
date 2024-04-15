import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import bannerImg1 from '../assets/banner1.jpg'
import bannerImg2 from '../assets/banner2.jpg'
import bannerImg3 from '../assets/banner3.jpg'
export default function Banner() {
  return (

    <Swiper autoHeight={true} navigation={true} loop={true} modules={[Navigation]}>
        <SwiperSlide className='relative'>
          <div className='overlay'></div>
          <img src={bannerImg1} className="w-full h-full lg:h-[600px] object-cover object-center" />
        <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>Villa on Grand Avenue</h1>
          <p className='text-white text-lg hidden md:block'>Experience refined luxury at Villa on Grand Avenue, nestled in the heart of the vibrant cityscape. Our exclusive retreat offers meticulously designed accommodations, world-class amenities, and personalized service.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='overlay'></div>
        <img src={bannerImg2} className="w-full h-full lg:h-[600px] object-cover object-center" />
        <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>Home in Coral Gables</h1>
          <p className='text-white text-lg hidden md:block'>Discover timeless elegance in this exquisite Coral Gables home. Nestled amidst lush surroundings, this residence offers the perfect blend of sophistication and tranquility. Featuring luxurious amenities and impeccable design, it's a sanctuary of comfort and style</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='overlay'></div>
        <img src={bannerImg3} className="w-full h-full lg:h-[600px] object-cover object-center" />
        <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>Villa on Hollywood Boulevard</h1>
          <p className='text-white text-lg hidden md:block'>Experience luxury living in the heart of the entertainment capital. Our villa on Hollywood Boulevard offers unparalleled elegance and sophistication. With stunning views, upscale amenities, and proximity to iconic landmarks, it's the epitome of Hollywood glamour.</p>
        </div>
        </SwiperSlide>
      </Swiper>
  )
}
