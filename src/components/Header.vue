<script setup>
import { Button } from '@/components/ui/button';
import { ChevronLeft, AlignJustify } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<template>
    <div class="header">
        <Button variant="outline" @click="router.back()">
            <ChevronLeft class="w-4 h-4" />
        </Button>
        <router-link to="/">
            <div class="logo">
                <img src="@/assets/logo.svg" width="30" height="30"/>
            </div>
        </router-link>
        <AlignJustify :size="30" :stroke-width="2" />
    </div>
</template>

<style>
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 97%;
    height: 50px;
    padding: 5px;
}

#btn-mobile-menu {
    width: 30px;
    height: 30px;
    padding: 5px !important;
}
</style>