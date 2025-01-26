import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import toast from "react-hot-toast";
// import carts from "../data/carts";

const ProductCard = ({ product: { id, title,price, image,rating: { rate }}}) => {

  const {carts,addCart} = useCartStore();
  const nagivate = useNavigate();

  const addedCartHandler = (event) =>{
    event.stopPropagation();
    toast.error("Alread added in my cart");
  }

  const addCartHandlerBtn = (event) =>{
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };

    addCart(newCart);
    toast.success("Item added to My Cart")
  }

  const handleOpenDetail = () => {
    nagivate(`/product-detail/${id}`);
  }  


  return (
    <div to={`/product-detail/${id}`} className=" border border-black p-5 flex flex-col  items-start gap-5" onClick={handleOpenDetail}>
      <img src={image} className=" h-40 cursor-pointer" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />

      <div className=" flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button className=" text-sm border border-black bg-black text-white px-3 py-1" onClick={addedCartHandler}>
            Added
          </button>
        ) : (
          <button className=" text-sm border border-black px-3 py-1" onClick={addCartHandlerBtn}>
            Add Cart
          </button>
        )}
      </div>

    </div>
  );
};

export default ProductCard;