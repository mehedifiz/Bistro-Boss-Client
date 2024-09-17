import ordercover from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Comonents/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import Foodcard from '../../Comonents/foodcard';
import Ordertab from './Ordertab';
const Order = () => {

    const [tabIndex , setTabIndex]  = useState(0)

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'salad')
    const offered =menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Cover img={ordercover} 
            title='Order Food'
            slogan='Would you like to try a dish?'
            ></Cover>

<Tabs className='mt-24 ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>PIZZA</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      
      <TabPanel>
      <Ordertab item={salad}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={soup}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={dessert}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={pizza}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab item={drinks}></Ordertab>
      </TabPanel>
       
    </Tabs>

        </div>
    );
};

export default Order;