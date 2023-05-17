<template>
    <div class="w-full h-full relative">

        <div class="absolute paper-text paper-text-sd paper-text-sm">
            <div class="mb-3">
                <b>
                    Draft #{{ draftNum }}
                </b><br/>
                <span :v-if="mode.length>0">
                    ◦more {{ mode }}
                </span>
            </div>
            <div class="mb-3">
                <b>
                    Subject: Tardiness to class<br />
                </b>
            </div>
            Dear [Student Name],<br />
            {{
                this.content
            }}
        </div>
        <ShareButton class="absolute md:block bottom-6 right-6 share-btn-sm sm:hidden hidden">
            <div class="flex">
                <img src="/images/messageBox.svg" class="mr-2" alt="share" /> SHARE
            </div>
        </ShareButton>
        <div class=" paper">
            <div class="paper-piece-1"></div>
            <div class="paper-piece-2"></div>
            <div class="paper-piece-3"></div>
        </div>
    </div>
</template>
<script>
import ShareButton from './ShareButton.vue';
export default {
    props: {
        content: {
            type: String,
            default: ''
        },
        draftNum: {
            type: String,
            default: 1
        },
        mode: {
            type: String,
            default: ""
        }
    },
    components: {
        ShareButton,
    },
    name: 'paper',
}
</script>