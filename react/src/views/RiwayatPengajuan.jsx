const RiwayatPengajuan = () => {
    const data = [
        {
            Tanggal: "22/03/2024",
            Pasien: "Hasnan Surya",
            DianosisAI: "Lentigo Maligma",
            DianosisDokter: "Lentigo Maligma",
            Catatan: "Lorem Ipsum dolor Sit amet",
            Status: "Unverified"
        },
    ];
  return (
      <div className="dashboard-content">
          <div className="card-custom shadow-xl p-3 mt-4">
              <h3 className="font-bold">
                  Riwayat Pengajuan
                  <hr/>
              </h3>
              <table className="table table-hover">
                  <thead>
                  <tr>
                      <th className="col-2">Tanggal Pengajuan</th>
                      <th className="col-2">Pasien</th>
                      <th className="col-2">Diagnosis AI</th>
                      <th className="col-2">Diagnosis Dokter</th>
                      <th className="col-2">Catatan</th>
                      <th className="col-2">Status</th>
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
                          <td>{item.Status}</td>
                          <td>
                              <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail
                              </button>
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
}
export default RiwayatPengajuan;
