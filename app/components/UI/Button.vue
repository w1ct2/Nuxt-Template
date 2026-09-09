<template>
    <button :class="buttonClass" @click="onClick">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Button',
        },
        buttonClass: {
            type: String,
            default: '',
            validator(value) {
                return ['transparent', 'primary', 'secondary'].includes(value);
            },
        },
    },
    methods: {
        onClick() {
            this.$emit('click', this.label);
        },
    },
};
</script>

<style scoped>
</style>