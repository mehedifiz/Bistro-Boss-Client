import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Sectiontitle from '../../Comonents/Sectiontitle';

const Category = () => {
    return (
      <section>
        <Sectiontitle subheading={'From 11.00am to 10.pm'} heading={'Order Online'}></Sectiontitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-2xl   uppercase text-white font-Inter italic font-thin text-center'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> 
        <h3 className='text-2xl -mt-24  uppercase text-white font-Inter italic font-thin text-center'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-2xl -mt-24  uppercase text-white font-Inter italic font-thin text-center'> Soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-2xl -mt-24  uppercase text-white font-Inter italic font-thin text-center'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-2xl -mt-24  uppercase text-white font-Inter italic font-thin text-center'>Salad</h3>
        </SwiperSlide>
       
      </Swiper>
      </section>
    );
};

export default Category;