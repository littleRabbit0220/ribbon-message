<script setup></script>

<template>
  <div class="second-question-form">
    <h4 class="font-primary-text">
      Given their situation, what would you request the<br />
      learner do next?
    </h4>
    <textarea class="input-text" placeholder=""></textarea><br />
    <button type="button" class="btn-primary">DEFAULT EMAIL</button>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.second-question-form {
  width: 480px;
  h4 {
    margin-bottom: 16px;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 16px;
  }
  button {
    width: 100%;
  }
  
}

</style>
