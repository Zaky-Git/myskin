import React, {useEffect, useState} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";
import { ClipLoader } from "react-spinners";
import {Link} from "react-router-dom";

const RiwatVerifikasi = () => {
    const { user } = useStateContext();
    const [riwayatVerifikasi, setriwayatVerifikasi] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.id) {
            const fetchData = async () => {
                try {
                    const responseRiwayatVerifikasi = await axiosClient.get(`/riwayatVerified/${user.id}`);
                    setriwayatVerifikasi(responseRiwayatVerifikasi.data)
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }
    }, [user]);
    return (
        <div className="dashboard-content">
            <div className="card-custom shadow-xl p-3 mt-4 container">
                <h3 className="font-bold">
                    Pasien
                    <hr />
                </h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="col-2">Tanggal Pengajuan</th>
                            <th className="col-2">Pasien</th>
                            <th className="col-2">Diagnosis AI</th>
                            <th className="col-2">Verifikasi Dokter</th>
                            <th className="col-2">Catatan</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {riwayatVerifikasi.map((item, index) => (
                            <tr key={index}>
                                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                <td>{item.firstName + " " + item.lastName}</td>
                                <td><span
                                    className={`${
                                        item.analysis_percentage < 50
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                                    {item.analysis_percentage}%{" Melanoma"}
                                                </span>
                                </td>
                                <td>{item.verified_melanoma === 1 ? "Verified" : "Not Verified"}</td>
                                <td>{item.catatanDokter}</td>
                                <td>
                                    <Link
                                        to={`/dokter/detailVerifikasi/${item.id}`}
                                    >
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {riwayatVerifikasi.length == 0 && !loading && (
                    <div className="flex items-center justify-center h-[50vh]">
                        <span className="ml-2">
                            Tidak ada riwayat verifikasi.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RiwatVerifikasi;
