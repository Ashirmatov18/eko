import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import MainPage from "./components/pages/MainPage/MainPage";
import Technologies from "./components/pages/Technologies/Technologies";
import Contacts from "./components/pages/Contacts/Contacts";
import Partners from "./components/pages/Partners/Partners";
import Cooperation from "./components/pages/Cooperation/Cooperation";
import Garbage from "./components/pages/Garbage/Garbage";
import EkoPark from "./components/pages/EkoPark/EkoPark";
import Vacancy from "./components/pages/Vacancy/Vacancy";
import Uap from "./components/pages/UAP/Uap";
import Green from "./components/pages/Green/Green";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/technologies",
    element: <Technologies />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/cooperation",
    element: <Cooperation />,
  },
  {
    path: "/garbage",
    element: <Garbage />,
  },
  {
    path: "/ekopark",
    element: <EkoPark />,
  },
  {
    path: "/vacancy",
    element: <Vacancy />,
  },
  {
    path: "/uap",
    element: <Uap />,
  },
  {
    path: "/green",
    element: <Green />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
