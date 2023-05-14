<template>
    <div class="flex flex-col grow">
        <MenuBar />
        <div class="flex flex-col grow justify-center items-center">
            <div class="form-content">
                <div  class="thanks">
                    Thanks
                </div>
                <div class="text-main-content mb-4 w-full">                       
                    For more tools like these, check out Ribbon. Ribbons is
                    this first student CRM platform built for online adult education providera treamline operation and
                    improve student retention.
                </div>
                <div class="grid grid-cols-2 w-full">
                    <Button class="btn-primary ">
                       Book a demo
                    </Button>
                    <Button class=" btn-secondary">
                       about ribbon
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MenuBar from '../components/MenuBar.vue';
import Button from '../components/Button.vue';
export default {
    components: {
        MenuBar,
        Button
    },
    name: 'done',
    methods: {
        redirectToPage() {
            this.$router.push('/questions/3');
        }
    }

}
</script>


