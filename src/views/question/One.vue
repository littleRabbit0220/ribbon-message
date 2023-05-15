<template>  
        <div class="flex flex-col justify-center grow items-center">
            <div class="form-content form-content-sm">
                <div class="text-main-content mb-4 w-full pl-2">Help me write a sample email to my learner who has:</div>
                <ToggleCard text="missed assignments" @click="redierctToPageTwo('missed assignments')" />
                <ToggleCard text="been absent from class"  @click="redierctToPageTwo('been absent from class')" />
                <ToggleCard text="been late to class"  @click="redierctToPageTwo('been late to class')" />
                <ToggleCard text="a concering grade"   @click="redierctToPageTwo('a concering grade')"/>
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
        redierctToPageTwo(value) {
            this.$router.push({
                name: 'question2',
                query: {
                    question1: value,
                }
            });
        },
    },
    name: 'first-question',
}
</script>
