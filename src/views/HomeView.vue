<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
router.push('/greeting');
</script>
<template>
    <router-link to="/about">about</router-link>
</template>