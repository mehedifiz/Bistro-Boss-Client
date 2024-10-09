import { FaTrash } from "react-icons/fa";
import Sectiontitle from "../../../Comonents/Sectiontitle";
import useMenu from "../../../Hooks/useMenu";
import { MdUpdate } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { BiRepost } from "react-icons/bi";
import useAxios from "../../../Hooks/useAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Manageitems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxios();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        
        // Log the response to verify if deletion was successful
        if(res.data.deletedCount > 0){
          refetch()
         toast.success(`${item.name} has been deleted`)

        }
  
      }
    });
  };
  

  const handleUpdate = (item) => {
    alert();
  };

  return (
    <div>
      <Sectiontitle
        heading="Managed all items"
        subheading="hurry up"
      ></Sectiontitle>

      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.name}</td>

                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    aria-label="Update "
                  >
                    <BiRepost className="text-orange-400 text-2xl" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    aria-label="Delete User"
                  >
                    <FaTrash className="text-2xl text-orange-600"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageitems;
