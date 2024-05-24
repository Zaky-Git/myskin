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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = verificationRequests.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">
                Daftar Pengajuan Umum
            </h1>
            <div className="grid grid-cols-2 gap-4">
                {currentItems.map((request) => (
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
                                <button className="bg-primaryTW  text-white font-semibold py-2 px-4 rounded-md mr-2">
                                    Detail Pengajuan
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from(
                    {
                        length: Math.ceil(
                            verificationRequests.length / itemsPerPage
                        ),
                    },
                    (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded-md ${
                                currentPage === i + 1
                                    ? "bg-primaryTW text-white"
                                    : "bg-gray-200 text-gray-600"
                            } focus:outline-none`}
                        >
                            {i + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default DaftarPengajuanUmum;
