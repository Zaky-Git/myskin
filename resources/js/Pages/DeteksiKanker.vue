<template>
        <div class="justify-content-center">
            <div class="text-center">
                <h1 class="poppin-font fw-bolder mt-4 mb-4">
                    Deteksi Kanker
                </h1>
                <div class="poppin-font container-sm mb-4">
                    <h5 class="text-muted">
                        Masukkan gambar untuk mendeteksi kanker dari gambar yang diberikan.
                    </h5>
                </div>
                <button type="button" class="btn btn-primary mb-4 poppin-font" href="">
                    Pilih Gambar
                </button>
            </div>
            <div class="poppin-font align-items-center text-muted" style="width: 500px; margin: auto;">
                <h3 class="text-center">Aturan Gambar</h3>
                <div class="container-sm" style="width: 400px">
                    <ol type="1">
                        <li>Format: JPEG, PNG.</li>
                        <li>Ukuran: Maksimum 5 MB.</li>
                        <li>Resolusi: Minimal 800 x 600 piksel.</li>
                    </ol>
                </div>
                <div class="text-muted poppin-font fixed-bottom text-center mb-4 fs-6">
                    <p>
                        *Hasil deteksi belum dipastikan benar karena web hanya memberikan indikasi awal, silahkan <a href="/">login</a> untuk verifikasi hasil deteksi oleh Dokter.
                    </p>
                </div>
            </div>
        </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import '/resources/css/app.css'
const response = ref("");

const getValue = async () => {
    try {
        const res = await axios.get("/api/users");
        response.value = res.data;
    } catch (error) {
        console.error(error);
    }
};

</script>
