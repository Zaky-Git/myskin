import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Cropper from "react-easy-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useState } from "react";
import getCroppedImg from "../functions/cropImage.jsx";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../customStyle/confirm.css";

const ITEMS_PER_PAGE = 8;

const DeteksiKanker = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageName, setImageName] = useState(null);
    const [state, setState] = useState("upload");
    const [loading, setLoading] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [selectDocterIsChecked, setSelectDocterIsChecked] = useState(false);
    const [selectedDocter, setSelectedDocter] = useState(null);

    const reset = () => {
        setSelectedDocter(null);
        setSelectDocterIsChecked(false);
        setSearchQuery("");
        setCurrentPage(1);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSelectDocterIsCheckedChange = (event) => {
        setSelectDocterIsChecked(event.target.checked);
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    let listDokter = [
        { id: 1, nama: "Dr. A" },
        { id: 2, nama: "Dr. B" },
        { id: 3, nama: "Dr. B" },
        { id: 4, nama: "Dr. B" },
        { id: 5, nama: "Dr. B" },
        { id: 6, nama: "Dr. B" },
        { id: 7, nama: "Dr. B" },
        { id: 8, nama: "Dr. B" },
        { id: 9, nama: "Dr. B" },
        { id: 10, nama: "Dr. B" },
    ];

    const filteredDoctors = listDokter.filter((dokter) =>
        dokter.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredDoctors.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            );
            console.log("donee", { croppedImage });
            setCroppedImage(croppedImage);
            setState("analisa");
        } catch (e) {
            console.error(e);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (
            !file.type.includes("image/jpeg") &&
            !file.type.includes("image/png")
        ) {
            alert("Format file harus JPEG atau PNG.");
            return;
        }

        // if (file.size > 5 * 1024 * 1024) {
        //     alert("Ukuran file maksimum adalah 5 MB.");
        //     return;
        // }

        const image = new Image();
        image.src = URL.createObjectURL(file);

        image.onload = () => {
            // const width = image.width;
            // const height = image.height;

            // if (width < 800 || height < 600) {
            //     alert("Resolusi gambar minimal harus lebih 800 x 600 piksel.");
            //     return;
            // }
            setImageSrc(image.src);
            setImageName(file.name);
            setState("crop");
            console.log("Nama file:", file.name);
        };
    };

    const submitVerification = () => {
        const message =
            selectDocterIsChecked && selectedDocter
                ? `Hasil scan akan diajukan ke Dokter ${selectedDocter.nama} untuk di verifikasi`
                : "Hasil scan akan diajukan ke Dokter untuk di verifikasi";

        confirmAlert({
            title: "Ajukan Verifikasi",
            message: message,
            buttons: [
                {
                    label: "Batalkan",
                    onClick: () => console.log("Batalkan clicked"),
                },
                {
                    label: "Ajukan Verifikasi",
                    onClick: () => console.log("Ajukan Verifikasi clicked"),
                },
            ],
            closeOnClickOutside: true,
            closeOnEscape: true,
        });
    };

    return (
        <div className="flex flex-col justify-between w-screen mt-8">
            {loading && <p>Loading...</p>}
            {state == "upload" ? (
                <div className="">
                    <div className="text-center flex flex-col items-center w-screen  ">
                        <h1 className="poppin-font fw-bolder mt-4 mb-4">
                            Deteksi Kanker
                        </h1>
                        <div className="poppin-font container-sm mb-4">
                            <h5 className="text-muted">
                                Masukkan gambar untuk mendeteksi kanker dari
                                gambar yang diberikan.
                            </h5>
                        </div>
                        <div className="mb-4 poppin-font text-white ">
                            <div className=" bg-primaryTW w-40 rounded-md px-4 py-2 ">
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                    id="upload-image"
                                />
                                <label
                                    htmlFor="upload-image"
                                    className="cursor-pointer"
                                >
                                    <div className="font-bold">
                                        Pilih Gambar
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className="poppin-font align-items-center text-muted"
                        style={{ width: "500px", margin: "auto" }}
                    >
                        <h3 className="text-center">Aturan Gambar</h3>
                        <div
                            className="container-sm"
                            style={{ width: "400px" }}
                        >
                            <ol type="1">
                                <li>1. Format: JPEG, PNG.</li>
                                <li>2. Ukuran: Maksimum 5 MB.</li>
                                <li>3. Resolusi: Minimal 800 x 600 piksel.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            ) : state == "crop" ? (
                <div className="">
                    <div className="text-center flex flex-col items-center w-screen">
                        <h1 className="poppin-font fw-bolder mt-4 mb-4">
                            Crop Gambar
                        </h1>
                        <div className="poppin-font container-sm mb-4">
                            <h5 className="text-muted">
                                Sesuaikan gambar dengan area yang ingin
                                diperiksa dan pastikan tanda nya benar-benar
                                terlihat jelas.
                            </h5>
                        </div>
                        <div
                            className={`mb-4 poppin-font text-white bg-white container flex items-center justify-center p-8 flex-col `}
                        >
                            <div className="w-80 h-80 relative">
                                <Cropper
                                    image={imageSrc}
                                    crop={crop}
                                    rotation={rotation}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onRotationChange={setRotation}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />
                            </div>
                            <div className="pt-4">
                                <h5 className="font-light text-black text-xs">
                                    {imageName}
                                </h5>
                            </div>
                            <div className="pt-2">
                                <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                    <button
                                        onClick={showCroppedImage}
                                        type="button"
                                    >
                                        Crop Photo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                state == "analisa" && (
                    <div className="">
                        <div className="text-center flex flex-col items-center w-screen">
                            <h1 className="poppin-font fw-bolder mt-4 mb-4">
                                Analisa Gambar
                            </h1>
                            <div className="poppin-font container-sm mb-4">
                                <h5 className="text-muted">
                                    Klik tombol analisa untuk mendeteksi ulang
                                    kanker pada gambar.
                                </h5>
                            </div>
                            <div
                                className={`mb-4 poppin-font text-white bg-white container flex items-center justify-center p-8 flex-col `}
                            >
                                <div className="w-80 flex items-center justify-center h-80 relative">
                                    <img
                                        className="object-cover w-80 h-80"
                                        src={croppedImage}
                                        alt=""
                                    />
                                </div>
                                <div className="pt-4">
                                    <h5 className="font-light text-black text-xs">
                                        {imageName}
                                    </h5>
                                </div>
                                <div className="pt-2 flex gap-4">
                                    <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                        <button
                                            onClick={() => {
                                                setState("upload");
                                                reset();
                                            }}
                                            type="button"
                                        >
                                            Ganti Gambar
                                        </button>
                                    </div>
                                    <div className=" bg-primaryTW  rounded-md px-12 py-2 ">
                                        <button
                                            onClick={showCroppedImage}
                                            type="button"
                                        >
                                            Analisa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 poppin-font  bg-white container">
                            <div className=" text-black ">
                                <div className="bg-white flex flex-col p-12">
                                    <div>
                                        <h1 className="text-lg">
                                            Hasil Deteksi
                                        </h1>
                                    </div>
                                    <div className="">
                                        <div className="flex gap-3 ">
                                            <div className="w-28">
                                                Penyakit Kulit
                                            </div>
                                            <div>: Melanoma</div>
                                        </div>
                                        <div className="flex gap-3 w-30">
                                            <div className="w-28">
                                                Keakuratan
                                            </div>
                                            <div>
                                                <div className="text-start">
                                                    : 90%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 ">
                                            <div className="w-28">Status</div>
                                            <div>
                                                :{" "}
                                                <span className="text-red-500">
                                                    Unverified
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 poppin-font  bg-white container">
                            <div className="text-black">
                                <div className="bg-white flex flex-col p-12">
                                    <div>
                                        <h1 className="text-lg">
                                            Pengajuan Verifikasi
                                        </h1>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <div className="text-sm text-gray-500">
                                                *Checklis ini jika ingin memilih
                                                dokter anda sendiri
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <div className="">
                                                <input
                                                    className="w-6 h-6 bg-primaryTW"
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                    checked={
                                                        selectDocterIsChecked
                                                    }
                                                    onChange={
                                                        handleSelectDocterIsCheckedChange
                                                    }
                                                />
                                            </div>
                                            <div>Menentukan Dokter Sendiri</div>
                                        </div>

                                        {selectedDocter &&
                                            selectDocterIsChecked && (
                                                <div className="bg-primaryTW p-2 rounded-lg mt-4 mb-3">
                                                    <div className="w-full flex justify-between py-2 px-6 bg-white">
                                                        <div className="flex gap-4 items-center">
                                                            <div className="rounded-circle w-16 h-16 bg-black "></div>
                                                            <div>
                                                                {
                                                                    selectedDocter[
                                                                        "nama"
                                                                    ]
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`bg-yellow-400 text-whiteTW rounded-md px-12 py-2 flex-none h-10`}
                                                            >
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedDocter(
                                                                            null
                                                                        );
                                                                    }}
                                                                >
                                                                    Ganti Dokter
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        {selectDocterIsChecked &&
                                            selectedDocter == null && (
                                                <div
                                                    className={
                                                        "w-full flex flex-col bg-primaryAlternativeTW mt-4 mb-3"
                                                    }
                                                >
                                                    <div className="bg-primaryTW p-2 rounded-lg">
                                                        <input
                                                            className="input-group placeholder:text-lg placeholder:text-black p-2 rounded-lg"
                                                            type="text"
                                                            placeholder="Search"
                                                            value={searchQuery}
                                                            onChange={
                                                                handleSearchChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="p-12 grid grid-cols-4 gap-2 min-h-[500px]">
                                                        {currentItems.map(
                                                            (dokter) => (
                                                                <div
                                                                    key={
                                                                        dokter.id
                                                                    }
                                                                    className="p-4 flex flex-col gap-2 items-center justify-center shadow-md rounded-md bg-white"
                                                                >
                                                                    <div className="rounded-circle w-20 h-20 bg-black "></div>
                                                                    <div className="text-center">
                                                                        {
                                                                            dokter[
                                                                                "nama"
                                                                            ]
                                                                        }
                                                                    </div>
                                                                    <div
                                                                        className={` ${"bg-primaryTW"}  text-whiteTW rounded-md px-6 py-1`}
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setSelectedDocter(
                                                                                    dokter
                                                                                );
                                                                            }}
                                                                        >
                                                                            Pilih
                                                                            Dokter
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="flex justify-center mb-4">
                                                        {Array.from(
                                                            {
                                                                length: totalPages,
                                                            },
                                                            (_, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() =>
                                                                        handlePageChange(
                                                                            index +
                                                                                1
                                                                        )
                                                                    }
                                                                    className={`px-4 py-2 mx-1 ${
                                                                        currentPage ===
                                                                        index +
                                                                            1
                                                                            ? "bg-primaryTW text-white"
                                                                            : "bg-white text-black"
                                                                    }`}
                                                                >
                                                                    {index + 1}
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                    <div
                                        className="w-full flex items-center justify-center flex-col gap-2 pt-3
                                    "
                                    >
                                        <div
                                            className={` ${
                                                selectDocterIsChecked &&
                                                !selectedDocter
                                                    ? "bg-gray-500 "
                                                    : "bg-primaryTW"
                                            }  text-whiteTW rounded-md px-12 py-2`}
                                        >
                                            <button
                                                type="button"
                                                disabled={
                                                    selectDocterIsChecked &&
                                                    !selectedDocter
                                                }
                                                className={`${
                                                    selectDocterIsChecked &&
                                                    !selectedDocter
                                                        ? "cursor-not-allowed"
                                                        : "cursor-pointer"
                                                }`}
                                                onClick={() => {
                                                    if (
                                                        selectDocterIsChecked &&
                                                        !selectedDocter
                                                    ) {
                                                        return;
                                                    } else {
                                                        submitVerification();
                                                    }
                                                }}
                                            >
                                                Ajukan Verifikasi
                                            </button>
                                        </div>
                                        {!selectedDocter &&
                                        selectDocterIsChecked ? (
                                            <div className="text-sm text-gray-500">
                                                *Pilih Dokter atau matikan
                                                ceklis Menentukan Dokter Sendiri
                                            </div>
                                        ) : selectedDocter &&
                                          selectDocterIsChecked ? (
                                            <div className="text-sm text-gray-500">
                                                *{selectedDocter["nama"]} akan
                                                dipilih sebagai dokter anda
                                            </div>
                                        ) : (
                                            <div className="text-sm text-gray-500">
                                                *Dokter akan ditentukan secara
                                                otomatis
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default DeteksiKanker;
