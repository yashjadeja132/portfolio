import { Routes, Route } from "react-router-dom";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ScrollManager from "@/components/ScrollManager";
import Home from "@/pages/Home";
import ProjectPage from "@/pages/ProjectPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
