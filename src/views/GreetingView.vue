<script setup>
import Button from '@/components/ui/button/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function clickBtn(path) {
  router.push(path);  
}
</script>

<template>
  <div class="container">
    <div class="block">
      <div class="logo-card">
        <div class="logo">
          <img src="@/assets/logo.svg" width="60" height="60" />
        </div>
        <p class="name-app">TASK MESSANGER</p>
      </div>
      <Button class="btn" variant="secondary" @click="clickBtn('/instruction')">
        КРАТКАЯ ИНСТРУКЦИЯ
      </Button>
    </div>
    <div class="block">
      <Button class="btn" @click="clickBtn('/auth/register')">
        НАЧАТЬ РАБОТУ
      </Button>
      <Button class="btn" id="btn-support" variant="secondary">
        ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
      </Button>
    </div>
  </div>
</template>

<style>
.logo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 15px;
  /* border: 0.5px solid grey; */
  border-radius: 10px;
}

.name-app {
  margin-top: 20px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 15px;
  border-radius: 8px;
}

#btn-support {
  margin-top: 40px;
}
</style>
