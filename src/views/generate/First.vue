<template>  
        <div class="flex flex-col justify-center grow items-center">
            <div class="form-content form-content-sm">
                <div class="text-main-content mb-4 w-full pl-2">Help me write a sample email to my learner who has:</div>
                <ToggleCard text="missed assignments" @click="redierctToPageTwo(missed_assignments)" />
                <ToggleCard text="been absent from class"  @click="redierctToPageTwo(been_absent_from_class)" />
                <ToggleCard text="been late to class"  @click="redierctToPageTwo(been_late_to_class)" />
                <ToggleCard text="a concering grade"   @click="redierctToPageTwo(a_concering_grade)"/>
            </div>
        </div>
</template>
<script>
import ToggleCard from '../../components/ToggleCard.vue';
import { MISSED_ASSIGNMENTS, BEEN_ABSENT_FROM_CLASS, BEEN_LATE_TO_CLASS, A_CONCERNING_GRADE } from '../../prompts';
export default {
    data() {
        return {
            missed_assignments: MISSED_ASSIGNMENTS,
            been_absent_from_class: BEEN_ABSENT_FROM_CLASS,
            been_late_to_class: BEEN_LATE_TO_CLASS,
            a_concering_grade: A_CONCERNING_GRADE,
        }
    },
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
