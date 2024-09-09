import Sectiontitle from "../../Comonents/Sectiontitle";
import img from '../../assets/home/featured.jpg'
import'./Featured.css'

const Featured = () => { 
    return (
        <div className="featured-items bg-opacity-50  text-white pt-8 my-20">
                    <Sectiontitle subheading={'Check it out'} heading={'FROM OUR MENU'}></Sectiontitle>
            <div className="md:flex justify-center items-center pb-20 pt-12   px-36 ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10 font-Inter text-red-200  ">
                    <p  className="">March 20, 2023</p>
                    <p className="">WHERE CAN I GET SOME?</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 text-white mt-5
                    "> ORDER NOW</button> 
                </div>
            </div>


        </div>
    );
};

export default Featured;