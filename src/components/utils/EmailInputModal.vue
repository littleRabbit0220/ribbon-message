<script>
export default {
  props: {
    title: String,
    message: String,
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: true,
    }
  },
  mounted() {
    this.dialogVisible = this.showModal;
  },
  methods: {
    closeDialog() {
      this.showModal = false
    }
  }
}
</script>
<template>
  <div :class="{ 'hidden': !dialogVisible, }">
    <div class="fixed w-screen h-screen left-0 top-0 modal-background">
      <div class="absolute w-full h-full" @click="closeDialog"></div>
      <div class="input-modal modal-wrapper">
        <div class="modal">
          <div class="modal-close">
            <button type="button" class="modal-close-inner" @click="closeDialog">
              <img src="/images/modal-close.svg" alt="close" />
            </button>
          </div>
          <div class="modal-title">
            <h3 class="">Share your drafts yourself or others</h3>
          </div>
          <div class="modal-content">
            <input type="text" class="input-text" />
            <button type="button" class="btn btn-primary font-small-caps">share drafts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.modal-background {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-modal .modal {
  width: 480px;
  height: 196px;
  background-color: $whiteColor;
  transition: opacity 1s;
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;

  .modal-close {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border: 4px solid #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    right: -17px;
    top: -22.5px;

    .modal-close-inner {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: black;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  .modal-title {
    h3 {
      font-family: 'Outfit';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      text-align: left;
      margin-bottom: 16px;
    }
  }

  .modal-content {
    input {
      width: 100%;
      margin-bottom: 16px;
    }

    button {
      float: right;
      width: 153px;
      letter-spacing: 0.1em;
      text-align: left;
      padding: 16px;
      font-weight: 700;
    }
  }
}
</style>
