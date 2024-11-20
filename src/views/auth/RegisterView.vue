<script setup>
import "./style.css";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import { ChevronLeft } from "lucide-vue-next";
import { useToast } from "@/components/ui/toast/use-toast";

// VARIABLES

const router = useRouter();
const { toast } = useToast();
const nextStepForm = ref(true);
const userData = ref({
  surname: "",
  name: "",
  patronimyc: "",
  number_phone: "",
  password: "",
  repeat_password: "",
});
const emptyInputs = ref({
  surname: false,
  name: false,
  patronimyc: false,
  number_phone: false,
  password: false,
  repeat_password: false,
});
const passwordCorrect = ref({
  length: true,
  repeat: true,
});

// FUNCTIONS

function onChange(event) {
  const { value, name } = event.target;
  emptyInputs.value[name] = false;
  if (name == "password") {
    passwordCorrect.value.length = value.length >= 6;
  } else if (name == "repeat_password") {
    passwordCorrect.value.repeat = userData.value.password == value;
  }
}

function onSubmit() {
    for(var key in userData.value) {
        if(userData.value[key].length == 0) {
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

function changeNextStepForm() {
  nextStepForm.value
    ? (nextStepForm.value = false)
    : (nextStepForm.value = true);
}
</script>

<template>
  <div class="header">
    <Button variant="outline" @click="router.push('/')">
      <ChevronLeft />
    </Button>
  </div>
  <div class="container">
    <div v-if="nextStepForm" class="block">
      <div class="caption-form">
        <div class="text-lg font-semibold">РЕГИСТРАЦИЯ</div>
      </div>
      <div class="form">
        <!-- ФАМИЛИЯ -->

        <div class="form-item">
          <Label>Фамилия</Label>
          <Input
            type="text"
            v-model="userData.surname"
            name="surname"
            @input="onChange"
            placeholder="Введите фамилию"
          />
          <p v-if="emptyInputs.surname" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <!-- ИМЯ -->

        <div class="form-item">
          <Label>Имя</Label>
          <Input
            type="text"
            name="name"
            v-model="userData.name"
            @input="onChange"
            placeholder="Введите имя"
          />
          <p v-if="emptyInputs.name" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <!-- ОТЧЕСТВО -->

        <div class="form-item">
          <Label>Отчество</Label>
          <Input
            type="text"
            name="patronimyc"
            v-model="userData.patronimyc"
            @input="onChange"
            placeholder="Введите отчество"
          />
          <p v-if="emptyInputs.patronimyc" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <div
          class="form-item"
          style="flex-direction: row; align-items: center; margin-bottom: 0px"
        >
          <blockquote class="mt-6 italic" style="margin-top: 0px">
            У вас есть аккаунт?
            <Button
              variant="link"
              class="italic"
              style="text-decoration: underline"
              @click="router.push('/auth/login')"
              >Войти</Button
            >
          </blockquote>
        </div>

        <Button style="margin-top: 15px" @click="changeNextStepForm()"
          >Продолжить</Button
        >
      </div>
    </div>
    <div class="block" v-else>
      <div class="caption-form">
        <div class="text-lg font-semibold">РЕГИСТРАЦИЯ</div>
      </div>
      <div class="form">
        <!-- ТЕЛЕФОН -->

        <div class="form-item">
          <Label>Номер телефона</Label>
          <Input
            type="tel"
            name="number_phone"
            v-model="userData.number_phone"
            @input="onChange"
            placeholder="+7 999..."
            max="13"
          />
          <p v-if="emptyInputs.number_phone" class="input-err italic">
            Поле не заполнено *
          </p>
        </div>

        <!-- ПАРОЛЬ -->

        <div class="form-item">
          <Label>Пароль</Label>
          <Input
            type="password"
            v-model="userData.password"
            name="password"
            @input="onChange"
            placeholder="Введите пароль"
          />
          <p v-if="emptyInputs.password" class="input-err italic">
            Поле не заполнено *
          </p>
          <p v-if="!passwordCorrect.length" class="input-err italic">
            Не меньше 6 символов *
          </p>
        </div>

        <!-- ПОВТОР ПАРОЛЯ -->

        <div class="form-item">
          <Label>Повтор пароля</Label>
          <Input
            type="password"
            v-model="userData.repeat_password"
            name="repeat_password"
            @input="onChange"
            placeholder="Введите пароль"
          />
          <p v-if="!passwordCorrect.repeat" class="input-err italic">
            Пароли не совподают *
          </p>
        </div>

        <div class="form-item" style="flex-direction: row">
          <blockquote
            style="margin-top: 5px; margin-bottom: 5px"
            class="mt-6 italic"
          >
            Нажимая “Зарегистрироваться” вы соглашаетесь с
            <a href="#" style="color: #1e40af">
              условиями обработки персональных данных
            </a>
          </blockquote>
        </div>
        <div class="form-item" style="flex-direction: row; margin-top: 15px">
          <Button @click="changeNextStepForm()">Назад</Button>
          <Button @click="onSubmit()">Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  </div>
</template>
