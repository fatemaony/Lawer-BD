import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./Components/NavBar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import LawyersSection from "./Components/LawyersSection.jsx";
import ServicesSection from "./Components/ServicesSection.jsx";
import Footer from "./Components/Footer.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import LawyerProfilePage from "./Pages/LawyerProfilePage.jsx";
import LawyerErrorPage from "./Pages/LawyerErrorPage.jsx";
import MyBookingPage from "./Pages/MyBookingPage.jsx";
import Blogs from "./Pages/Blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HeroSection />
        <LawyersSection />
        <ServicesSection />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/lawyer/:lawyerId",
    element: (
      <>
        <NavBar />
        <LawyerProfilePage />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/no-lawyer-found",
    element: <LawyerErrorPage />,
  },
  {
    path: "/my-bookings",
    element: (
      <>
        <NavBar />
        <MyBookingPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <NavBar />
        <Blogs />
        <Footer />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
