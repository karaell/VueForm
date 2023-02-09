<template>
  <div
    class="modal fixed flex top-0 bottom-0 left-0 right-0 bg-modal animation-[wiggle 1s ease-in-out infinite]"
  >
    <div
      @click.stop
      class="modal__content bg-white rounded-lg p-[20px] tl:p-[24px] m-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-block",
};
</script>
