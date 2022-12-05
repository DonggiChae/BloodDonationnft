import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <ToastContainer
      theme="light"
      newestOnTop={true}
      pauseOnHover={false}
      limit={1}
    />
  </>
  //</React.StrictMode>
);
