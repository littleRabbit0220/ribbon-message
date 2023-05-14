<template>  
        <div class="flex flex-col justify-center grow items-center">
            <div class="form-content form-content-sm">
                <div class="text-main-content mb-4 w-full pl-2">Help me write a sample email to my learner who has:</div>
                <ToggleCard text="missed assignments" :onClick="redierctToPageTwo" />
                <ToggleCard text="been absent from class" :onClick="redierctToPageTwo" />
                <ToggleCard text="been late to class" :onClick="redierctToPageTwo" />
                <ToggleCard text="a concering grade"  :onClick="redierctToPageTwo"/>
            </div>
        </div>
</template>
<script>
import ToggleCard from '../../components/ToggleCard.vue';
export default {
    components: {
        ToggleCard,
    },
    methods: {
        redierctToPageTwo() {
            this.$router.push('/questions/2');
        },
    },
    name: 'first-question',
}
</script>
