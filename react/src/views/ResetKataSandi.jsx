import { useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { BiArrowBack } from "react-icons/bi";

const ResetKataSandi = ({ openLogin, closeModal, openBerhasil }) => {
    const { setUser, setToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [namaDepan, setNamaDepan] = useState("");
    const [namaBelakang, setNamaBelakang] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [isAgree, setIsAgree] = useState(false);
    const [message, setMessage] = useState("");

    const listState = ["inputEmail", "inputPassword"];

    const [state, setState] = useState(listState[0]);

    const handleCheckMail = async () => {
        try {
            const response = await axiosClient.post("/checkEmail", {
                email: email,
            });

            if (response.status == 200) {
                setMessage("");
                setState(listState[1]);
            }
        } catch (error) {
            setMessage(error.response.data.message);
            console.error(error.response.data);
        }
    };

    const handleResetKataSandi = async () => {
        try {
            if (
                password == confirmationPassword &&
                password != "" &&
                confirmationPassword != ""
            ) {
                const response = await axiosClient.post("/changePassword", {
                    email: email,
                    password: password,
                });

                if (response.status == 200) {
                    openBerhasil();
                }
            }
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
                                <div className="flex gap-2">
                                    <BiArrowBack
                                        className="cursor-pointer my-auto"
                                        onClick={
                                            state == [listState[0]]
                                                ? openLogin
                                                : () => setState(listState[0])
                                        }
                                    />

                                    <h5 className="my-auto">My Skin</h5>
                                </div>
                                <p
                                    className="text-muted cursor-pointer my-auto"
                                    onClick={closeModal}
                                >
                                    X
                                </p>
                            </div>
                            <div className="flex flex-col items-center mb-8">
                                <div className="font-bold text-3xl">
                                    Reset Kata Sandi
                                </div>
                                {state == listState[0] ? (
                                    <div className="font-light mt-2">
                                        Masukan Email Address
                                    </div>
                                ) : (
                                    <div className="font-light mt-2">
                                        Masukan Kata Sandi Baru
                                    </div>
                                )}
                            </div>

                            {state == "inputEmail" ? (
                                <div className="flex flex-col w-full mb-3">
                                    <h7>Email</h7>
                                    <div className="input-group pt-1">
                                        <input
                                            className="p-2 border-2 w-full rounded-md border-primaryTW"
                                            type="text"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    {message != "" && (
                                        <div className="text-red-500">
                                            {message}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="w-full">
                                    <div className="flex flex-col w-full mb-3">
                                        <h7>Email</h7>
                                        <div className="input-group pt-1">
                                            <input
                                                className="p-2 border-2 w-full rounded-md"
                                                type="text"
                                                disabled
                                                value={email}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex flex-col w-full mb-3">
                                            <h7>Kata Sandi</h7>
                                            <div className="input-group pt-1">
                                                <input
                                                    className="p-2 border-2 w-full rounded-md border-primaryTW"
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full mb-3">
                                            <h7>Konfirmasi Kata Sandi</h7>
                                            <div className="input-group pt-1">
                                                <input
                                                    className="p-2 border-2 w-full rounded-md border-primaryTW"
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {state == "inputEmail" ? (
                                <div className="mt-4 poppin-font text-white ">
                                    <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                        <button type="button">
                                            <div
                                                className="font-bold text-center"
                                                onClick={() => {
                                                    handleCheckMail();
                                                }}
                                            >
                                                Lanjut
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-4 poppin-font text-white ">
                                    <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                        <button type="button">
                                            <div
                                                className="font-bold text-center"
                                                onClick={handleResetKataSandi}
                                            >
                                                Reset
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetKataSandi;
