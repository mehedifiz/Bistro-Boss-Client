import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../Comonents/Sectiontitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

const Testmonials = () => {

    const [reviews , setReviews] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className='my-20'>
            <Sectiontitle subheading='What Our Client Say '  heading='Testimonials'></Sectiontitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
        reviews.map(review =>  <SwiperSlide
        key={review._id }> 
        <div className='m-24 flex flex-col items-center mx-24 my-16 gap-2'>
            <p className='text-7xl text-center'></p>
        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
             
            <p className='md:px-11 text-center font-Inter  '>{review.details}</p>
            <h3 className='text-2xl text-orange-600 font-Inter '>{review.name}</h3>


        </div>

        </SwiperSlide>)
       }
      </Swiper>
            
        </section>
    );
};

export default Testmonials;