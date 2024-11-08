<script setup>
import Header from "@/components/Header.vue";
import {
  SendHorizontal,
  CalendarClock,
  ChartBarBig,
  UsersRound,
} from "lucide-vue-next";
</script>
<template>
  <Header />
  <div class="block">
    <h3
      style="text-align: center; margin: 10px"
      class="scroll-m-20 text-2xl tracking-tight"
    >
      Групповые чаты с задачами
    </h3>
  </div>
  <div class="container" style="height: 60%">
    <div class="block">
      <div class="item-instruction">
        <div class="item-icon">
          <SendHorizontal :size="32" />
        </div>
        <p class="item-name">все функции мессенджера</p>
      </div>

      <div class="item-instruction">
        <div class="item-icon">
          <ChartBarBig :size="32" />
        </div>
        <p class="item-name">статусы, поиск, роли, сроки, оценки</p>
      </div>

      <div class="item-instruction">
        <div class="item-icon">
          <CalendarClock :size="32" />
        </div>
        <p class="item-name">отслеживание времени, отчеты</p>
      </div>
      <div class="item-instruction">
        <div class="item-icon">
          <UsersRound :size="32" />
        </div>
        <p class="item-name">контроль исполнителей</p>
      </div>
    </div>
  </div>
  <div class="block" id="footer-text">
    <h4
      style="text-align: center;"
      class="scroll-m-20 text-xl tracking-tight"
    >
        И всё это в простом мессенджере.
        Меньше действий — больше результат.
    </h4>
  </div>
</template>

<style>
.item-instruction {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.item-icon {
  margin-right: 25px;
}
.item-name {
  font-size: larger;
  text-align: center;
}
#footer-text {
    width: 90vw;
}

</style>
