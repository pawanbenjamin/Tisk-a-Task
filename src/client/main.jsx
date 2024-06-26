import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";

import Root from "./layout/Root.jsx";
import Tricks from "./features/tricks/Tricks.jsx";
import Puppies from "./features/puppies/Puppies.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/login", element: <AuthForm /> },
      { path: "/tricks", element: <Tricks /> },
      { path: "/puppies", element: <Puppies /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
