import React from "react";
import { useParams } from "react-router";
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  const currentProduct = products.find((product) => product.id === Number(productId));

  if (!currentProduct) {
    return (
      <Container className="px-5">
        <BreadCrumb currentPageTitle="Product Detail" />
        <p className="text-center text-red-500">Product not found!</p>
      </Container>
    );
  }

  const handleAddedCart = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My Cart");
  };

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };

    addCart(newCart);
    toast.success("Item added to My Cart");
  };

  return (
    <Container className="px-5">
      <BreadCrumb currentPageTitle="Product Detail" />

      <div className="border border-black p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img src={currentProduct.image} className="h-[200px] md:h-auto mb-5 md:mb-0 md:w-3/4 block md:mx-auto" alt={currentProduct.title}/>
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />

            <div className="flex justify-between w-full items-center">
              <p>Price: ${currentProduct.price.toFixed(2)}</p>
              {carts.some((cart) => cart.productId === currentProduct.id) ? (
                <button className="text-sm border border-black bg-black text-white px-3 py-1" onClick={handleAddedCart}>
                  Added
                </button>
              ) : (
                <button className="text-sm border border-black px-3 py-1" onClick={handleAddCartBtn}>
                  Add Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
