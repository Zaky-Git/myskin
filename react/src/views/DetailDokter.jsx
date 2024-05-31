import { useState } from 'react';

const DetailDokter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handlePerbaharuiClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="dashboard-content">
            <div className="detail-dokter">
                <div className="card-custom px-5 mt-4">
                    <h2 className="font-bold">
                        Detail Dokter
                        <hr />
                    </h2>
                    <div className="mt-2">
                        <small>Tanggal Daftar</small>
                        <h4 className="font-bold">Jumat 22/03/2023, 13:21:30</h4>
                    </div>
                    <div className="mt-2">
                        <small>Nama</small>
                        <h4 className="font-bold">Hasnan Hunaini</h4>
                    </div>
                    <div className="mt-2">
                        <small>Nomor Telepon</small>
                        <h4 className="font-bold">08125987163</h4>
                    </div>
                    <div className="mt-2">
                        <small>Email</small>
                        <h4 className="font-bold">MZF@gmail.com</h4>
                    </div>
                    <div className="mt-20">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handlePerbaharuiClick}>
                            Perbaharui
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-custom shadow-xl p-3 mt-4">
                <h2 className="font-bold">
                    Pasien
                    <hr />
                </h2>
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
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Verifikasi
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-3xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Perbaharui Detail</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Alamat Email</label>
                                <input type="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nomor Telepon</label>
                                <input type="tel" className="form-control" required />
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="btn btn-primary">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailDokter;
