<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class=" md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 w-full">The draft is now more {{ mode }}:
                    </div>
                    <div class="flex flex-col justify-center">
                        <Button class="btn-primary mb-2"  :onClick="onNextPage">
                            Next: personalize more
                        </Button>
                        <Button class="btn-secondary" :onClick="chooseDifferentTone">
                            choose a different tone
                        </Button>
                    </div>
                </div>
            </div>
            <div class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper :content="draft" draftNum="2" :subject="subject" :mode="mode"/>
            </div>
        </div>
        <div class=" md:hidden sm:block w-full fixed bottom-0 ">
            <div class="flex justify-end">
                <ShareButton class="share-btn-sm mb-6 mr-6">
                <div class="flex">
                    <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
                </div>
            </ShareButton>
            </div>
          
            <div class="sm-tool-bar ">
                <div class="text-main-content mb-4">The draft is now more {{ mode }}:
                </div>
                <div class="grid w-full grid-cols-1">
                    <div class="flex flex-col justify-center">
                        <Button class="btn-primary mb-2" :onClick="onNextPage">
                            Next: personalize m
                        </Button>
                        <Button class="btn-secondary"  :onClick="chooseDifferentTone">
                            choose a different tone
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import Button from '../../components/Button.vue';
import Paper from '../../components/Paper.vue';
import ShareButton from '../../components/ShareButton.vue';
export default {
    components: {
        MenuBar,
        Button,
        Paper,
        ShareButton
    },
    name: 'Second Question',
    methods: {
        onNextPage() {
            this.$router.push({
                path: '/questions/4',
                query: {
                    question1: this.$route.query.question1,
                    question2: this.$route.query.question2,
                    question3: this.$route.params.question
                }
            });
        },
        chooseDifferentTone() {
            this.$router.go(-1);
        }
    },
    computed: {
        draft() {
            return this.$store.state.draft2;
        },
        mode() {
            return this.$route.params.question;
        },
        subject() {
            return this.$route.query.question1;
        }
    },
}
</script>
