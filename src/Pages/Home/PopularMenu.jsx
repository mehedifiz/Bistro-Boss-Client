import { useEffect, useState } from "react";
import Sectiontitle from "../../Comonents/Sectiontitle";
import Menuitems from "../../Comonents/Menuitems";


const PopularMenu = () => {
    const[menu , setMenu] =useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopulerItems = data.filter(item => item.category === 'popular')
            setMenu(PopulerItems)})
    } ,[])
    return (
        <section className="my-12">
            <Sectiontitle heading="Fom our menu" subheading="Populer Items"></Sectiontitle>

            <div className="grid md:grid-cols-2 gap-6 ">
                {

                    menu.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                }
            </div>

            
        </section>
    );
};

export default PopularMenu;