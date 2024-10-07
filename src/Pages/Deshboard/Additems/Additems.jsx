import React from "react";
import Sectiontitle from "../../../Comonents/Sectiontitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const imageHosting =  import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic(); 


  const imageHosting_api =`https://api.imgbb.com/1/upload?key=${imageHosting}`
  const onSubmit = async (data) => {
    console.log(data);
  
    // Image upload and get URL
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
  
    
      const res = await axiosPublic.post(imageHosting_api, formData); 
  
      console.log(res.data);
  
    
  };
  

  return (
    <div>
      <Sectiontitle
        heading="Add an item"
        subheading={"what's new ?"}
      ></Sectiontitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">racipe name*</span>
            </div>
            <input
              {...register("name",{required : true})}
              type="text"
              placeholder="Racipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex w-full gap-">
            {" "}
            {/* Ensure the flex container is full width */}
            {/* category */}
            <div className="my-6 w-full">
              {" "}
              {/* Set width of child div to full */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category name*</span>
                </div>
              </label>
              <select
              defaultValue='default'
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
              {" "}
              {/* Set width of child div to full */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Recipe Price*</span>
                </div>
                <input
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
          {...register('recipe')}
          className="textarea textarea-bordered h-24 w-full my-6" placeholder="Bio"></textarea>
                    </div>

          <div>
          <input 
          {...register('image' ,{required : true})}
          type="file" className="file-input file-input-bordered w-full max-w-xs my-6" />
          </div>

          <button className="btn">Add Item <FaUtensils className="ml-4"></FaUtensils></button>

        </form>
      </div>
    </div>
  );
};

export default Additems;
