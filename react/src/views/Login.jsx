import { useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Login = ({
    openDaftar,
    closeModal,
    openResetKataSandi,
    openBerhasil,
}) => {
    const { loginUser } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axiosClient.post("/login", {
                email: email,
                password: password,
            });

            console.log(response.data);
            loginUser(
                response.data.user,
                response.data.token,
                response.data.role
            );

            console.log(response.data);
            openBerhasil();
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="flex flex-col w-screen">
            <div className="container d-flex justify-content-center align-items-center min-vh-100 font-poppins">
                <div className="border rounded-5 p-5 bg-white shadow w-50">
                    <div className="right-box">
                        <div className="align-items-center flex flex-col items-center">
                            <div className="mb-4 flex w-full justify-between">
                                <h5>My Skin</h5>
                                <p
                                    className="text-muted cursor-pointer"
                                    onClick={closeModal}
                                >
                                    X
                                </p>
                            </div>
                            <div className="flex flex-col items-center mb-8">
                                <div className="font-bold text-3xl">Masuk</div>
                                <div className="font-light mt-2">
                                    Masuk untuk tetap terhubung
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-3">
                                <h7>Email</h7>
                                <div className="input-group pt-1">
                                    <input
                                        className="p-2 border-2 w-full rounded-md border-primaryTW"
                                        type="text"
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-3">
                                <h7>Kata Sandi</h7>
                                <div className="input-group pt-1">
                                    <input
                                        className="p-2 border-2 w-full rounded-md border-primaryTW"
                                        type="password"
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="formCheck"
                                    />
                                    <label
                                        htmlFor="formCheck"
                                        className="form-check-label text-secondary"
                                    >
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div className="forgot">
                                    <small>
                                        <a
                                            className="no-underline"
                                            onClick={openResetKataSandi}
                                            href="#"
                                        >
                                            Lupa Kata Sandi?
                                        </a>
                                    </small>
                                </div>
                            </div>
                            <div className="mb-4 poppin-font text-white ">
                                <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                    <button type="button">
                                        <div
                                            className="font-bold text-center"
                                            onClick={handleSubmit}
                                        >
                                            Masuk
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <small>
                                    Belum memiliki akun?{" "}
                                    <a
                                        href="#"
                                        className="no-underline"
                                        onClick={openDaftar}
                                    >
                                        Klik disini untuk daftar
                                    </a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
