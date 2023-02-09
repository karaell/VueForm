<template>
  <div>
    <label for="city" class="text-[#374151] leading-5">Город*</label><br />
    <select
      :value="modelValue"
      @change="handleClickSelect"
      class="py-[9px] px-[13px] w-[100%] h-[38px] font-normal border-[#D1D5DB] border-[1px] rounded-md mt-[4px]"
    >
      <option v-for="city in cities" :key="city.id" :value="city.id">
        {{ city.name }}
      </option>
    </select>
    <br />
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "city-field",
  props: {
    modelValue: String,
  },
  setup() {
    const store = useStore();

    const cities = [
      {
        id: 1,
        name: "Москва",
      },
      {
        id: 2,
        name: "Санкт-Петербург",
      },
      {
        id: 3,
        name: "Казань",
      },
    ];

    const handleClickSelect = (e) => {
      const cityName = e.target.value;
      store.commit("setCurrentCityId", cityName);
    };

    return { cities, handleClickSelect };
  },
};
</script>
