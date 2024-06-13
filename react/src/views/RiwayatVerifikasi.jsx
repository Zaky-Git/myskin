const RiwatVerifikasi = () => {
    const data = [
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
        },
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
        },
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
        },
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
        },
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
        },
    ];

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
                            <th className="col-2">Tanggal Daftar</th>
                            <th className="col-2">Nama Lengkap</th>
                            <th className="col-2">Email</th>
                            <th className="col-2">Nomor Telepon</th>
                            <th className="col-2">Umur</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Tanggal}</td>
                                <td>{item.Pasien}</td>
                                <td>{item.DianosisAI}</td>
                                <td>{item.DianosisDokter}</td>
                                <td>{item.Catatan}</td>
                                <td>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Detail{" "}
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

export default RiwatVerifikasi;
