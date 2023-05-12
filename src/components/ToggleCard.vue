<template>
    <div class="toggle-card flex">
        <button class="card card-sm" ref="" :onClick="this.onClick">
            <span :hidden="!icon" class="md:mr-4 sm:mr-2 mr-1">
                <img :src="icon" class="imgColor md:inline hidden"  width="45" height="45"/>
                <img :src="icon" class="imgColor md:hidden inline"  width="24" height="24"/>
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