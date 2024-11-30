import React from "react";
import Modal from "./Modal";
import { useNavigate, useRouteLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useRouteLoaderData("product");

  const selectedProduct = product.find(
    (product) => product.id === parseInt(id)
  );

  console.log(selectedProduct);

  return (
    <Modal onClose={() => navigate("/product")} product={selectedProduct} />
  );
};

export default ProductDetail;
