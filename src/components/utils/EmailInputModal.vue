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
      dialogVisible: this.showModal
    }
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false
    }
  }
}
</script>
<template>
  <div class="input-modal modal-wrapper">
    <div class="modal">
      <div class="modal-close">
        <button type="button" class="modal-close-inner">
          <img src="/images/modal-close.svg" alt="close"/>
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
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.input-modal .modal {
  width: 480px;
  height: 220px;
  background-color: $whiteColor;
  transition: opacity 1s;
  position: relative;
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
    right:-17px;
    top:-22.5px;
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
