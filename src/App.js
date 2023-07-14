import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const PageNotFound = () => {
    return (
        <p style={{ margin: "200px", textAlign: "center" }}>
            404 | Page not found
        </p>
    );
};

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} replace />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
