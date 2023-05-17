<template>
    <button :class="['check-card flex',]">
        <div :class="['card card-sm',  {'selected' : isSelected}]"  >
            <span>{{ text }}</span>
        </div>
    </button>
</template>
<script>
export default {
    name: 'CheckCard',
    props: {
        text: {
            type: String,
            default: "",
        },
        isSelected: {
            type: Boolean,
            default: false,
        },
    },
}
</script>