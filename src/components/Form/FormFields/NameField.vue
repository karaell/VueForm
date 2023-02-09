<template>
  <div class="relative">
    <label for="name" class="text-[#374151] leading-5">Имя*</label><br />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      id="name"
      name="name"
      type="text"
      placeholder="Иван Иванов"
      class="py-[9px] px-[13px] w-[100%] h-[38px] font-normal border-[#D1D5DB] border-[1px] rounded-md mt-[4px]"
    />
    <br />
    <span class="text-[15px] text-red-500 pl-[5px] absolute" v-if="isError"
      >Обязательное поле</span
    >
  </div>
</template>

<script>
export default {
  name: "name-field",
  props: {
    modelValue: String,
    isError: Boolean,
  },
};
</script>
