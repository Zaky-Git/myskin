import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import getImageUrl from "../functions/getImage";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const RiwayatDeteksi = () => {
    const { user, logoutUser, role } = useStateContext();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(
                    "/mySkinAnalysis/" + user.id
                );
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching the data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard-content container">
            <div className="card-custom shadow-xl p-3 mt-4">
                <h3 className="font-bold">
                    Riwayat Deteksi
                    <hr />
                </h3>
                {loading ? (
                    <div className="flex items-center justify-center h-[50vh]">
                        <ClipLoader
                            color="#4A90E2"
                            loading={loading}
                            size={35}
                        />
                        <span className="ml-2">Memuat data...</span>
                    </div>
                ) : data.length > 0 ? (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="col-2">Tanggal Deteksi</th>
                                <th className="col-2">Persentase</th>
                                <th className="col-2">Gambar</th>
                                <th className="col-2">Keluhan</th>
                                <th className="col-2">Pengajuan</th>
                                <th className="col-2">Status</th>
                                <th className="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {new Date(
                                            item.updated_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <span
                                            className={`${
                                                item.analysis_percentage > 60
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }`}
                                        >
                                            {item.analysis_percentage}%{" "}
                                            {" Melanoma"}
                                        </span>
                                    </td>
                                    <td>
                                        <img
                                            height={200}
                                            width={200}
                                            src={getImageUrl(item.image_path)}
                                            alt="Gambar"
                                            className="img-thumbnail"
                                        />
                                    </td>
                                    <td>
                                        {item.keluhan == null ||
                                        item.keluhan == ""
                                            ? "Tidak ada"
                                            : item.keluhan}
                                    </td>
                                    <td>
                                        <span
                                            className={`${
                                                !item.is_sudah_pengajuan
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }`}
                                        >
                                            {item.is_sudah_pengajuan
                                                ? "Sudah"
                                                : "belum"}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={`${
                                                !item.verified
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }`}
                                        >
                                            {item.verified
                                                ? "Verified"
                                                : "Unverified"}
                                        </span>
                                    </td>

                                    <td>
                                        <Link
                                            to={`/pasien/detailDeteksi/${item.id}`}
                                        >
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                                                Detail
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )}

                {data.length == 0 && !loading && (
                    <div className="flex items-center justify-center h-[50vh]">
                        <span className="ml-2">
                            Tidak ada riwayat pengajuan.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RiwayatDeteksi;
