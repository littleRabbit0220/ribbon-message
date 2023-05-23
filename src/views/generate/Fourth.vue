<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class="relative md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 w-full">How is this? Would you like it more:
                    </div>
                    <div class=" grid grid-cols-2">
                        <CheckCard text="holds a job" :isSelected="selected.includes('holds a job')"
                            :disabled="otherCardDisabled" @click="select('holds a job')" />
                        <CheckCard text="caretaker" :isSelected="selected.includes('caretaker')"
                            :disabled="otherCardDisabled" @click="select('caretaker')" />
                        <CheckCard text="recent illness" :isSelected="selected.includes('recent illness')"
                            :disabled="otherCardDisabled" @click="select('recent illness')" />
                        <CheckCard text="recent travel" :isSelected="selected.includes('recent travel')"
                            :disabled="otherCardDisabled" @click="select('recent travel')" />
                        <CheckCard text="Took time off" :isSelected="selected.includes('Took time off')"
                            :disabled="otherCardDisabled" @click="select('Took time off')" />
                        <CheckCard text="none apply" :isSelected="selected.includes('none apply')"
                            :disabled="noApplyDisabled" @click="select('none apply')" />
                    </div>
                    <div class="flex flex-row w-full">
                        <Button class="btn-primary  mt-1 w-full" :onClick="makeDraft3"
                            :disabled="!selected.length > 0">continue</Button>
                    </div>
                    <DisablePanel v-if="isGenerating" />
                </div>
            </div>
            <div v-if="!isGenerating" class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper :content="draft" draftNum="3" :mode="mode" :subject="subject"/>
            </div>
            <LoadingPanel v-if="isGenerating" />
        </div>
        <div class=" md:hidden sm:block w-full fixed bottom-0 ">
            <div class="flex justify-end">
                <ShareButton v-if="!isGenerating" class="share-btn-sm mb-6 mr-6">
                    <div class="flex">
                        <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
                    </div>
                </ShareButton>
            </div>

            <div class="sm-tool-bar ">
                <div class="text-main-content mb-4">How is this? Would you like it more:
                </div>
                <div class="grid w-full grid-cols-3">
                    <CheckCard text="holds a job" :isSelected="selected.includes(hold_a_job)"
                        :disabled="otherCardDisabled" @click="select(hold_a_job)" />
                    <CheckCard text="caretaker" :isSelected="selected.includes(caretaker)" :disabled="otherCardDisabled"
                        @click="select(caretaker)" />
                    <CheckCard text="recent illness" :isSelected="selected.includes(recent_illness)"
                        :disabled="otherCardDisabled" @click="select(recent_illness)" />
                    <CheckCard text="recent travel" :isSelected="selected.includes(recent_travel)"
                        :disabled="otherCardDisabled" @click="select(recent_travel)" />
                    <CheckCard text="Took time off" :isSelected="selected.includes(took_time_off)"
                        :disabled="otherCardDisabled" @click="select(took_time_off)" />
                    <CheckCard text="none apply" :isSelected="selected.includes('none apply')" :disabled="noApplyDisabled"
                        @click="select('none apply')" />
                </div>
                <div class="flex flex-row w-full">
                    <Button class="btn-primary  mt-1 w-full" :onClick="makeDraft3"
                        :disabled="!selected.length > 0">continue</Button>
                </div>
                <DisablePanel v-if="isGenerating" />
            </div>
           
        </div>

    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import CheckCard from '../../components/CheckCard.vue';
import Button from '../../components/Button.vue';
import Paper from '../../components/Paper.vue';
import ShareButton from '../../components/ShareButton.vue';
import DisablePanel from '../../components/utils/DisablePanel.vue';
import LoadingPanel from '../../components/utils/LoadingPanel.vue';
import generateAnswer from '../../actions/generate';
import { HOLD_A_JOB, CARETAKER, RECENT_ILLNESS, RECENT_TRAVEL, TOOK_TIME_OFF, PROMPT_THREE } from '../../prompts';
export default {
    components: {
        MenuBar,
        Button,
        Paper,
        ShareButton,
        CheckCard,
        DisablePanel,
        LoadingPanel
    },
    name: 'four-question',
    data() {
        return {
            selected: [],
            isGenerating: false,
            hold_a_job: HOLD_A_JOB,
            caretaker: CARETAKER,
            recent_illness: RECENT_ILLNESS,
            recent_travel: RECENT_TRAVEL,
            took_time_off: TOOK_TIME_OFF,
        }
    },
    methods: {
        select(value) {
            if (!this.selected.includes(value)) {
                this.selected = [...this.selected, value];
            } else {
                const index = this.selected.indexOf(value)
                if (index !== -1) {
                    this.selected.splice(index, 1);
                }
            }
        },
        makeDraft3() {
            this.isGenerating = true;
            if (this.noApplyDisabled) {
                const prompt = PROMPT_THREE( this.$store.state.draft2 ,this.selected);
                let _selected="";
                this.selected.forEach( item => _selected +=item);
                this.answer = generateAnswer(`${prompt}`).then(res => {
                    this.isGenerating = false;
                    this.$store.dispatch('setDraft3', res);
                    this.$router.push({
                        path: `/questions/4/draft3/${_selected}`,
                        query: {
                            question1: this.$route.query.question1,
                            question2: this.$route.query.question2,
                            question3: this.$route.query.question3,
                        }
                    });
                }).catch(err => {
                    this.isGenerating = false;
                    console.log(err)
                });
            } else {
                this.$store.dispatch('setDraft3', this.$store.state.draft2)
                this.$router.push({
                    path: `/generate_three_version`,
                    query: {
                        question1: this.$route.query.question1,
                        question2: this.$route.query.question2,
                        question3: this.$route.query.question3,
                    }
                });
            }
        }

    },
    computed: {
        draft() {
            return this.$store.state.draft2;
        },
        noApplyDisabled() {
            return !this.selected.includes('none apply') && this.selected.length > 0;
        },
        otherCardDisabled() {
            return this.selected.includes('none apply');
        },
        subject() {
            return this.$route.query.question1;
        },
        mode() {
            return this.$route.query.question3;
        },
    },
}
</script>
