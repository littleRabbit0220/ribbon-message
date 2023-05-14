<template>
    <button :class="Class" :onClick="this.onClick">
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
        },
        onClick : {
            type: Function,
            default: null
        }
    },
    computed: {
        Class() {
            return "btn " + this.class;
        }
    }

}
</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";

</style>