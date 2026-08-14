<template>
    <component :is="as" class="container">
        <slot />
    </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    as?: string;
}>(), {
    as: 'div',
});
</script>

<style scoped>
.container {
    width: min(100% - (var(--container-padding) * 2), var(--container-width));
    margin-inline: auto;
}
</style>
