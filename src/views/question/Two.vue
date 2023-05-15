<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div :class="['w-full flex grow grid', {'md:grid-cols-2 sm:gird-cols-1' : isGenerating, 'md:grid-cols-1 sm:gird-cols-1' : !isGenerating }]">
            <div :class="['relative md:flex flex-col grow justify-center items-center', {'sm:hidden hidden' : isGenerating, 'sm:flex flex' : !isGenerating }]">
                <div class="form-content form-content-sm">
                    <div class="text-main-content mb-4 w-full">Given their situation, what would you request the learner do
                        next?
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <textarea class="text-area w-full" maxlength="500" v-model="question2"
                            placeholder="Book a meeting with me so we can figure out what’s going on. My calendly link is https://calendly.com/ribboneducation/15-min-chat|"></textarea>
                        <p v-if="question2.length > 500" class="mt-2" style="color: red;">Limit text to 500 characters.</p>
                        <Button class="btn-primary mt-4" :onClick="draftClick" :disabled="isDisabled">
                            draft email
                        </Button>
                    </div>
                </div>
                <DisablePanel v-if="isGenerating"/>
            </div>
            <LoadingPanel v-if="isGenerating"/>
        </div>

    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import Button from '../../components/Button.vue';
import generateAnswer from '../../actions/generate';
import LoadingPanel from '../../components/utils/LoadingPanel.vue';
import DisablePanel from '../../components/utils/DisablePanel.vue';
export default {
    data() {
        return {
            question2: "",
            answer: "",
            isGenerating: false,
        }
    },
    components: {
        MenuBar,
        Button,
        LoadingPanel,
        DisablePanel
    },
    name: 'tow-question',
    methods: {
        redirectToPage() {
            //this.$router.push('/questions/3');
        },
        draftClick() {
            const question1 = this.$route.query.question1;
            this.isGenerating = true;
            this.answer = generateAnswer(`For ${question1}, ${this.question2}`).then(res => {
                this.isGenerating = false;
                this.$store.dispatch('setDraft1', res);
                this.$router.push('/questions/3');
            }).catch(err => {
                this.isGenerating = false;
                console.log(err)
            });
        }
    },
    computed: {
        isDisabled() {
            return this.question2 === '';
        }
    }

}
</script>
