<template>
  <div
    class="font-sans text-[16px] leading-5 pt-[10px] px-[10px] lt:pt-[20px] lt:pl-[40px] dt:w-[1440px] dt:pl-[80px]"
  >
    <order-btns />
    <modal-block v-if="isFormModalShow" @click="$store.commit('setIsFormModalShow')">
      <order-form />
    </modal-block>

    <modal-block
      v-if="isRequestSuccessfulModalShow"
      @click="$store.commit('setIsRequestSuccessfulModalShow')"
    >
      Форма отправлена успешно
    </modal-block>

    <modal-block
      v-if="isRequestErrorModalShow"
      @click="$store.commit('setIsRequestErrorModalShow')"
    >
      Ошибка при отправке формы</modal-block
    >
  </div>
</template>

<script>
import OrderBtns from "./components/OrderBtns.vue";
import OrderForm from "./components/Form/OrderForm.vue";
import ModalBlock from "./components/Modal/ModalBlock.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { OrderBtns, OrderForm, ModalBlock },
  setup() {
    const store = useStore();

    const isFormModalShow = computed(() => store.state.isFormModalShow);

    const isRequestSuccessfulModalShow = computed(
      () => store.state.isRequestSuccessfulModalShow
    );
    const isRequestErrorModalShow = computed(
      () => store.state.isRequestErrorModalShow
    );

    return {
      isRequestSuccessfulModalShow,
      isRequestErrorModalShow,
      isFormModalShow,
    };
  },
};
</script>
