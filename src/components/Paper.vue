<template>
    <div class="w-full h-full relative">

        <div class="absolute paper-text paper-text-sd paper-text-sm">
            <b>
                Draft #1
            </b><br/>
            <b>
                Subject: Tardiness to class<br/>
            </b>
            Dear [Student Name],<br/>
            I am reaching out to discuss your recent tardiness to class. It has come to my attention that you have been
            arriving late to your scheduled classes. As your advisor, I want to make sure that you are able to fully benefit
            from your classes and succeed in your studies.<br/>
            To discuss this further, I would like to schedule a chat with you at your earliest convenience. Please book a
            time that works best for you at calendly.com. During our meeting, we can discuss any challenges or obstacles
            that you may be facing and explore possible solutions to help you stay on track.
            Please let me know if you have any questions or concerns. I look forward to speaking with you soon and helping
            you achieve your academic goals.  Best regards, [Your Name]
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
    components: {
        ShareButton,
    },
    name: 'paper',
}
</script>