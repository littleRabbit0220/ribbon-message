<template>
    <div class="flex flex-col flex-1">
    <MenuBar/>
    <div class="flex flex-col h-full justify-center items-center">
        <div class="form-content form-content-sm">
            <div class="text-main-content mb-4 w-full">Given their situation, what would you request the learner do next?
            </div>
            <div class="flex flex-col justify-center">
                <textarea class="text-area w-full" placeholder="Book a meeting with me so we can figure out what’s going on. My calendly link is https://calendly.com/ribboneducation/15-min-chat|"></textarea>
                <Button class="btn-primary mt-4">
                    draft email
                </Button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import ToggleCard from '../../components/ToggleCard.vue';
import Button from '../../components/Button.vue';
export default {
    components: {
    ToggleCard,
    MenuBar,
    Button
},
    name: 'Second Question',
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
</style>
