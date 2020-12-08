import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/Store";
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;