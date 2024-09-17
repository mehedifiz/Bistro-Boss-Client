import useMenu from "../Hooks/useMenu";
import Cover from "./Cover";
import Menuitems from "./Menuitems";

const MenuCategory = ({items , title , slogan , img}) => {
  
    return (
        <div className="p-8">
        { title && <Cover img={img} title={title} slogan={slogan} ></Cover>}

<div className="grid md:grid-cols-2 gap-10 mt-16 ">
      {  
        items.map(item => <Menuitems 
            key={item._id} item={item}></Menuitems>)
                }
            </div>


            
        </div>
    );
};

export default MenuCategory;