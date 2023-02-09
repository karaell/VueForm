<template>
  <div class="relative">
    <label for="phone" class="text-[#374151] leading-5">Телефон*</label><br />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      id="phone"
      name="phone"
      type="text"
      v-mask="'+7 (###) ###-##-##'"
      placeholder="+7 (___) ___-__-__"
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
  name: "phone-field",
  props: {
    modelValue: String,
    isError: Boolean,
  },
};
</script>
