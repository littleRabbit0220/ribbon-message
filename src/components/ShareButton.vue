<template>
    <button :class="Class" @click="openModal">
        <slot></slot>
    </button>
    <EmailInputModal :showModal="isModalVisible" @close="closeModal"></EmailInputModal>
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
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
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