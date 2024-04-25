import { useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Login = ({ closeModal }) => {
    const { setUser, setToken } = useStateContext();
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

            setUser();
            setToken(response.data.token);

            console.log(response.data);
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
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Kata Sandi"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
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
                                        <a href="#">Lupa Kata Sandi?</a>
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
                                    <a href="#">Klik disini untuk daftar</a>
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
