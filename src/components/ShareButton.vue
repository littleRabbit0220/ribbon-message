<template>
    <button :class="Class" @click="onClickShare">
        <slot></slot>
    </button>
    <EmailInputModal :showModal="isModalVisible"></EmailInputModal>
</template>
<script>
import EmailInputModal from './utils/EmailInputModal.vue';

export default {
    name: "ShareButton",
    props: {
        class: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        onClickShare() {
            this.isModalVisible = true;
        }
    },
    computed: {
        Class() {
            return "share-btn " + this.class;
        }
    },
    components: { EmailInputModal }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>