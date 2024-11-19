import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddFoodItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const onSubmit = async (data) => {
    // Logging form data for debugging
    console.log(data);

    // Extract and upload image to the hosting service
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imageResponse = await axiosPublic.post(imageHostingApi, formData);

      if (imageResponse.data.success) {
        // Prepare the food item data with the image URL from the response
        const foodData = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imageResponse.data.data.display_url,
        };

        // Send food item data to the backend
        const response = await axiosSecure.post("/menu", foodData);

        if (response.data.insertedId) {
          toast.success(`${foodData.name} has been added to the menu!`);
        }
      }
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add a Food Item</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 shadow-md rounded-lg max-w-lg mx-auto">
        <label className="block mb-4">
          <span className="text-gray-700">Food Name*</span>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter food name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Category*</span>
          <select {...register("category", { required: true })} className="select select-bordered w-full mt-1">
            <option value="" disabled>Select a category</option>
            <option value="Salad">Salad</option>
            <option value="Pizza">Pizza</option>
            <option value="Soup">Soup</option>
            <option value="Drinks">Drinks</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Price ($)*</span>
          <input
            type="number"
            {...register("price", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter price"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Recipe Details</span>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered w-full mt-1"
            rows="4"
            placeholder="Enter ingredients, procedure, etc."
          ></textarea>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Food Image*</span>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </label>

        <button type="submit" className="btn w-full bg-green-600 text-white mt-4">
          Add Food Item <FaUtensils className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default AddFoodItem;
