<script>
import EmailInputModal from '../components/utils/EmailInputModal.vue'
import SuccessModal from '../components/utils/SuccessModal.vue';
export default {
  data() {
    return {
      dialog: false
    }
  },
  components: { SuccessModal }
}
</script>
<template>
  <div class="text-center">
    <SuccessModal :showModal="true" />
  </div>
</template>

<style lang="scss" scoped>


</style>
