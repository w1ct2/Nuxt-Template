<template>
    <!-- Динамический компонент-контейнер -->
    <component :is="as" class="container">
        <slot />
    </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ // Пропсы компонента-контейнера
    as?: string; // HTML-тег для рендера контейнера
}>(), {
    as: 'div', // По умолчанию div
});
</script>

<style scoped>
.container { /* Базовый контейнер с ограниченной шириной */
    width: min(100% - (var(--container-padding) * 2), var(--container-width));
    margin-inline: auto;
}
</style>
