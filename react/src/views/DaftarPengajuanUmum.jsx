import { useState } from "react";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const DaftarPengajuanUmum = () => {
    const [verificationRequests, setVerificationRequests] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            tanggal: "05/05/2003",
            keakuratan: "90%",
        },
        {
            id: 2,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            tanggal: "05/05/2003",
            keakuratan: "90%",
        },
        {
            id: 3,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            keakuratan: "90%",
        },
        {
            id: 4,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            keakuratan: "90%",
        },
        {
            id: 5,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            keakuratan: "90%",
        },
        {
            id: 6,
            name: "John Doe",
            email: "JohnDoe@gmail.com",
            keakuratan: "90%",
        },
    ]);

    // Function to accept verification request
    const acceptRequest = (id) => {
        // Logic to accept the request
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">
                Daftar Pengajuan Umum
            </h1>
            <div className="grid grid-cols-2 gap-4">
                {verificationRequests.map((request) => (
                    <div
                        key={request.id}
                        className="bg-white shadow-md rounded-md p-4"
                    >
                        <h2 className="text-lg font-semibold">
                            {request.name}
                        </h2>
                        <p className="text-gray-500 mb-2">{request.email}</p>
                        <p className="text-gray-600">
                            {request.keakuratan} Melanoma
                        </p>
                        <div className="flex justify-end mt-4">
                            <Link to="/verifikasi">
                                <button
                                    className="bg-primaryTW  text-white font-semibold py-2 px-4 rounded-md mr-2"
                                    onClick={() => acceptRequest(request.id)}
                                >
                                    Detail Pengajuan
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaftarPengajuanUmum;
