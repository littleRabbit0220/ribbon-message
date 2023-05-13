
<template>
  <div class="menu-bar font-small-caps">
    <a class="btn-back" v-on:click="goBack">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.3506 2.85355C10.1554 2.65829 9.83878 2.65829 9.64352 2.85355L4.99707 7.5C4.60655 7.89052 4.60654 8.52369 4.99707 8.91421L9.64352 13.5607C9.83878 13.7559 10.1554 13.7559 10.3506 13.5607C10.5459 13.3654 10.5459 13.0488 10.3506 12.8536L5.70418 8.20711L10.3506 3.56066C10.5459 3.3654 10.5459 3.04882 10.3506 2.85355Z"
          fill="#212121"
        />
      </svg>
      <span>Back</span>
    </a>
    <a class="btn-start" v-on:click="startOver">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.81208 8C3.81208 5.51472 5.82685 3.5 8.3122 3.5C10.7975 3.5 12.8123 5.51472 12.8123 8C12.8123 10.4853 10.7975 12.5 8.3122 12.5C8.03605 12.5 7.81219 12.7239 7.81219 13C7.81219 13.2761 8.03605 13.5 8.3122 13.5C11.3498 13.5 13.8123 11.0376 13.8123 8C13.8123 4.96243 11.3498 2.5 8.3122 2.5C5.27455 2.5 2.81205 4.96243 2.81205 8C2.81205 8.01241 2.8125 8.02471 2.81339 8.03689L1.54425 6.76778C1.34898 6.57252 1.03239 6.57252 0.837124 6.76778C0.641857 6.96304 0.641857 7.27963 0.837124 7.47489L2.9585 9.59621C3.15377 9.79147 3.47036 9.79147 3.66563 9.59621L5.787 7.47489C5.98227 7.27963 5.98227 6.96304 5.787 6.76778C5.59174 6.57252 5.27515 6.57252 5.07988 6.76778L3.81074 8.03689C3.81163 8.02471 3.81208 8.01241 3.81208 8ZM3.34895 8.49866C3.33677 8.49955 3.32447 8.5 3.31206 8.5C3.29966 8.5 3.28736 8.49955 3.27517 8.49866L3.31206 8.53555L3.34895 8.49866Z"
          fill="#212121"
        />
      </svg>
      <span>Start Over</span>
    </a>
  </div>
  <ConfirmModal :showModal="isModalVisible" @close="closeModal"></ConfirmModal>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.menu-bar {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  .btn-back {
    padding: 8px 16px;
    gap: 4px;
    width: 101px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor:pointer;
    span {
      font-weight: 700;
    }
  }
  .btn-start {
    padding: 8px 16px;
    gap: 4px;
    width: 163px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    span {
      font-weight: 700;
    }
  }
}
</style>

<script>
import ConfirmModal from './utils/ConfirmModal.vue';
  export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        startOver() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
    },
    components: {
      ConfirmModal
    },
    data() {
      return {
        isModalVisible: false
      }
    }
  }
</script>
