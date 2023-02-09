<template>
  <div class="form w-[315px] lt:w-[621px] dt:w-[745px]">
    <div
      class="form__header text-[24px] text-[#111827] leading-6 font-medium mb-[36px] lt:mb-[23px] flex justify-between"
    >
      Заказать звонок
    </div>
    <form
      @submit.prevent
      class="grid gap-y-[20px] dt:grid-cols-4 lt:grid-rows-2 dt:gap-x-[20px] lt:gap-x-[26px] dt:gap-y-0 lt:grid-cols-3"
    >
      <name-field v-model="state.name" :isError="v$.name.$error" />
      <phone-field v-model="state.phone" :isError="v$.phone.$error" />
      <email-field v-model="state.email" :isError="v$.email.$error" />
      <city-field
        v-model="state.selectedCity"
        class="lt:row-start-2 lt:col-start-1 lt:col-end-3 dt:row-start-1 dt:col-start-4 dt:col-end-5"
      />

      <button
        @click="handleClickSubmit"
        class="lt:col-start-3 dt:col-start-4 lt:row-start-2 bg-[#16A34A] py-[11px] px-[42px] rounded-md text-white text-[16px] leading-5 font-medium lt:mt-[18px] w-[100%]"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useStore } from "vuex";
import NameField from "./FormFields/NameField.vue";
import PhoneField from "./FormFields/PhoneField.vue";
import EmailField from "./FormFields/EmailField.vue";
import CityField from "./FormFields/CityField.vue";

export default {
  name: "order-form",
  components: { NameField, PhoneField, EmailField, CityField },
  setup() {
    const store = useStore();

    const currentCityId = computed(() => store.state.currentCityId);

    const state = reactive({
      name: "",
      phone: "",
      email: "",
      selectedCity: currentCityId,
    });

    const rules = computed(() => {
      return {
        name: {
          required,
          minLength: minLength(2),
        },
        phone: { required },
        email: { required, email },
        selectedCity: { required },
      };
    });
    const v$ = useVuelidate(rules, state);

    async function handleClickSubmit() {
      const isFormCorrect = await this.v$.$validate();

      const data = {
        name: state.name,
        phone: state.phone.replace(/[()-\s]/gm, ""),
        email: state.email,
        city_id: Number(state.selectedCity),
      };

      if (isFormCorrect) {
        store.dispatch("setFormData", data);
      }
    }

    return {
      v$,
      state,
      handleClickSubmit,
    };
  },
};
</script>

<style lang="scss" scoped></style>
