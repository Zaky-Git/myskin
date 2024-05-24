import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";

const Verifikasi = () => {
    const [selectedDisease, setSelectedDisease] = useState("");

    const handleDiseaseChange = (event) => {
        setSelectedDisease(event.target.value);
    };
    const submitVerification = () => {
        confirmAlert({
            title: "Simpan Verifikasi",
            message: "Yakin ingin verifikasi?",
            buttons: [
                {
                    label: "Batalkan",
                    onClick: () => console.log("Batalkan clicked"),
                },
                {
                    label: "Verifikasi",
                    onClick: () => console.log("erifikasi clicked"),
                },
            ],
            closeOnClickOutside: true,
            closeOnEscape: true,
        });
    };
    return (
        <div className="flex flex-col justify-between w-screen mt-8">
            <div className="flex flex-col gap-4 container">
                <div className="flex gap-12">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <div className="mb-3">
                            <h4>Detail Pasien</h4>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="m-0 pb-[1px]">Nama</div>
                            <h6>Hasnan Surya</h6>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="m-0 pb-[1px]">Nomor Telepon</div>
                            <h6>08131120202</h6>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="m-0 pb-[1px]">Email</div>
                            <h6>MZF@gmail.com</h6>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="m-0 pb-[1px]">Umur</div>
                            <h6>64</h6>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="m-0 pb-2">Keluhan</div>
                            <div className="p-3 border border-black h-52 w-80 overflow-y-auto">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Recusandae officiis dolore
                                inventore aperiam soluta laudantium, repellendus
                                quaerat nostrum delectus accusamus!
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-md shadow-md w-full">
                        <div className="mb-3">
                            <h4>Prediksi Penyakit</h4>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-8">
                            <div
                                className={`poppin-font text-white bg-white container flex items-center  flex-col `}
                            >
                                <div className="w-80 flex items-center justify-center h-80 relative">
                                    <img
                                        className="object-cover w-80 h-80"
                                        src="https://th.bing.com/th/id/OIP.NzbyVBNRE6BC0oZdaZrXBgHaE8?rs=1&pid=ImgDetMain"
                                        alt=""
                                    />
                                </div>
                                <div className="pt-2">
                                    <h5 className="font-light text-black text-xs">
                                        melanoma.jpg
                                    </h5>
                                </div>
                                <div className="pt-2 flex gap-4 ">
                                    <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                        <button type="button">Unduh</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <select
                                    className="p-2 border border-primaryTW bg-white rounded-md"
                                    value={selectedDisease}
                                    onChange={handleDiseaseChange}
                                >
                                    <option value="">Pilih penyakit</option>
                                    <option value="Melanoma">Melanoma</option>
                                    <option value="Melanoma Lentigo Maligna">
                                        Melanoma Lentigo Maligna
                                    </option>
                                    <option value="Melanoma Superfisial Lentiginosa">
                                        Melanoma Superfisial Lentiginosa
                                    </option>
                                    <option value="Melanoma Akral Lentiginosa">
                                        Melanoma Akral Lentiginosa
                                    </option>
                                    <option value="Melanoma Nodular">
                                        Melanoma Nodular
                                    </option>
                                    <option value="Melanoma Desmoplastik">
                                        Melanoma Desmoplastik
                                    </option>
                                    <option value="Melanoma Amelanotik">
                                        Melanoma Amelanotik
                                    </option>
                                    <option value="Melanoma Spitzoid">
                                        Melanoma Spitzoid
                                    </option>
                                    <option value="Melanoma in situ">
                                        Melanoma in situ
                                    </option>
                                </select>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="text-sm text-gray-500">
                                            *Hasil verifikasi masih dapat diubah
                                        </div>
                                        <div className="flex gap-2 mt-2 text-lg">
                                            <div>Verifikasi Penyakit</div>
                                        </div>
                                    </div>
                                    <div className="my-auto">
                                        <input
                                            className="w-8 h-8 border border-blue-500 bg-blue-500 "
                                            type="checkbox"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white container mb-8">
                    <div className="p-8 flex flex-col">
                        <div className="mb-3">
                            <h4>Catatan</h4>
                        </div>
                        <textarea
                            placeholder="Berikan catatan disini"
                            className="p-3 border border-black h-52 w-full overflow-y-auto"
                        />
                        <div className="pt-2 flex gap-4 self-end mt-3">
                            <div className=" bg-primaryTW  text-white rounded-md px-12 py-2 ">
                                <button
                                    onClick={submitVerification}
                                    type="button"
                                >
                                    Verifikasi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verifikasi;
