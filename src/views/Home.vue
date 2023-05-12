<template>
    <div>
        home page
    </div>
</template>
<script>
    export default {
        created() {
            this.$router.push('/questions/1');
        }
    }
</script>