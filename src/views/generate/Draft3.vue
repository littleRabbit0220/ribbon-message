<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class="md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 w-full">The messaging has been updated for a leaner who hold a jobs
                        and had recent travel.
                    </div>
                    <div class="flex flex-col justify-center">
                        <Button class="btn-primary mb-2" :onClick="onNextPage">
                            Next: See more drafts
                        </Button>
                        <Button class="btn-secondary" :onClick="updateLeD">
                            update learner details
                        </Button>
                    </div>
                </div>
            </div>
            <div class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper :content="draft" draftNum="3" :mode="mode" :subject="subject" />
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
                <div class="text-main-content mb-4">he messaging has been updated for a leaner who hold a jobs and had
                    recent travel.
                </div>
                <div class="grid w-full grid-cols-1">
                    <div class="flex flex-col justify-center">
                        <Button class="btn-primary mb-2" :onClick="onNextPage">
                            Next: See more drafts
                        </Button>
                        <Button class="btn-secondary" :onClick="updateLeD">
                            update learner details
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
        ShareButton,
        Paper
    },
    name: 'Four Question',
    methods: {
        onNextPage() {
            this.$router.push({
                path: '/generate_three_version',
                query: {
                    question1: this.$route.query.question1,
                    question2: this.$route.query.question2,
                    question3: this.$route.query.question3,
                }
            })
        },
        updateLeD() {
            this.$router.go(-1);
        }
    },
    computed: {
        draft() {
            return this.$store.state.draft3;
        },
        subject() {
            return this.$route.query.question1;
        },
        mode() {
            return this.$route.query.question3;
        },
    }
}
</script>
