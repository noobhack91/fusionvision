import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import 'react-modal-video/scss/modal-video.scss';
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import './assets/css/style.css';

//layout
import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import ComingSoon from "./pages/ComingSoon";
import Construction from "./pages/Construction";
import Error404 from "./pages/Error404";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import BlogGrid from "./pages/BlogGrid";
import LargLeftSidebar from "./pages/LargLeftSidebar";
import ListLeftSidebar from "./pages/ListLeftSidebar";
import BlogDetail from "./pages/BlogDetail";
import ContectUs from "./pages/ContectUs";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page-wraper">
          <ComingSoon />         
        </div>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  )
}


export default App;
