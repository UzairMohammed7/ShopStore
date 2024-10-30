// StoreContext.js
import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [storeData, setStoreData] = useState({
    isApplied: '',
    image: '',
    nameOfStore: '',
    storeTitle: '',
    email: '',
    phoneNumber: '',
    bookInput: '',
    titleName: '',
    description: '',
    netPrice: '',
    bookCategory: '',
    bookSubCategory: '',
  });

  return (
    <StoreContext.Provider value={{ storeData, setStoreData }}>
      {children}
    </StoreContext.Provider>
  );
};
