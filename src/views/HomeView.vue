<script>
import MenuBar from '../components/MenuBar.vue'
import FirstQuestionForm from '../components/FirstQuestionForm.vue';
import SecondQuestionForm from '../components/SecondQuestionForm.vue'
export default {
  components: {
    MenuBar,
    SecondQuestionForm,
    FirstQuestionForm
  },
  data() {
    return {}
  }
}
</script>
<template>
  <div>
    <MenuBar />
    <SecondQuestionForm />
    <FirstQuestionForm/>
  </div>
</template>
<style scoped></style>
