import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import { Container } from "./Container";
import { Link } from "react-router";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
// import carts from "../data/carts";
import emptyImage from '../assets/emptycart.png';

const CartSection = () => {
  const {carts} = useCartStore();
  const {products} = useProductStore();

  const total = carts.reduce((pv,cv) => {
    // const price = products.find(({id}) => id === cv.productId).price;
    const cost = cv.quantity * products.find(({id}) => id === cv.productId).price;
    return pv + cost;
  },0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  // console.log(carts);
  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        {carts.map((cart,idx) => (
          <Cart key={idx} cart={cart} />
        ))}

        {
          carts.length === 0 && <img src={emptyImage} className="w-[300px] block mx-auto" alt="" />
        }

        <div className=" w-full bg-white">
          <Container>
            <div className=" border-t border-black flex justify-end gap-10 py-3">
              <div className=" text-right">
                <p className=" text-gray-500">Total</p>
                <p className=" font-bold">{total.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Tax(5%)</p>
                <p className=" font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Net Total</p>
                <p className=" text-2xl font-bold">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className=" text-end mb-3">
              <Link className=" border border-black px-4 py-2 ">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;