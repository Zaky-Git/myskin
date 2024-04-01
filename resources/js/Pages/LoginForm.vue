<template>
    <div>
        <div v-if="showModal" class="modal-bg">
            <div class="container d-flex justify-content-center align-items-center min-vh-100 poppin-font">
                <div class="border rounded-5 p-5 bg-white shadow box-area w-50">
                    <div class="right-box">
                        <div class="align-items-center">
                            <div class="header-text mb-4">
                                <h5>My Skin</h5>
                                <p class="text-muted">Masuk untuk tetap terhubung</p>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email">
                            </div>
                            <div class="input-group mb-1">
                                <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Kata Sandi">
                            </div>
                            <div class="input-group mb-5 d-flex justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="formCheck">
                                    <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div class="forgot">
                                    <small><a href="#">Lupa Kata Sandi?</a></small>
                                </div>
                            </div>
                            <div class="input-group mb-3 justify-content-center">
                                <button @click="hideLoginForm" class="btn btn-lg btn-primary w-50 fs-6">Login</button>
                            </div>
                            <div>
                                <small>Belum memiliki akun? <a href="#">Klik disini untuk daftar</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 9999;
}
</style>
