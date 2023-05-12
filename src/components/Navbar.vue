<template>
    <nav>
        <div class="nav-bar nav-bar-sm">
            <a href="#"><span>
                <img src='@/assets/icons/logo.svg' alt="ribbon education"/>
            </span>
            </a>
            <div class="">
                <Button class="btn-ghost">about</Button>
                <Button class="btn-primary"><span class="hidden sm:inline">BOOK</span> DEMO</Button>
            </div>
        </div>
    </nav>
</template>
<script>
    import Button from './Button.vue';
    export default {
        name: 'Navbar',
        components: { Button,}
    }
</script>
<style scoped lang="scss">
  @import "@/assets/styles/main.scss";
</style>