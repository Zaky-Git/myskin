import "bootstrap/dist/css/bootstrap.min.css";
import ".././index.css";
import Card from "../components/Card.jsx";
import {
    faClock,
    faFileCircleCheck,
    faHospitalUser,
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
const DokterDashboard = () => {
    const data = [
    ];
    const [sumPasien, setSumPasien] = useState(0);
    const [sumUnver, setSumUnver] = useState(0);
    const [sumVer, setSumVer] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const userResponse = await axiosClient.get("/doctor/{doctor_id}/patients-count");
                const unverResponse = await axiosClient.get("/countUserVer");
                const verResponse = await axiosClient.get("/countVer");

                setSumPasien(userResponse.data);
                setSumUnver(unverResponse.data);
                setSumVer(verResponse.data);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchCounts();
    }, []);
    return (
        <div className="dashboard poppin-font ">
            <div className="dashboard-content container">
                <div className="content">
                    <Card
                        icon1={faHospitalUser}
                        icon2={faClock}
                        icon3={faFileCircleCheck}
                        title1={"Menunggu Verifikasi"}
                        title2={"Terverifikasi"}
                        sum1={sumPasien}
                        sum2={sumUnver}
                        sum3={sumVer}
                    />
                    <div className="unverif-list">
                        <div className="list-header"></div>
                        <div className="card-custom shadow-xl p-3">
                            <h3 className="font-bold">
                                Ajuan Verifikasi
                                <hr />
                            </h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="col-4">Tanggal</th>
                                        <th className="col-4">Pasien</th>
                                        <th className="col-4">Diagnosis AI</th>
                                        <th className="col-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.Tanggal}</td>
                                            <td>{item.Nama}</td>
                                            <td>{item.Penyakit}</td>
                                            <td>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Verifikasi
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pasien">
                    <div
                        className="card-custom shadow-xl p-3"
                        style={{ height: "100%" }}
                    >
                        <h3 className="font-bold">
                            Pasien
                            <hr />
                        </h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col-4">Tanggal</th>
                                    <th className="col-4">Pasien</th>
                                    <th className="col-4">Diagnosis AI</th>
                                    <th className="col-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Nama}</td>
                                        <td>{item.NomorTelepon}</td>
                                        <td>{item.Penyakit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DokterDashboard;
