<template>
    <div class="flex flex-col justify-center h-screen items-center">
        <div class="form-content form-content-sm">
            <div class="text-main-content mb-4 w-full">Help me write a sample email to my learner who has:</div>
            <ToggleCard text="missed assignments" />
            <ToggleCard text="been absent from class" />
            <ToggleCard text="been late to class" />
            <ToggleCard text="a concering grade" />
        </div>
    </div>
</template>
<script>
import ToggleCard from '../../components/ToggleCard.vue';
export default {
    components: {
        ToggleCard,
    },
    name: 'first Question',
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>
