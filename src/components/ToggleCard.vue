<template>
    <div class="toggle-card">
        <div :class="{'card card-sm':!isSelectd, 'card card-sm card-selected':isSelected}" @click="isSelected=!isSelected">
            <span :hidden="!icon" class="mr-4">
                <img :src="icon" class="mr-13" height="45px" />
            </span>
            {{ text }}
        </div>
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