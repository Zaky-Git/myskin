import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import Modal from "react-modal";
import Login from "../views/Login";
import Daftar from "../views/Daftar";
import ResetKataSandi from "../views/ResetKataSandi";
import Berhasil from "../views/Berhasil";

Modal.setAppElement("#root");

const GuestLayout = () => {
    const { user, token } = useStateContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState("");

    const openModal = (modalType) => {
        console.log(modalType);
        setModal(modalType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
            <NavigationBar openModal={openModal} />
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="text-muted poppin-font text-center mb-4">
                <p>
                    *Hasil deteksi belum dipastikan benar karena web hanya
                    memberikan indikasi awal, silahkan{" "}
                    <button
                        type="button"
                        className="btn btn-link "
                        onClick={() => openModal("login")}
                    >
                        <span className="text-decoration-none"> login</span>
                    </button>{" "}
                    untuk verifikasi hasil deteksi oleh Dokter.
                </p>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                className="modal-content"
            >
                <div className="w-screen flex justify-center">
                    {modal === "login" ? (
                        <Login
                            openDaftar={() => openModal("daftar")}
                            closeModal={closeModal}
                            openResetKataSandi={() =>
                                openModal("resetKataSandi")
                            }
                            openBerhasil={() => openModal("berhasil")}
                        />
                    ) : modal == "daftar" ? (
                        <Daftar
                            openLogin={() => openModal("login")}
                            closeModal={closeModal}
                            openBerhasil={() => openModal("berhasil")}
                        />
                    ) : modal == "resetKataSandi" ? (
                        <ResetKataSandi
                            closeModal={closeModal}
                            openLogin={() => openModal("login")}
                            openBerhasil={() => openModal("berhasil")}
                        />
                    ) : (
                        modal == "berhasil" && (
                            <Berhasil closeModal={closeModal} />
                        )
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default GuestLayout;
