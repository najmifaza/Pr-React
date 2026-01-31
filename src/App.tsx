import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/header";
import ProductDetail from "./pages/ProductDetailPage";
import FormPage from "./pages/Form";
import RHFPage from "./pages/RHFPage";
import EmployeesPage from "./pages/EmployeesPage";
import UseStatePage from "./pages/UseStatePage";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/RHFPage" element={<RHFPage />} />
        <Route path="/Form" element={<FormPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
