<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="w-full flex grow grid md:grid-cols-2 sm:gird-cols-1 ">
            <div class="md:flex flex-col grow w-full justify-center items-center hidden">
                <div class="form-content form-content-md form-content-sd form-content-sm">
                    <div class="text-main-content mb-4 w-full">How is this? Would you like it more:
                    </div>
                    <div class="flex flex-col justify-center">
                        <ToggleCard text="professional" icon="/images/professional.svg" />
                        <ToggleCard text="supportive" icon="/images/supportive.svg" />
                        <ToggleCard text="upbeat" icon="/images/upbeat.svg" :onClick="onClikcUpbeat"/>
                        <ToggleCard text="looks good" icon="/images/looksgood.svg" />
                    </div>
                </div>
            </div>
            <div class="primary-panel primary-panel-sd primary-panel-sm">
                <Paper />
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
                <div class="text-main-content mb-4">How is this? Would you like it more:
                </div>
                <div class="grid w-full grid-cols-2">
                    <div class="m-1">
                        <ToggleCard text="professional" icon="/images/professional.svg" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="supportive" icon="/images/supportive.svg" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="upbeat" icon="/images/upbeat.svg" />
                    </div>
                    <div class="m-1">
                        <ToggleCard text="looks good" icon="/images/looksgood.svg" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import ToggleCard from '../../components/ToggleCard.vue';
import Button from '../../components/Button.vue';
import Paper from '../../components/Paper.vue';
import ShareButton from '../../components/ShareButton.vue';
export default {
    components: {
        ToggleCard,
        MenuBar,
        Button,
        Paper,
        ShareButton
    },
    name: 'three-question',
    methods: {
        onClikcUpbeat() {
            this.$router.push('/questions/3/upbeat')
        }
    }
}
</script>
