import "bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import Card from '../../components/Card.jsx';
import {
    faUserDoctor,
    faHospitalUser,
    faClipboardList
} from "@fortawesome/free-solid-svg-icons";
const AdminDashboard = () => {
    const data = [
        {
            Tanggal: "22/03/2024",
            Nama: "Hasnan Surya",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Zaky Husaini",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Ahsia Sabila",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Novita",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Penyakit: "Lentigo Maligna",
        },
        {
            Tanggal: "22/03/2024",
            Nama: "Novita",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Penyakit: "Lentigo Maligna",
        },
    ];

    return (
        <div className="dashboard poppin-font">
            <div className="dashboard-content">
                <div className="content">
                    <Card icon1={faHospitalUser} icon2={faUserDoctor} icon3={faClipboardList} title1={"Dokter"} title2={"Pengajuan"}/>
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
                                    <th className="col-3">Tanggal</th>
                                    <th className="col-3">Pasien</th>
                                    <th className="col-3">Diagnosis AI</th>
                                    <th className="col-3">Dokter</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Tanggal}</td>
                                        <td>{item.Nama}</td>
                                        <td>{item.Penyakit}</td>
                                        <td>{item.Dokter}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pasien">
                    <div className="card-custom shadow-xl p-3" style={{height: '100%'}}>
                        <h3 className="font-bold text-center">
                            Input Pasien Baru
                            <hr/>
                        </h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nama Depan</label>
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nama Belakang</label>
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Alamat Email</label>
                                <input type="email" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nomor Telepon</label>
                                <input type="tel" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
