<template>
    <button :class="Class">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        class: {
            type: String,
            default: "",
        }
    },
    computed: {
        Class() {
            return "btn btn-md btn-sd btn-sm " + this.class;
        }
    }

}
</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>