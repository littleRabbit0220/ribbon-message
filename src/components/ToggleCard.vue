<template>
    <div class="toggle-card">
        <button class="card card-sm w-full" ref="">
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