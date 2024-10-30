// ReviewPage.js
import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import "./index.css";

const ReviewPage = () => {
  const { storeData } = useContext(StoreContext);

  return (
    <>
      <div className="top-container">
        <h1>WELCOME TO YOUR NEW STORE!</h1>
        <div className="content">
          <div className="left">
           <img 
              src={storeData.image || "https://via.placeholder.com/140"} // Fallback if image is not set
              alt="Store-Image"
            />
            <p>
              We have set up your store with some sample data and default
              settings. This lets you get a feel of your store and the store
              manager. Using the steps on the right, you can configure your
              store with your data and your settings. Click on the first step to
              start.
            </p>
            <p>
              If you have any queries, please contact us on support@shopnix.in
            </p>
          </div>
          <div className="right">
            <h2>
              Store Name: <span> {storeData.nameOfStore} </span>{" "}
            </h2>
            <h2>
              Store Title: <span> {storeData.storeTitle} </span>{" "}
            </h2>
            <h2>
              Product Type: <span> {storeData.bookInput} </span>{" "}
            </h2>
            <h2>
              Category: <span> {storeData.bookCategory} </span>{" "}
            </h2>
            <h2>
              Sub-Category: <span> {storeData.bookSubCategory} </span>{" "}
            </h2>
            <h2>
              Product Name: <span> {storeData.bookInput} </span>{" "}
            </h2>
            <h2>
              Title: <span> {storeData.titleName} </span>{" "}
            </h2>
            <h2>
              Product Description: <span> {storeData.description} </span>{" "}
            </h2>
            <h2>
              Price: <span> {storeData.netPrice} </span>{" "}
            </h2>
            <div>
              <h2>Contact Support</h2>
              <h3>
                Email: <span> {storeData.email} </span>{" "}
              </h3>
              <h3>
                Phone: <span> {storeData.phoneNumber} </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-container">
        <header>
          <h1>Dashboard</h1>
          <div className="date-filter">
            <input type="date" id="start-date" />
            <p>to</p>
            <input type="date" id="end-date" />
            <button>Go</button>
          </div>
        </header>

        <main>
          <div className="card summary">
            <h2>Summary</h2>
            <div className="card-content">
              <div className="card-border">
                <p className="card-content-bg">Today's Sales</p>
                <p>Rs. 0.00</p>
              </div>
              <div className="card-border">
                <p className="card-content-bg">Total Sales</p>
                <p>Rs. 0.00</p>
              </div>
            </div>
          </div>
          <div className="card sales-chart">
            <h2>Sales between 24 May and 23 Jun</h2>
            <div className="card-content-sales-list">
              <p>Sales</p>
              <p>1.0__________________________________________</p>
              <p>0.5__________________________________________</p>
              <p>0.0__________________________________________</p>
            </div>
          </div>
          <div className="card current-orders">
            <h2>Current Orders</h2>
            <div className="card-content">
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Ordered Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4">No data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card top-products">
            <h2>Top 5 Selling Products between 24 May and 23 Jun</h2>
            <div className="card-content">
              <p>No data</p>
            </div>
          </div>
        </main>
      </div> */}
    </>
  );
};

export default ReviewPage;
