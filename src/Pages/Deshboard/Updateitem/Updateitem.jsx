import { useActionData, useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../Comonents/Sectiontitle";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import { FaUtensils } from "react-icons/fa";

const Updateitem = () => {
const imageHosting =  import.meta.env.VITE_IMAGE_HOSTING_KEY;

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure= useAxios();
  const imageHosting_api =`https://api.imgbb.com/1/upload?key=${imageHosting}`

        
    const {name , category, recipe , image , _id,price}  = useLoaderData();

    const onSubmit = async (data) => {
      console.log(data);
    
      let imageURL = image; // Start with the existing image from useLoaderData
    
      // Check if a new image is selected
      if (data.image && data.image.length > 0) {
        // If a new image is uploaded, handle the image upload process
        const newImage = data.image[0];
        const formData = new FormData();
        formData.append('image', newImage);
    
        // Upload the new image
        const res = await axiosPublic.post(imageHosting_api, formData);
    
        if (res.data.success) {
          // Use the newly uploaded image URL
          imageURL = res.data.data.display_url;
        }
      }
    
      // Now create the menu item with the image (whether it's new or the default one)
      const menuItem = {
        name: data.name,
        price: parseInt(data.price),
        category: data.category,
        recipe: data.recipe,
        image: imageURL // This will be the existing image or the new one
      };
    
      // Send menu item to the backend
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
    
      if (menuRes.data.modifiedCount > 0) {
        toast.success(`${menuItem.name} has been updated.`);
      }
    };
    
    return (
        <div>

            <Sectiontitle heading='Update an item' subheading='Refresh info' />

            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">racipe name*</span>
            </div>
            <input
            defaultValue={name}
              {...register("name",{required : true})}
              type="text"
              placeholder="Racipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex w-full gap-">
            
            {/* Ensure the flex container is full width */}
             {/* category */}
            <div className="my-6 w-full">
              
              {/* Set width of child div to full */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category name*</span>
                </div>
              </label>
              <select
              defaultValue={category}
                {...register("category" ,{required : true})}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  Select a category
                </option>
                <option value="Salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            {/* Price */}
            <div className="my-6 w-full">
              
              {/* Set width of child div to full */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Recipe Price*</span>
                </div>
                <input
                defaultValue={price}
                  {...register("price" ,{required : true})}
                  type="text"
                  placeholder="Recipe Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* Recipe  */}

            
          </div>

          <div>
          <textarea 
          defaultValue={recipe}
          {...register('recipe')}
          className="textarea textarea-bordered h-24 w-full my-6" placeholder="Bio"></textarea>
                    </div>

          <div>
          <input 
          {...register('image')}
          type="file" className="file-input file-input-bordered w-full max-w-xs my-6" />
          </div>

          <button className="btn">Update Item <FaUtensils className="ml-4"></FaUtensils></button>

        </form>
      </div>

            
        </div>
    );
};

export default Updateitem;