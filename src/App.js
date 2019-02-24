import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import styled from "styled-components";

import { persistor, store } from "./store";
import Router from "./config/Routing/Router";
import CustomModal from "./Components/CustomModal/CustomModal";

import "./styles/tailwind.css";

const Layout = styled.div`
  background-color: #191919;
`;

const App = _ => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Layout className="text-center min-h-screen flex flex-col items-center justify-center text-white">
        <Router />
        <CustomModal />
      </Layout>
    </PersistGate>
  </Provider>
);

export default App;
