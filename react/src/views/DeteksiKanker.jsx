import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const DeteksiKanker = () => {
    return (
        <div className="flex flex-col justify-between  w-screen">
            <div className="">
                <div className="text-center flex flex-col items-center w-screen">
                    <h1 className="poppin-font fw-bolder mt-4 mb-4">
                        Deteksi Kanker
                    </h1>
                    <div className="poppin-font container-sm mb-4">
                        <h5 className="text-muted">
                            Masukkan gambar untuk mendeteksi kanker dari gambar
                            yang diberikan.
                        </h5>
                    </div>
                    <div className="mb-4 poppin-font text-white ">
                        <div className=" bg-primaryTW w-40 rounded-md px-4 py-2 ">
                            <button type="button">
                                <div className="font-bold">Pilih Gambar</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="poppin-font align-items-center text-muted"
                    style={{ width: "500px", margin: "auto" }}
                >
                    <h3 className="text-center">Aturan Gambar</h3>
                    <div className="container-sm" style={{ width: "400px" }}>
                        <ol type="1">
                            <li>1. Format: JPEG, PNG.</li>
                            <li>2. Ukuran: Maksimum 5 MB.</li>
                            <li>3. Resolusi: Minimal 800 x 600 piksel.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeteksiKanker;
