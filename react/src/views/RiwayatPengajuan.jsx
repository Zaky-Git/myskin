import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import getImageUrl from "../functions/getImage";
import { ClipLoader } from "react-spinners";

const RiwayatPengajuan = () => {
    const { user, logoutUser, role } = useStateContext();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(
                    "/pasienVerificationList/" + user.id
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
                    Riwayat Pengajuan
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
                                <th className="col-2">Tanggal Pengajuan</th>
                                <th className="col-1">Persentase</th>
                                <th className="col-2">Gambar</th>
                                <th className="col-2">Keluhan</th>
                                <th className="col-1">Status</th>
                                <th className="col-2">Verified By</th>
                                <th className="col-2">Catatan Dokter</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <span
                                            className={`${
                                                item.skin_analysis
                                                    .analysis_percentage < 50
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }`}
                                        >
                                            {
                                                item.skin_analysis
                                                    .analysis_percentage
                                            }
                                            %
                                        </span>
                                    </td>
                                    <td>
                                        <img
                                            height={200}
                                            width={200}
                                            src={getImageUrl(
                                                item.skin_analysis.image_path
                                            )}
                                            alt="Gambar"
                                            className="img-thumbnail"
                                        />
                                    </td>
                                    <td>{item.skin_analysis.keluhan}</td>
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
                                                : "Not Verified"}
                                        </span>
                                    </td>
                                    <td>
                                        {item.verified
                                            ? item.doctor.name
                                            : "Not Verified"}
                                    </td>
                                    <td>{item.catatanDokter}</td>
                                    <td>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Detail
                                        </button>
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

export default RiwayatPengajuan;
