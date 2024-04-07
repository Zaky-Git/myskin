<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- Logo / Brand -->
            <div>
                <a class="navbar-brand" href="#">Logo</a>
                <!-- Navbar Toggler kalo kecil -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <!-- Navbar Items -->
            <div>
                <div class="collapse navbar-collapse poppin-font" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @focus="activeItem = 'deteksi'" :class="{ 'focused': activeItem === 'deteksi' }">Deteksi Kanker</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @focus="activeItem = 'faq'" :class="{ 'focused': activeItem === 'faq' }">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @focus="activeItem = 'products'" :class="{ 'focused': activeItem === 'products' }">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @focus="activeItem = 'about'" :class="{ 'focused': activeItem === 'about' }">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @focus="activeItem = 'contact'" :class="{ 'focused': activeItem === 'contact' }">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Button -->
            <div>
                <button class="btn btn-ms poppin-font">Masuk</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {ref} from "vue";

const activeItem = ref('');
</script>
