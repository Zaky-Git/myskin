import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client.js";

const DaftarDokter = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctorsAndPatients = async () => {
            try {
                const response = await axiosClient.get("/doctors");
                const doctors = response.data;

                // Fetch patient counts
                const updatedDoctors = await Promise.all(
                    doctors.map(async (doctor) => {
                        const patientCountResponse = await axiosClient.get(
                            `/doctor/${doctor.id}/patients-count`
                        );
                        doctor.patient_count =
                            patientCountResponse.data.patient_count;
                        return doctor;
                    })
                );

                setData(updatedDoctors);
            } catch (error) {
                console.error(
                    "There was an error fetching the doctors data!",
                    error
                );
            }
        };

        fetchDoctorsAndPatients();
    }, []);

    const handleDetailClick = (doctorId) => {
        navigate(`/admin/detailDokter/${doctorId}`);
    };

    return (
        <div className="dashboard-content">
            <div className="card-custom shadow-xl p-3 mt-4">
                <h3 className="font-bold">
                    Dokter
                    <hr />
                </h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="col-2">Tanggal Daftar</th>
                            <th className="col-2">Nama Lengkap</th>
                            <th className="col-2">Email</th>
                            <th className="col-2">Nomor Telepon</th>
                            <th className="col-2">Jumlah Pasien</th>
                            <th className="col-2"></th>
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
                                    {item.firstName} {item.lastName}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.patient_count}</td>
                                <td>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() =>
                                            handleDetailClick(item.id)
                                        }
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DaftarDokter;
