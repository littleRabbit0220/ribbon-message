<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class="md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 px-2">Here are <span class="text-primary-content">3 additional drafts.</span>
                </div>
                    <div class=" grid grid-cols-3">
                        <ToggleCard text="DRAFT #4" />
                        <ToggleCard text="DRAFT #5" />
                        <ToggleCard text="DRAFT #6" />
                    </div>
                    <div class="flex flex-row w-full px-1">
                        <Button class="btn-primary  mt-1 w-full" :onClick="onNextPage">finish</Button>
                    </div>
                </div>
            </div>
            <div class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper />
            </div>
        </div>
        <div class=" md:hidden sm:block w-full fixed bottom-0 ">
            <div class="flex justify-end">
                <ShareButton class="share-btn-sm mb-6 mr-6" :onCick="onClickShare">
                    <div class="flex">
                        <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
                    </div>
                </ShareButton>
            </div>

            <div class="sm-tool-bar ">
                <div class="text-main-content mb-4 px-2">Here are <span class="text-primary-content">3 additional drafts.</span>
                </div>
                <div class="grid w-full grid-cols-3">
                    <ToggleCard text="DRAFT #4" />
                    <ToggleCard text="DRAFT #5" />
                    <ToggleCard text="DRAFT #6" />
                </div>
                <div class="flex flex-row w-full px-1">
                    <Button class="btn-primary  mt-1 w-full" :onClick="onNextPage">finish</Button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import MenuBar from '../components/MenuBar.vue';
import ToggleCard from '../components/ToggleCard.vue';
import Button from '../components/Button.vue';
import Paper from '../components/Paper.vue';
import ShareButton from '../components/ShareButton.vue';
export default {
    components: {
        ToggleCard,
        MenuBar,
        Button,
        Paper,
        ShareButton
    },
    name: 'generate',
    data() {
        return {
            isModalVisible: false,
        }
    },
    methods: {
        onNextPage() {
            this.$router.push('/done')
        },
        onClickShare() {
            this.isModalVisible=true;
        }
    }
}
</script>
