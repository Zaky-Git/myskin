const DaftarDokter = () => {
    const data = [
        {
            TanggalDaftar: "22/03/2023",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Email: "hasnan1170@gmail.com",
            noTelp: "08124882895",
            jumlahPasien: 20
        },
        {
            TanggalDaftar: "22/03/2023",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Email: "hasnan1170@gmail.com",
            noTelp: "08124882895",
            jumlahPasien: 20

        },
        {
            TanggalDaftar: "22/03/2023",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Email: "hasnan1170@gmail.com",
            noTelp: "08124882895",
            jumlahPasien: 20
        },
        {
            TanggalDaftar: "22/03/2023",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Email: "hasnan1170@gmail.com",
            noTelp: "08124882895",
            jumlahPasien: 20
        },
        {
            TanggalDaftar: "22/03/2023",
            Dokter: "Dr. Hasnan Hunaini Sp.KK",
            Email: "hasnan1170@gmail.com",
            noTelp: "08124882895",
            jumlahPasien: 20
        },
    ];
    return (
        <div className="dashboard-content">
            <div className="card-custom shadow-xl p-3 mt-4">
                <h3 className="font-bold">
                    Dokter
                    <hr/>
                </h3>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="col-2">Tanggal Daftar</th>
                        <th className="col-2">Nama Lengkap</th>
                        <th className="col-2">Email</th>
                        <th className="col-2">Nomor Telepon</th>
                        <th className="col-2">Jumlah Pasien</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.TanggalDaftar}</td>
                            <td>{item.Dokter}</td>
                            <td>{item.Email}</td>
                            <td>{item.noTelp}</td>
                            <td>{item.jumlahPasien}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DaftarDokter;
