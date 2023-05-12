<template>
    <div class="toggle-card flex">
        <button class="card card-sm" ref="" :onClick="this.onClick">
            <span :hidden="!icon" class="mr-4">
                <img :src="icon" class="mr-13" height="45px" />
            </span>
            {{ text }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'ToggleCard',
    props: {
        icon: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            default: "",
        },
        onClick: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            isSelected: false,
        }
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>