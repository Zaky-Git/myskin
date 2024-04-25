import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import Modal from "react-modal";
import Login from "../views/Login";
Modal.setAppElement("#root");

const GuestLayout = () => {
    const { user, token } = useStateContext();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const openLoginModal = () => {
        console.log("tes open");
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };
    if (token) {
        if (user.role === "admin") {
            return <Navigate to="/admin/dashboard" />;
        } else if (user.role === "pasien") {
            return <Navigate to="/deteksiKanker" />;
        } else if (user.role === "dokter") {
            return <Navigate to="/dokter/dashboard" />;
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-primaryAlternativeTW font-poppins">
            <NavigationBar openLoginModal={openLoginModal} />
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="text-muted poppin-font text-center mb-4 ">
                <p>
                    *Hasil deteksi belum dipastikan benar karena web hanya
                    memberikan indikasi awal, silahkan{" "}
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={openLoginModal}
                    >
                        login
                    </button>{" "}
                    untuk verifikasi hasil deteksi oleh Dokter.
                </p>
            </div>
            <Modal
                isOpen={isLoginModalOpen}
                onRequestClose={closeLoginModal}
                contentLabel="Login Modal"
                className="modal-content"
            >
                <div className="w-screen flex justify-center">
                    <Login closeModal={closeLoginModal} />
                </div>
            </Modal>
        </div>
    );
};

export default GuestLayout;
