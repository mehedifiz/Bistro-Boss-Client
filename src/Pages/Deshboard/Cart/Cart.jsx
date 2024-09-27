import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const Cart = () => {
  const [ ,refetch ] = useCart();
  const axiosSecure = useAxios();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/carts/${id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was a problem deleting the item.",
          icon: "error"
        });
      }
    }
  };
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className=" flex justify-evenly">
        <h2 className="text-4xl">Items : {cart.length}</h2>
        <h2 className="text-4xl">Total Price : ${totalPrice}</h2>
        <button className="btn btn-secondary">Payment</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>IMAGE</th>
              <th>NAEM</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
  cart.map((item , IDX) => (
    <tr key={item._id}> 
      <th>
        <label>
            
            {IDX+1}

        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={item.img} // Use dynamic image source
                alt="fOOD IMAGE "
              />
            </div>
          </div>
         
        </div>
      </td>
      <td>
      <div>
            <div className="font-bold">{item.name}</div> {/* Use dynamic name */}
            <div className="text-sm opacity-50">{item.category }</div> {/* Use dynamic location */}
          </div>
      </td>
      <td>${item.price}</td> {/* Use dynamic color */}
      <th>
        <button onClick={()=> handleDelete(item._id)}  className="btn btn-ghost btn-xl"><FaTrash className="text-orange-700"></FaTrash></button>
      </th>
    </tr>
  ))
}

         
          
          
          
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Cart;
