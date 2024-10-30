// AddCategory.js
import React, { useContext, useState } from "react";
import { StoreContext } from "../../StoreContext"; 
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./index.css";

const AddCategory = () => {
  const { storeData, setStoreData } = useContext(StoreContext);
  const [redirectToProductPage, setRedirectToProductPage] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !storeData.bookInput ||
      !storeData.bookCategory ||
      !storeData.bookSubCategory
    ) {
      alert("Fill The Form Completely");
    } else {
      toast.success("Category Added");
      setRedirectToProductPage(true);
    }
  };

  if (redirectToProductPage) {
    return <Navigate to="/add-product" />;
  }

  const onClickBack = () => {
    return <Navigate to="/" />;
  };

  return (
    <div className="add-category-container">
      <h1 className="main-heading">Let's Customize your Shopnix Store</h1>
      <div className="form-and-diagram">
        <form onSubmit={onSubmit} className="form-group">
          <div>
            <label htmlFor="product">Add a Product</label>
            <input
              id="product"
              type="text"
              placeholder="Add a Product type"
              value={storeData.bookInput}
              onChange={(e) =>
                setStoreData({ ...storeData, bookInput: e.target.value })
              }
            />
            <label htmlFor="category">Add a Category</label>
            <input
              id="category"
              type="text"
              placeholder="Add a Category (optional)"
              value={storeData.bookCategory}
              onChange={(e) =>
                setStoreData({ ...storeData, bookCategory: e.target.value })
              }
            />
            <label htmlFor="subCategory">Add a Sub-Category</label>
            <input
              id="subCategory"
              type="text"
              placeholder="Add a Sub-Category (optional)"
              value={storeData.bookSubCategory}
              onChange={(e) =>
                setStoreData({ ...storeData, bookSubCategory: e.target.value })
              }
            />
            <div className="buttons">
              <button className="back" onClick={onClickBack}>
                Back
              </button>
              <button className="next" type="submit">
                Next
              </button>
            </div>
          </div>
        </form>
        <div className="diagram">
            <div className="flow-chart">
              <div className="box product-type">Product Type</div>
              <div className="arrow">↓</div>
              <div className="box category">Category</div>
              <div className="arrow">↓</div>
              <div className="box sub-category">Sub-Category</div>
              <div className="arrow">↓</div>
              <div className="box product">Product</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
