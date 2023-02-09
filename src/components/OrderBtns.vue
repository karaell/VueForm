<template>
  <div class="">
    <my-button class="bg-[#3B82F6] mr-[20px]" @click="handleClickBtn('1')"
      >Заказать в Москву</my-button
    >
    <my-button class="bg-[#0D9488]" @click="handleClickBtn('2')"
      >Заказать в Санкт-Петербург</my-button
    >
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "order-btns",
  setup() {
    const store = useStore();

    const handleClickBtn = (cityId) => {
      store.commit("setIsFormModalShow");
      store.commit("setCurrentCityId", cityId);
    };

    return { handleClickBtn };
  },
};
</script>

<style lang="scss" scoped></style>
