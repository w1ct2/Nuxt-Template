<template>
    <article class="gallery-item" @click="$emit('open')">
        <div class="gallery-item__media">
            <img :src="item.imageThumb" :alt="item.title" class="gallery-item__img" loading="lazy" decoding="async" />
        </div>

        <div class="gallery-item__footer">
            <h3 class="gallery-item__title">
                {{ item.title }}
            </h3>
        </div>
    </article>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})

defineEmits(['open'])
</script>

<style scoped>
.gallery-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    break-inside: avoid;
    page-break-inside: avoid;
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    transition:
        border-color var(--transition-normal),
        box-shadow var(--transition-normal),
        transform var(--transition-normal);
    cursor: pointer;
}

.gallery-item:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
}

.gallery-item__media {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    background: var(--color-surface-dark);
}

.gallery-item__img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform var(--transition-normal);
}

.gallery-item:hover .gallery-item__img {
    transform: scale(1.02);
}

.gallery-item__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    flex-shrink: 0;
    padding: var(--space-3) var(--space-4) var(--space-4);
}

.gallery-item__title {
    margin: 0;
    min-width: 0;
    font-size: var(--font-size-md);
    color: var(--color-text-primary);
    text-align: start;
}

@media (max-width: 1000px) {
    .gallery-item__footer {
        padding: var(--space-3);
    }
    .gallery-item__title {
        font-size: var(--font-size-sm);
    }
}

@media (max-width: 768px) {
    .gallery-item__footer {
        padding: var(--space-2);
    }
    .gallery-item__title {
        font-size: var(--font-size-xs);
    }
}

@media (max-width: 480px) {
    .gallery-item__title {
        font-size: var(--font-size-xs);
    }
}
</style>
