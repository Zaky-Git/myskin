import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavigationBar = ({ openLoginModal }) => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        // Extract the path from the URL
        const path = location.pathname;

        // Define your logic to set the active item based on the path
        let activeItem = null;
        if (path === "/deteksiKanker") {
            activeItem = "deteksi";
        } else if (path === "/faq") {
            activeItem = "faq";
        } else if (path === "/products") {
            activeItem = "products";
        } else if (path === "/about") {
            activeItem = "about";
        } else if (path === "/contact") {
            activeItem = "contact";
        }

        // Set the active item state
        setActiveItem(activeItem);
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                {/* Logo / Brand */}
                <div>
                    <Link className="navbar-brand" to="/">
                        Logo
                    </Link>
                    {/* Navbar Toggler kalo kecil */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Navbar Items */}
                <div>
                    <div className=" poppin-font" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/deteksiKanker"
                                    className={
                                        "nav-link" +
                                        (activeItem === "deteksi"
                                            ? " focused text-primary"
                                            : " text-secondary")
                                    }
                                    onFocus={() =>
                                        setActiveItem("deteksiKanker")
                                    }
                                    onBlur={() => setActiveItem(null)}
                                >
                                    Deteksi Kanker
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/faq"
                                    className={
                                        "nav-link" +
                                        (activeItem === "faq" ? " focused" : "")
                                    }
                                    onFocus={() => setActiveItem("faq")}
                                    onBlur={() => setActiveItem(null)}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/products"
                                    className={
                                        "nav-link" +
                                        (activeItem === "products"
                                            ? " focused"
                                            : "")
                                    }
                                    onFocus={() => setActiveItem("products")}
                                    onBlur={() => setActiveItem(null)}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={
                                        "nav-link" +
                                        (activeItem === "about"
                                            ? " focused"
                                            : "")
                                    }
                                    onFocus={() => setActiveItem("about")}
                                    onBlur={() => setActiveItem(null)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={
                                        "nav-link" +
                                        (activeItem === "contact"
                                            ? " focused"
                                            : "")
                                    }
                                    onFocus={() => setActiveItem("contact")}
                                    onBlur={() => setActiveItem(null)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Button */}
                <div>
                    <button
                        className="btn btn-ms poppin-font"
                        onClick={() => {
                            openLoginModal();
                            console.log("tess");
                        }}
                    >
                        Masuk
                    </button>
                </div>
            </div>
        </nav>
    );
};
