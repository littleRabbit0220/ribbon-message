<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="flex flex-col grow justify-center items-center">
            <div class="form-content form-content-sm">
                <div class="text-main-content mb-4 w-full">
                    <span class="thanks">
                        Thanks
                    </span>
                    For more tools like these, check out Ribbon. Ribbons is
                    this first student CRM platform built for online adult education providera treamline operation and
                    improve student retention.
                </div>
                <div class="flex flex-col justify-center">
                    <Button class="btn-primary mb-2">
                       Book a demo
                    </Button>
                    <Button class="btn-secondary">
                       about ribbon
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MenuBar from '../../components/MenuBar.vue';
import Button from '../../components/Button.vue';
export default {
    components: {
        MenuBar,
        Button
    },
    name: 'Second Question',
    methods: {
        redirectToPage() {
            this.$router.push('/questions/3');
        }
    }

}
</script>
