import { Helmet } from "react-helmet-async";
import Cover from "../../Comonents/Cover";
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import Sectiontitle from "../../Comonents/Sectiontitle";
import MenuCategory from "../../Comonents/MenuCategory";
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered =menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>

            </Helmet>
            <Cover img={img} title={'OUR MENU'} slogan={'Would you like to try a dish?'} ></Cover>
            <Sectiontitle subheading={"Don't miss"} heading="Today's Offers" ></Sectiontitle>
            {/* offered menu items */}

            <MenuCategory items={offered}></MenuCategory>


              {/* dessert menu items */}

              <MenuCategory items={dessert}
              title='dessert'
              slogan='Sweeten your day, one dessert at a time!'
             
              img={dessertBg}
              ></MenuCategory>

               {/* pizza menu items */}

               <MenuCategory items={pizza}
              title='pizza'
             slogan='Slice into happiness with every bite!'
              img={pizzaBg}
              ></MenuCategory>
          
            {/* soup menu items */}

            <MenuCategory items={soup}
              title='soup'
             slogan='Warm your soul with every spoonful!'
              img={soupBg}
              ></MenuCategory>

                {/* salad menu items */}

            <MenuCategory items={salad}
              title='salad'
             slogan='Fresh, crisp, and full of flavor in every bite!'
              img={saladBg}
              ></MenuCategory>
        </div>

        
    );
};

export default Menu;