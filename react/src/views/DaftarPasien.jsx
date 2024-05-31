const DaftarPasien = () => {
    const data = [
        {
            TanggalDaftar: "22/03/2024",
            Nama: "Hasnan Surya",
            Email: "junaidijwr@gmail.com",
            noTelp: "08128765257",
            umur: 67
        },
        {
            TanggalDaftar: "22/03/2024",
            Nama: "Zaky Husaini",
            Email: "junaidijwr@gmail.com",
            noTelp: "08128765257",
            umur: 60
        },
        {
            TanggalDaftar: "22/03/2024",
            Nama: "Ahsia Sabila",
            Email: "junaidijwr@gmail.com",
            noTelp: "08128765257",
            umur: 58
        },
        {
            TanggalDaftar: "22/03/2024",
            Nama: "Novita",
            Email: "junaidijwr@gmail.com",
            noTelp: "08128765257",
            umur: 77
        },
        {
            TanggalDaftar: "22/03/2024",
            Nama: "Novita",
            Email: "junaidijwr@gmail.com",
            noTelp: "08128765257",
            umur: 52
        },
    ];

    return (
        <div className="dashboard-content">
            <div className="card-custom shadow-xl p-3 mt-4">
                <h3 className="font-bold">
                    Pasien
                    <hr/>
                </h3>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="col-2">Tanggal Daftar</th>
                        <th className="col-2">Nama Lengkap</th>
                        <th className="col-2">Email</th>
                        <th className="col-2">Nomor Telepon</th>
                        <th className="col-2">Umur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.TanggalDaftar}</td>
                            <td>{item.Nama}</td>
                            <td>{item.Email}</td>
                            <td>{item.noTelp}</td>
                            <td>{item.umur}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DaftarPasien;
