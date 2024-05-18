import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Cropper from "react-easy-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useState } from "react";
import getCroppedImg from "../functions/CropImage";

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
    const handleSelectDocterIsCheckedChange = (event) => {
        setSelectDocterIsChecked(event.target.checked);
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

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
    return (
        <div className="flex flex-col justify-between w-screen">
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
                                            <div>: Unverified</div>
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
                                        <div className="flex gap-2 ">
                                            <div className="">
                                                <input
                                                    className=""
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
                                    </div>
                                    <div
                                        className="w-full flex items-center justify-center flex-col gap-2 pt-3
                                    "
                                    >
                                        <div
                                            className={` ${
                                                selectDocterIsChecked
                                                    ? "bg-gray-500"
                                                    : "bg-primaryTW"
                                            }  text-whiteTW rounded-md px-12 py-2`}
                                        >
                                            <button type="button">
                                                Ajukan Verifikasi
                                            </button>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            *Dokter akan ditentukan secara
                                            otomatis
                                        </div>
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
