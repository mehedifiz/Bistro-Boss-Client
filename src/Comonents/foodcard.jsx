import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";


const Foodcard = ({item}) => {

  const {user} = useAuth();

    const {name ,recipe, img, price } =item;

    const handleAddtoCart =(item)=>{

        if( user && user?.email){



        }
      else{
        
        Swal.fire({
          title: "Login Required",
          text: "You need to log in to access your cart.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Login Now",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to the login page
            window.location.href = "/login";
          }
        });
      }

    }

    return (
        <div className="card bg-slate-50 w-96 shadow-xl relative">
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
            <button onClick={()=>handleAddtoCart(item)}
            
            className="btn w-full bg-slate-100 text-orange-600 border-0 border-b-2 border-orange-600 hover:bg-gray-800 hover:text-orange-600 ">ADD TO CART</button>
          </div>
        </div>
      </div>
      
    );
};

export default Foodcard;