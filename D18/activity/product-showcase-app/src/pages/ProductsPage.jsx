import { useLoaderData, Outlet } from "react-router-dom";
import { useState } from "react";
import ProductsLists from "../components/ProductsLists";

const ProductsPage = () => {
  const products = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedBrand === "" ||
        product.title.toLowerCase().includes(selectedBrand.toLowerCase()))
    );
  });

  const categoryList = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Products</h2>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginBottom: "20px" }}
      >
        <option value="">All Categories</option>
        {categoryList.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search"
        style={{ marginLeft: "20px", fontSize: "15px" }}
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      />
      <button style={{ marginLeft: "5px", fontSize: "15px" }}>Search</button>

      <ProductsLists products={filteredProducts} />
      <Outlet />
    </div>
  );
};

export default ProductsPage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    console.log("error");
    throw new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
