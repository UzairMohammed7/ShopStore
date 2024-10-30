// App.js
import { Route, Routes } from "react-router-dom";
import { StoreProvider } from "./StoreContext"; 
import SelectTheme from "./components/SelectTheme";
import AddCategory from "./components/AddCategory"; 
import AddProduct from "./components/AddProduct";
import SetUpTheStore from "./components/SetUpTheStore"; 
import ReviewPage from "./components/ReviewPage"; 

const App = () => {
  return (
    <StoreProvider>
        <Routes>
          <Route path="/" element={<SelectTheme />}/>
          <Route path="/add-product" element={<AddProduct />}/>
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/set-up-store" element={<SetUpTheStore />} />
          <Route path="/review-page" element={<ReviewPage />} />
        </Routes>
    </StoreProvider>
  );
};

export default App;