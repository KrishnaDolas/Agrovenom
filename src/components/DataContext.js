// DataContext.js
import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

const initialState = {
  farmersData: [
    { id: '1', name: 'pk', contactNo: 6946494949, multiuser: 0, status: 'Trial' },
    // Add more initial data as needed
  ],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FARMER':
      return { ...state, farmersData: [...state.farmersData, action.payload] };
    // Add more cases for other actions as needed
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };
