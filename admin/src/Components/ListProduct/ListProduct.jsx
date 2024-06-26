import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const url = "https://ecommerce-website-proto-backend.onrender.com";

  const fetchInfo = async () => {
    await fetch(`${url}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`${url}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    });
    fetchInfo(); // Fetch the updated list of products after removing
  }

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} className='listproduct-product-icon' alt={product.name} />
              <p>{product.name}</p>
              <p>Rs {product.old_price}</p>
              <p>Rs {product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() => { remove_product(product.id) }} src={cross_icon} className='listproduct-remove-icon' alt="Remove" />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
