<template>
    <div class="flex flex-col justify-center h-screen items-center">
        <div class="form-content form-content-sm">
            <div class="text-main-content mb-4 w-full">Given their situation, what would you request the learner do next?
            </div>
            <div class="flex flex-col justify-center">
                <textarea class="text-area w-full">Book a meeting with me so we can figure out what’s going on. My calendly link is https://calendly.com/ribboneducation/15-min-chat|
                        </textarea>

                <button class="btn btn-primary mt-4">
                    draft email
                </button>
            </div>
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
