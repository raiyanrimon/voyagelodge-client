import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import Faq from "./Company/Faq";
import AboutUs from "./Company/AboutUs";
import Login from "./Login/Login";
import Register from "./Registration/Register";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import Rooms from "./Rooms/Rooms";
import RoomDetails from "./Rooms/RoomDetails";
import Booking from "./Booking/Booking";
import MyBookings from "./Booking/MyBookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateBooking from "./Booking/UpdateBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking-update/:id",
        element: (
          <PrivateRoute>
            <UpdateBooking></UpdateBooking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
