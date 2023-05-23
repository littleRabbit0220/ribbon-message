<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class="relative md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 px-2">Here are <span class="text-primary-content">3 additional
                            drafts.</span>
                    </div>
                    <div class=" grid grid-cols-3">
                        <ToggleCard text="DRAFT #4" @click="onSelectDraft('4')" />
                        <ToggleCard text="DRAFT #5" @click="onSelectDraft('5')" />
                        <ToggleCard text="DRAFT #6" @click="onSelectDraft('6')" />
                    </div>
                    <div class="flex flex-row w-full px-1">
                        <Button class="btn-primary  mt-1 w-full" :onClick="onNextPage">finish</Button>
                    </div>
                </div>
                <DisablePanel v-if="isGenerating" />
            </div>
            <div v-if="!isGenerating" class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper :content="selected_draft" :draftNum="selected_id" />
            </div>
            <LoadingPanel v-if="isGenerating" />
        </div>
        <div class=" md:hidden sm:block w-full fixed bottom-0 ">
            <div v-if="!isGenerating" class="flex justify-end">
                <ShareButton class="share-btn-sm mb-6 mr-6" :onCick="onClickShare">
                    <div class="flex">
                        <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
                    </div>
                </ShareButton>
            </div>

            <div class="sm-tool-bar ">
                <div class="text-main-content mb-4 px-2">Here are <span class="text-primary-content">3 additional
                        drafts.</span>
                </div>
                <div class="grid w-full grid-cols-3">
                    <ToggleCard text="DRAFT #4" @click="onSelectDraft('4')" />
                    <ToggleCard text="DRAFT #5" @click="onSelectDraft('5')" />
                    <ToggleCard text="DRAFT #6" @click="onSelectDraft('6')" />
                </div>
                <div class="flex flex-row w-full px-1">
                    <Button class="btn-primary  mt-1 w-full" :onClick="onNextPage">finish</Button>
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
import { PROMPT_FOUR } from '../../prompts';
export default {
    components: {
        ToggleCard,
        MenuBar,
        Button,
        Paper,
        ShareButton,
        DisablePanel,
        LoadingPanel,
    },
    name: 'generate',
    data() {
        return {
            isModalVisible: false,
            isGenerating: false,
            selected_draft: "",
            selected_id: '',
        }
    },
    methods: {
        onNextPage() {
            this.$router.push('/done')
        },
        onClickShare() {
            this.isModalVisible = true;
        },
        onSelectDraft(id) {
            if (id === '4') {
                this.selected_draft = this.$store.state.draft4;
                this.selected_id='4'
            } else if (id === '5') {
                this.selected_draft = this.$store.state.draft5;
                this.selected_id='5'
            } else if (id === '6') {
                this.selected_draft = this.$store.state.draft6;
                this.selected_id='6'
            }
        }
    },
    mounted() {
        this.isGenerating = true;
        // const Query1 = "How to teach the students without homework";
        // const Query2 = "How to study the maths without lesson";
        // const Query3 = "How to teach the students using computer";
        generateAnswer(PROMPT_FOUR(this.$store.state.draft3)).then(res => {
            let part = res.split('$');
            this.$store.dispatch('setDraft4', part[0]);
            this.$store.dispatch('setDraft5', part[1]);
            this.$store.dispatch('setDraft6', part[2]);
            this.selected_draft = part[0];
            this.isGenerating = false;
            // generateAnswer(`${Query2}`).then(res => {
            //     this.$store.dispatch('setDraft5', res);
            //     generateAnswer(`${Query3}`).then(res => {
            //         this.$store.dispatch('setDraft6', res);
            //         this.isGenerating = false;

            //     }).catch(err => {
            //         this.isGenerating = false;
            //         console.log(err)
            //     })
            // }).catch(err => {
            //     this.isGenerating = false;
            //     console.log(err)
            // })
        }).catch(err => {
            this.isGenerating = false;
            console.log(err)
        });
    }
}
</script>
