<template>
    <div class="flex flex-col justify-center h-screen items-center">
        <div class="form-content form-content-sm">
            <div class="text-main-content mb-4 w-full">Given their situation, what would you request the learner do next</div>
            
        </div>
    </div>
</template>
<script>
import ToggleCard from '../../components/ToggleCard.vue';
export default {
    components: {
        ToggleCard,
    },
    name: 'Second Question',
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>
