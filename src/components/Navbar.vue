<template>
    <nav>
        <div class="nav-bar nav-bar-sm">
            <span>
                <img src='@/assets/icons/logo.svg' alt="ribbon education"/>
            </span>
            <div class="">
                <button class="btn btn-md btn-sd btn-sm btn-ghost">
                    ABOUT
                </button>
                <button class="btn btn-md btn-sd btn-sm btn-primary">
                    <span class=" hidden sm:inline">BOOK</span> DEMO
                </button>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navbar',
    }
</script>
<style scoped lang="scss">
  @import "@/assets/styles/main.scss";
</style>