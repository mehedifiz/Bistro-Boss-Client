import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../Comonents/Sectiontitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testmonials = () => {

    const [reviews , setReviews] = useState([])

    useEffect( ()=>{
        fetch('/reviews.json')
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
        <div className='m-24'>
            
            <p>{review.details}</p>
            <h3 className='text-2xl text-orange-600'>{review.name}</h3>


        </div>

        </SwiperSlide>)
       }
      </Swiper>
            
        </section>
    );
};

export default Testmonials;