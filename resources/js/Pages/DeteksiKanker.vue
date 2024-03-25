<template>
    <div>
        <h1>HOME</h1>
        <router-link to="/test"> Take me to Test page </router-link>
        <button @click.prevent="getValue">Trigger Endpoint</button>
        <p v-if="response">
            {{ response.length != 0 ? response[0].name : "user kosong" }}
        </p>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

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
