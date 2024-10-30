import { Component } from "react";
import {Link} from 'react-router-dom'
import { StoreContext } from "../../StoreContext";
import { IoMdCheckmark } from "react-icons/io";
import "./index.css";

class SelectTheme extends Component {
  state = {
    isApplied: false,
  };
  static contextType = StoreContext;

  onHandleClick = (apply) => {
    const { storeData } = this.context;
    this.setState({
      theme: storeData.isApplied,
    });
    this.setState({ isApplied: apply });
  };

  render() {
    const { isApplied } = this.state;

    return (
      <>
        <div className="main-container">
          <h1 className="main-heading">Lets Customise your Shopnix Store</h1>
          <h2 className="sub-heading">Apply a theme</h2>

          <div className="themes">
            <div className="theme-card recommended">
              <img src="https://via.placeholder.com/200x150" alt="Bags Theme" />
              <div className="details">
                <div className="btn-apply">
                  <h3>Bags</h3>
                  <p>(recommended)</p>
                </div>
                <button onClick={() => this.onHandleClick(1)}>
                  {isApplied === 1 ? <IoMdCheckmark/> : "Apply"}
                </button>
              </div>
            </div>
            <div className="theme-card">
              <img src="https://via.placeholder.com/200x150" alt="Flex Theme" />
              <div className="details">
                <h3>Flex</h3>
                <button onClick={() => this.onHandleClick(2)}>
                  {isApplied === 2 ? <IoMdCheckmark/> : "Apply"}
                </button>
              </div>
            </div>
            <div className="theme-card">
              <img src="https://via.placeholder.com/200x150" alt="Chic Theme" />
              <div className="details">
                <h3>Chic</h3>
                <button onClick={() => this.onHandleClick(3)}>
                  {isApplied === 3 ? <IoMdCheckmark/> : "Apply"}
                </button>
              </div>
            </div>
          </div>
          <div className="footer">
          <Link to="/add-category">
            <button>Next</button>
          </Link>
          </div>
        </div>
      </>
    );
  }
}

export default SelectTheme;
