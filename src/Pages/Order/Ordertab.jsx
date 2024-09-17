import Foodcard from "../../Comonents/foodcard";

const Ordertab = ({item}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
            item.map(item => <Foodcard item={item} key={item._id}></Foodcard>)
            
            }</div>
    );
};

export default Ordertab;