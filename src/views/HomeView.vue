<script setup>
import { useRouter } from "vue-router";
import Button from "@/components/ui/button/Button.vue";
import { getCookie } from "@/utils/cookie.utils";
import {
  UserCog,
  CalendarCheck,
  MessageCircle,
  UsersRound,
} from "lucide-vue-next";
import { API } from "@/constants";
import { ref } from "vue";

const router = useRouter();
const userData = ref({
  surname: "",
  name: ""
});
const response = fetch(API.USER.PROFILE, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  },
});

response.then((res) => res.json()).then((dataServer) => {
  if(dataServer.statusCode) {
    const { statusCode, message, data } = dataServer;

    switch (statusCode) {
      case 200:
        userData.value = data;
        break;
      case 401:
        router.push('/auth/login');
        break;
    }
  } else {
    console.log(data);
  }
});
</script>
<template>
  <div class="main">
    <div class="left-bar">
      <div class="left-bar-header">
        <div class="text-lg font-semibold">Мой аккаунт</div>
      </div>
      <div class="left-bar-body">
        <div class="text-lg font-semibold">{{ userData.surname }} {{ userData.name }}</div>
      </div>
      <div class="left-bar-footer">
        <Button variant="secondary">
          <MessageCircle />
        </Button>
        <Button variant="secondary">
          <CalendarCheck />
        </Button>
        <Button variant="secondary">
          <UsersRound />
        </Button>
        <Button variant="secondary">
          <UserCog />
        </Button>
      </div>
    </div>
    <div class="container" style="width: auto">
      <div class="block">Hello world</div>
    </div>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
.left-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 100vh;
  background-color: white;
}
.left-bar-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #e4e4e4;
}
.left-bar-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
}
.left-bar-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  border-top: 0.5px solid #e4e4e4;
}
</style>
