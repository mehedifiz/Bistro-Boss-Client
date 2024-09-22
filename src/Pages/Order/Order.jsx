import ordercover from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Comonents/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useContext, useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import Ordertab from './Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Authcontext } from '../../firebase/Providers/Authprovider';
const Order = () => {
  const categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks'];
  const {category} = useParams()
  const initaialndex = categories.indexOf(category);
  const {loading} = useContext(Authcontext)
    const [tabIndex , setTabIndex]  = useState(initaialndex)

    const [menu] = useMenu()


    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'salad')
    const offered =menu.filter(item => item.category === 'offered')
  


    return (
        <div>

          <Helmet>
            <title>Bistro Boss | Order Food </title>
          </Helmet>
            <Cover img={ordercover} 
            title='Order Food'
            slogan='Would you like to try a dish?'
            ></Cover>
            

<Tabs className='mt-24 ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      {/* ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']; */}
      <TabPanel>
      <Ordertab item={salad}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={pizza}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={soup}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={dessert}></Ordertab>
      </TabPanel>     
      <TabPanel>
      <Ordertab item={drinks}></Ordertab>
      </TabPanel>
       
    </Tabs>

        </div>
    );
};

export default Order;