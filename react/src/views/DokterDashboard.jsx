import "bootstrap/dist/css/bootstrap.min.css";
import '.././index.css';
import Card from '../components/Card.jsx';
import {
    faClock,
    faFileCircleCheck,
    faHospitalUser,
} from "@fortawesome/free-solid-svg-icons";
const DokterDashboard = () => {
    const data = [
        {
            Tanggal: "22/03/2024",
            Nama: "Hasnan Surya",
            NomorTelepon: "081248672398",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Zaky Husaini",
            NomorTelepon: "081248672398",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Ahsia Sabila",
            NomorTelepon: "081248672398",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Novita",
            NomorTelepon: "081248672398",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Novita",
            NomorTelepon: "081248672398",
            Penyakit: "Lentigo Maligna",
        },
    ];

    return (
        <div className="dashboard poppin-font">
            <div className="dashboard-content">
                <div className="content">
                    <Card icon1={faHospitalUser} icon2={faClock} icon3={faFileCircleCheck} title1={"Menunggu Verifikasi"} title2={"Terverifikasi"}/>
                    <div className="unverif-list">
                        <div className="list-header">
                        </div>
                        <div className="card-custom shadow-xl p-3">
                            <h3 className="font-bold">
                                Ajuan Verifikasi
                                <hr/>
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
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Verifikasi
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
                    <div className="card-custom shadow-xl p-3" style={{ height: '100%' }}>
                        <h3 className="font-bold">
                            Pasien
                            <hr/>
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
