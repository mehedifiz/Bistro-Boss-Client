import { Helmet } from "react-helmet-async";
import Cover from "../../Comonents/Cover";
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>

            </Helmet>
            <Cover img={img} title={'OUR MENU'} slogan={'Would you like to try a dish?'} ></Cover>
          
        </div>
    );
};

export default Menu;