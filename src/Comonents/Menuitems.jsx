
const Menuitems = ({item}) => {
    const {name ,recipe, image , price } =item;
    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius : '0 200px 200px 200px '}} className="w-28 object-cover  " src={image} alt="" />
            <div className="">
                <h2 className=" font-thin text-2xl text-[#333232] font-Inter">{name}---------</h2>
                <p className="text-gray-600 font-Inter font-thin">{recipe}</p>
            </div>
                <p className="text-orange-500 font-Inter text-2xl ">${price}</p>
        </div>
    );
};

export default Menuitems;