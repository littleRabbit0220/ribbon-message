<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div :class="['relative md:flex flex-col grow justify-center items-center sm:hidden hidden',]">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 w-full">How is this? Would you like it more:
                    </div>
                    <div class="flex flex-col justify-center">
                        <ToggleCard text="professional" icon="/images/professional.svg"
                            @click="makeDraft2('professional')" />
                        <ToggleCard text="supportive" icon="/images/supportive.svg" @click="makeDraft2('supportive')" />
                        <ToggleCard text="upbeat" icon="/images/upbeat.svg" @click="makeDraft2('upbeat')" />
                        <ToggleCard text="looks good" icon="/images/looksgood.svg" @click="makeDraft2('looks_good')" />
                    </div>
                </div>
                <DisablePanel v-if="isGenerating" />
            </div>
            <div v-if="!isGenerating" class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper :content="draft" draftNum="1" :subject="subject" />
            </div>
            <LoadingPanel v-if="isGenerating" />
        </div>
        <div class="md:hidden sm:block w-full fixed bottom-0 ">
            <div v-if="!isGenerating" class="flex justify-end">
                <ShareButton class="share-btn-sm mb-6 mr-6">
                    <div class="flex">
                        <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
                    </div>
                </ShareButton>
            </div>

            <div class="sm-tool-bar ">
                <div class="text-main-content mb-4">How is this? Would you like it more:
                </div>
                <div class="grid w-full grid-cols-2">
                    <div class="m-1">
                        <ToggleCard text="professional" icon="/images/professional.svg" @click="makeDraft2(professional)" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="supportive" icon="/images/supportive.svg" @click="makeDraft2(supportive)" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="upbeat" icon="/images/upbeat.svg" @click="makeDraft2(upbeat)" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="looks good" icon="/images/looksgood.svg" @click="makeDraft2('looks_good')" />
                    </div>
                </div>
            </div>
            <DisablePanel v-if="isGenerating" />
        </div>

    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import ToggleCard from '../../components/ToggleCard.vue';
import Button from '../../components/Button.vue';
import Paper from '../../components/Paper.vue';
import ShareButton from '../../components/ShareButton.vue';
import generateAnswer from '../../actions/generate';
import DisablePanel from '../../components/utils/DisablePanel.vue';
import LoadingPanel from '../../components/utils/LoadingPanel.vue';
import { PROFESSIONAL, SUPPORTIVE, UPBEAT } from '../../prompts';
import { PROMPT_TWO } from '../../prompts';
import { propsToAttrMap } from '@vue/shared';
export default {
    components: {
        ToggleCard,
        MenuBar,
        Button,
        Paper,
        ShareButton,
        DisablePanel,
        LoadingPanel
    },
    name: 'three-question',
    data() {
        return {
            professional: PROFESSIONAL,
            supportive: SUPPORTIVE,
            upbeat: UPBEAT,
            isGenerating: false,
        }
    },
    methods: {
        makeDraft2(tone) {
            this.isGenerating = true;
            if (tone != "looks_good") {
                const prompt = PROMPT_TWO(this.$store.state.draft1, tone);
                this.answer = generateAnswer(prompt).then(res => {
                    this.isGenerating = false;
                    this.$store.dispatch('setDraft2', res);
                    this.$router.push({
                        path: `/questions/3/draft2/${tone}`,
                        query: {
                            question1: this.$route.query.question1,
                            question2: this.$route.query.question2,
                        }
                    });
                }).catch(err => {
                    this.isGenerating = false;
                    console.log(err)
                });
            } else {
                this.$store.dispatch('setDraft2', this.$store.state.draft1)
                this.$router.push({
                    path: `/questions/3/draft2/${tone}`,
                    query: {
                        question1: this.$route.query.question1,
                        question2: this.$route.query.question2,
                    }
                });
            }
        }
    },
    computed: {
        draft() {
            return this.$store.state.draft1;
        },
        subject() {
            return this.$route.query.question1;
        }
    },
}
</script>
