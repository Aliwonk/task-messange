<script setup>
import "./style.css";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "@/components/ui/toast/use-toast";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import { ChevronLeft } from "lucide-vue-next";

const router = useRouter();
const { toast } = useToast();
const userData = ref({
  number_phone: "",
  password: "",
});
const emptyInputs = ref({
  password: false,
  number_phone: false,
});

function onChange(event) {
  const { name } = event.target;
  emptyInputs.value[name] = false;
}

function onSubmit() {
  for (var key in userData.value) {
    if (userData.value[key].length == 0) {
      emptyInputs.value[key] = true;
    } else {
      emptyInputs.value[key] = false;
    }
  }

  const checkEmpty = Object.values(emptyInputs.value).every(value => value == false);
    if(checkEmpty) {
        console.log(userData.value);
    } else {
        toast({
            variant: "destructive",
            description: 'Ошибка',
        });
        console.log("NOT")
    }
}
</script>

<template>
  <div class="header">
    <Button variant="outline" @click="router.push('/')">
      <ChevronLeft />
    </Button>
  </div>
  <div class="container">
    <div class="block">
      <div class="caption-form">
        <div class="text-lg font-semibold">ВХОД</div>
      </div>
      <div class="form">
        <div class="form-item">
          <Label>Телефон</Label>
          <Input
            type="tel"
            name="number_phone"
            v-model="userData.number_phone"
            @input="onChange"
            placeholder="+7 999 ..."
          />
          <p v-if="emptyInputs.number_phone" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <div class="form-item">
          <Label>Пароль</Label>
          <Input
            type="password"
            name="password"
            v-model="userData.password"
            placeholder="Введите пароль"
            @input="onChange"
          />
          <p v-if="emptyInputs.password" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <div
          class="form-item"
          style="flex-direction: row; align-items: center; margin-bottom: 0px"
        >
          <blockquote class="mt-6 italic" style="margin-top: 0px">
            Нет аккаунта?
            <Button
              variant="link"
              class="italic"
              style="text-decoration: underline"
              @click="router.push('/auth/register')"
              >Зарегистрироваться</Button
            >
          </blockquote>
        </div>

        <Button style="margin-top: 15px" @click="onSubmit()"
          >Войти</Button
        >
      </div>
    </div>
  </div>
</template>
