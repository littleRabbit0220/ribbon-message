<template>  
        <div class="flex flex-col justify-center grow items-center">
            <div class="form-content form-content-sm">
                <div class="text-main-content mb-4 w-full">Help me write a sample email to my learner who has:</div>
                <ToggleCard text="missed assignments" :onClick="redierctToPage" />
                <ToggleCard text="been absent from class" :onClick="redierctToPage" />
                <ToggleCard text="been late to class" :onClick="redierctToPage" />
                <ToggleCard text="a concering grade"  :onClick="redierctToPage"/>
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
        redierctToPage() {
            this.$router.push('/questions/2');
        }
    },
    name: 'first Question',
}
</script>
