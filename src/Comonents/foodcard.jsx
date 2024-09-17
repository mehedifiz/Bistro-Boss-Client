
const Foodcard = ({item}) => {

    const {name ,recipe, img, price } =item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
        <figure className="relative">
          <img
            src={img}
            alt="Caeser Salad"
            className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-lg">
           ${price}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{name}</h2>
          <p className="text-gray-500">
            {recipe}
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 w-full">ADD TO CART</button>
          </div>
        </div>
      </div>
      
    );
};

export default Foodcard;