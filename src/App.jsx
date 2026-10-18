import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/HomePage/Components/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import ServicesPage from "./Pages/ServicesPage/Services";
import ProjectsPage from "./Pages/ProjectsPage/Projects";
import ContactPage from "./Pages/ContactPage/ContactPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
}