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
  <div class="success-modal modal-wrapper">
    <div class="modal">
      <div class="modal-close">
        <button type="button" class="modal-close-inner">
          <img src="/images/modal-close.svg" alt="close" />
        </button>
      </div>
      <div class="modal-title">
        <h3 >Successfully sent</h3>
      </div>
      <div class="modal-content">
        <img src="/images/success.svg" alt="success"/>
        <p>For more tools like these, check out Ribbon. Ribbon is the first student CRM platform built for online adult education providers tostreamline operations and improve student retention. </p>
        <div class="btns">
          <button type="button" class="btn btn-primary font-samll-caps">book a demo</button>
          <button type="button" class="btn btn-secondary font-small-caps">about ribbon</button>
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.success-modal .modal {
  width: 480px;
  height: 382px;
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
      margin-bottom: 16px;
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
