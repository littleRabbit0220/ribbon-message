<template>
    <button :class="Class">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'ShareButton',
    props: {
        class: {
            type: String,
            default: "",
        }
    },
    computed: {
        Class() {
            return "share-btn " + this.class;
        }
    }

}
</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>