<script setup></script>

<template>
  <div class="first-question-form">
    <h4 class="font-primary-text">Help me write a sample email to my learner who has:</h4>
    <button type="button" class="card font-small-caps">nissed assignments</button><br />
    <button type="button" class="card font-small-caps">beeb absent from class</button><br />
    <button type="button" class="card font-small-caps">been late to class</button><br />
    <button type="button" class="card font-small-caps">a concerning grade</button>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.first-question-form {
  h4 {
    margin-bottom: 16px;
  }
  button {
    color: $primaryColor;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
    text-align: left;
  }
  @media (max-width: 530px) {
    .card {
      font-size: 12px;
      line-height: 16px;
      width: 100%;
    }
  }
}
</style>
