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
            dialogVisible: this.showModal,
        }
    },
    methods: {
        closeDialog() {
            this.dialogVisible = false;
            this.$emit('close');
        },

        redierctToStartPage() {
            this.$router.push('/questions/1');

        },
    },
    watch: {
        showModal(newValue) {
            this.dialogVisible = newValue;
        }
    },
}
</script>
<template>
    <div :class="{ 'hidden': !showModal }">
        <div class="fixed w-screen h-screen left-0 top-0 modal-background">
            <div class="absolute w-full h-full" @click="closeDialog"></div>
            <div class="confirm-modal modal-wrapper">
                <div class="modal">
                    <div class="modal-close">
                        <button type="button" class="modal-close-inner" @click="closeDialog">
                            <img src="/images/modal-close.svg" alt="close" />
                        </button>
                    </div>
                    <div class="modal-content">
                        <div class="grid grid-cols-1 w-full">
                            <div class="text-main-content mb-2"><b>Are you sure you’d like to start over?</b></div>
                            <div class="text-middle-content mb-6">You will lose all of the drafts you hve curently made. If
                                you
                                want, you can <b>share</b> your current drafts using the button on the bottom right before
                                continuing on with a clean slate.</div>
                            <div class="grid grid-cols-2 w-full">
                                <button type="button" class=" btn btn-secondary  font-small-caps ">Nevermind!</button>
                                <button type="button" class="  btn btn-primary  font-small-caps" :onClick="redierctToStartPage">Start over</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

@media screen and (max-width: 640px) {
    .confirm-modal .modal {
        width: 100% !important;
    }

    .confirm-modal {
        padding: 0 50px 0px 24px !important
    }
}

.modal-background {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.confirm-modal .modal {
    width: 480px;
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
}
</style>
