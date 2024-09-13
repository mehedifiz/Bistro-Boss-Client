import { useEffect, useState } from "react";
import Sectiontitle from "../../Comonents/Sectiontitle";
import Menuitems from "../../Comonents/Menuitems";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')




    
    return (
        <section className="my-12">
            <Sectiontitle heading="Fom our menu" subheading="Populer Items"></Sectiontitle>

            <div className="grid md:grid-cols-2 gap-6 ">
                {

                    popular.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                }
            </div>

            
        </section>
    );
};

export default PopularMenu;