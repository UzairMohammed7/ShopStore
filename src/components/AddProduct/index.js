import { Component } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../StoreContext";
import "./index.css";

class AddProduct extends Component {
  state = {
    titleName: "",
    description: "",
    listPrice: "",
    discountPercentage: "",
    gst: "",
    shippingCharges: "",
    stockLevel: "",
    netPrice: "",
    displayPricingDetials: false,
    includeGST: false,
    imageSrc: null,
    isImageSelected: false,
    errorMsg: false,
    textStyles: {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
    },
  };

  static contextType = StoreContext;

  componentDidMount() {
    const { storeData } = this.context;
    this.setState({
      titleName: storeData.titleName,
      description: storeData.description,
      netPrice: storeData.netPrice,
    });
  }
  
  onChangeTitleName = (event) => {
    this.setState({ titleName: event.target.value });
    this.context.setStoreData((prevData) => ({
      ...prevData,
      titleName: event.target.value,
    }));
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
    this.context.setStoreData((prevData) => ({
      ...prevData,
      description: event.target.value,
    }));
  };
  onChangeListPrice = (event) => {
    this.setState({ listPrice: event.target.value }, this.calculateFinalAmount);
  };
  onChangeDiscountPercentage = (event) => {
    this.setState({ discountPercentage: event.target.value }, this.calculateFinalAmount);
  };
  onChangeGST = (event) => {
    this.setState({ gst: event.target.value }, this.calculateFinalAmount);
    
  };
  onChangeShippingCharges = (event) => {
    this.setState({ shippingCharges: event.target.value }, this.calculateFinalAmount);
  };

  onChangeStockLevel = (event) => {
    this.setState({ stockLevel: event.target.value });
  };

  onDisplayPricingDetails = () => {
    const { displayPricingDetials } = this.state;
    this.setState({ displayPricingDetials: !displayPricingDetials });
  };

  onChangeIncludeGST = () => {
    const { includeGST } = this.state;
    this.setState({ includeGST: !includeGST }, this.calculateFinalAmount);
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.setState({ imageSrc: event.target.result, isImageSelected: true });
      };
      reader.readAsDataURL(file);
    }
  };

  calculateFinalAmount = () => {
    const { listPrice, discountPercentage, gst, shippingCharges, includeGST } = this.state;
    const price = parseFloat(listPrice);
    const discount = parseFloat(discountPercentage) / 100;
    const gstValue = parseFloat(gst) / 100;
    const shipping = parseFloat(shippingCharges);

    if (isNaN(price) || isNaN(discount) || isNaN(gstValue) || isNaN(shipping)) {
      this.setState({errorMsg: 'Enter a Valid Value'});
      return;
    }

    this.setState({errorMsg: ''});
    
    const discountedPrice = price - price * discount;
    const gstAmount = discountedPrice * gstValue;
    const finalPrice = discountedPrice + (includeGST ? gstAmount : 0) + shipping;
    
    this.setState({netPrice: finalPrice});
    this.context.setStoreData((prevData) => ({
      ...prevData, netPrice: finalPrice,
    }));
    
  };



  toggleBold = () => {
    this.setState((prevState) => ({
      textStyles: {
        ...prevState.textStyles,
        fontWeight: prevState.textStyles.fontWeight === "bold" ? "normal" : "bold",
      },
    }));
  };
  
  toggleItalic = () => {
    this.setState((prevState) => ({
      textStyles: {
        ...prevState.textStyles,
        fontStyle: prevState.textStyles.fontStyle === "italic" ? "normal" : "italic",
      },
    }));
  };
  
  toggleUnderline = () => {
    this.setState((prevState) => ({
      textStyles: {
        ...prevState.textStyles,
        textDecoration:
          prevState.textStyles.textDecoration === "underline" ? "none" : "underline",
      },
    }));
  };
  
  toggleStrikethrough = () => {
    this.setState((prevState) => ({
      textStyles: {
        ...prevState.textStyles,
        textDecoration:
          prevState.textStyles.textDecoration === "line-through" ? "none" : "line-through",
      },
    }));
  };
  
  

  render() {
    const {
      titleName,
      description,
      listPrice,
      discountPercentage,
      gst,
      shippingCharges,
      stockLevel,
      displayPricingDetials,
      includeGST,
      imageSrc,
      isImageSelected,
      errorMsg,
      netPrice
    } = this.state;

    return (
      <>
        <div className="add-prod-container">
          <h1 className="main-heading">Lets Customise your Shopnix Store</h1>
          <h2 className="sub-heading">Add your First Product</h2>

          <div className="sub-container">
            <div className="left-container">
              <h1 className="header">Basic Details</h1>

              <div className="title-lableName">
                <label for="product-name" className="label-name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="e.g.., Antony Book"
                  className="input-container"
                  onChange={this.onChangeTitleName}
                  value={titleName}
                />
              </div>

              <h3 className="prod-desc">Product Description</h3>
              <div className="text-editor">
                <div className="toolbar">
                  <button onClick={this.toggleBold}>
                    <b>B</b>
                  </button>
                  <button onClick={this.toggleItalic}>
                    <i>I</i>
                  </button>
                  <button onClick={this.toggleUnderline}>
                    <u>U</u>
                  </button>
                  <button onClick={this.toggleStrikethrough}>
                    <s>S</s>
                  </button>
                  <button>&bull;</button>
                  <button>&#35;</button>
                  <select>
                    <option>System Font</option>
                  </select>
                  <input
                    type="number"
                    size="12"
                    min="8"
                    max="36"
                    className="font-input"
                  />
                  <select>
                    <option>Paragraph</option>
                  </select>
                  <button>...</button>
                </div>
                <textarea
                  className="editor"
                  row="4"
                  cols="20"
                  onChange={this.onChangeDescription}
                  value={description}
                ></textarea>
              </div>

              <label for="product-image">Add Image(s)</label>
              <p>
                Upload a product image here. Supported formats jpeg, png, webp.
                You can upload upto 6 images.
              </p>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.handleImageChange}
                />
              </div>

              <label for="sku-code">SKU code</label>
              <input
                type="text"
                id="sku-code"
                placeholder="e.g., PROD00001"
              />

              <div className="check-label">
                <input
                  type="checkbox"
                  id="sac"
                  onChange={this.onDisplayPricingDetails}
                />
                <label for="sac">This Product has HSA/SAC Code</label>
              </div>

              <hr />
              {displayPricingDetials && (
                <>
                  <h1 className="header">Pricing Details</h1>
                  <div className="check-label">
                    <input
                      type="checkbox"
                      id="gst"
                      onChange={this.onChangeIncludeGST}
                    />
                    <label for="gst">Price Inclusive GST</label>
                  </div>

                  <div className="container-pricing">
                    <form>
                      <div className="pricing-form-group">
                        <label for="list-price">List Price</label>
                        <input
                          type="text"
                          id="list-price"
                          placeholder="e.g. 100"
                          onChange={this.onChangeListPrice}
                          value={listPrice}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="discount-percentage">
                          Discount Percentage
                        </label>
                        <input
                          type="text"
                          id="discount-percentage"
                          placeholder="e.g. 40"
                          onChange={this.onChangeDiscountPercentage}
                          value={discountPercentage}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="gst-rate">GST Rate</label>
                        <input
                          type="number"
                          id="gst-rate"
                          placeholder="e.g. 20"
                          onChange={this.onChangeGST}
                          value={gst}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="shipping-charges">
                          Shipping Charges (if any)
                        </label>
                        <input
                          type="number"
                          id="shipping-charges"
                          placeholder="e.g. 40"
                          onChange={this.onChangeShippingCharges}
                          value={shippingCharges}
                        />
                        {errorMsg && <p>Enter a Valid Value</p>}
                      </div>
                      <div className="pricing-form-group">
                        <label for="net-price">Net Price</label>
                        <input
                          type="text"
                          id="net-price"
                          placeholder="100"
                          value={netPrice}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="stock-level">Stock Level</label>
                        <input
                          type="text"
                          id="stock-level"
                          placeholder="1"
                          value={stockLevel}
                          onChange={this.onChangeStockLevel}
                        />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>

            <div className="preview-section">
              <img
                src={
                  isImageSelected ? imageSrc : "https://via.placeholder.com/150"
                }
                alt="Product-Image"
                id="preview-image"
                style={{ marginTop: "20px", maxWidth: "100%" }}
              />
              <div className="product-details">
                <h3>{titleName}</h3>
                <div
                  className="editor prod-desc"
                  contentEditable="true"
                  style={this.state.textStyles}
                  onInput={(e) => this.setState({ description: e.target.innerText })}
                >
                  {description}
                </div>
                <div className="amount">
                  {includeGST && (
                    <p className="include-gst">Rs. {netPrice}</p>
                  )}
                  <p>Rs. {netPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Link to="/add-category">
              <button className="back">Back</button>
            </Link>
            <Link to="/set-up-store">
              <button className="next">Next</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AddProduct;
