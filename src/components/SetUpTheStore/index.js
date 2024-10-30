// SetUpTheStore.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../StoreContext";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./index.css";

const SetUpTheStore = () => {
  const { storeData, setStoreData } = useContext(StoreContext);
  const [isChecked, setIsChecked] = useState(false);
  const [imageSrc, setImageSrc] = useState(storeData.image || null);
  const [isImageSelected, setIsImageSelected] = useState(false);

  const onChangeEmail = (event) => {
    setStoreData({ ...storeData, email: event.target.value })
  };
  const onChangePhone = (event) => {
    setStoreData({ ...storeData, phoneNumber: event.target.value })
  };
  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
        setStoreData({ ...storeData, image: event.target.result})
        setIsImageSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main-container">
      <h1 className="main-heading">Let's Customize your Shopnix Store</h1>
      <h2 className="sub-heading">Add your First Product</h2>
      <div className="sub-container">
        <div className="left-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name of the Store"
              value={storeData.nameOfStore}
              onChange={(e) =>
                setStoreData({ ...storeData, nameOfStore: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Store Title"
              value={storeData.storeTitle}
              onChange={(e) =>
                setStoreData({ ...storeData, storeTitle: e.target.value })
              }
            />

            <div className="image-containers">
              <div className="form-group">
                <img
                  src="https://via.placeholder.com/50x50?text=No+Photo+Available"
                  alt="Logo Preview"
                />
                <label for="store-logo">Add Logo</label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <p>
                  Supported: JPEG, PNG & WEBP. Image height: 150px, width: 200px
                </p>
              </div>

              <div className="form-group">
                <img
                  src="https://via.placeholder.com/50x50?text=No+Photo+Available"
                  alt="Favicon Preview"
                />
                <label for="store-favicon">Add Favicon</label>
                <input type="file" id="store-favicon" accept="image/*" />
                <p>Image format: .icon only. Image height: 32px, width: 32px</p>
              </div>
            </div>

            <input type="checkbox" id="contact" onChange={onChangeCheckbox} />
            <label for="contact">Add Support details</label>
           
            {isChecked && (
              <>
                <div className="support-form-group">
                  <label for="email">Support Email Address</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Add Email Address"
                    value={storeData.email}
                    onChange={onChangeEmail}
                  />
                </div>
                <div className="support-form-group">
                  <label for="ph">Support Phone Number</label>
                  <input
                    type="number"
                    id="ph"
                    placeholder="Add Phone Number"
                    value={storeData.phoneNumber}
                    onChange={onChangePhone}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="right">
          <div className="image-title">
            <img
              src={
                isImageSelected ? imageSrc : "https://via.placeholder.com/150"
              }
              alt="Selected"
              style={{ marginTop: "20px", maxWidth: "50%" }}
            />
            <div className="store-and-title">
              <p>Store Name: {storeData.nameOfStore}</p>
              <p>Store Title:{storeData.storeTitle}</p>
            </div>
          </div>
          <div className="info">
            <div className="contact-gc">
              <MdEmail />
              <p>{storeData.email}</p>
            </div>
            <div className="contact-gc">
              <FaPhoneAlt />
              <p>{storeData.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/add-category">
          <button>Back</button>
        </Link>
        <Link to="/review-page">
          <button>Review and finish</button>
        </Link>
      </div>
    </div>
  );
};

export default SetUpTheStore;
