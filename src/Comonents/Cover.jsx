import PopularMenu from "../Pages/Home/PopularMenu";
import { Parallax, Background } from 'react-parallax';

const Cover = ({img , title , slogan}) => {
    return (
      <Parallax
      blur={{ min: 40, max: -60 }}
      bgImage={img}
      bgImageAlt="the cover"
      strength={-200}
  > 
   <div>
        <div
  className="hero h-[600px]">


  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5  uppercase text-5xl font-bold font-Cinzel">{title}</h1>
      <p className="mb-5 font-Cinzel font-semibold">
        {slogan}
      </p>
    </div>
  </div>

</div>
    </div>
  </Parallax>
     
    );
};

export default Cover;