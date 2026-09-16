<template>
    <section class="gallery">
        <Container>
            <div class="gallery__intro">
                <h2 class="gallery__title">{{ title }}</h2>
                <p>Создавайте, запускайте и масштабируйте проекты с помощью надёжной платформы, которая не мешает работать.</p>
            </div>

            <GalleryGrid />
        </Container>
    </section>
</template>

<script setup>
import Container from '../UI/Container.vue';
import GalleryGrid from './components/GalleryGrid.vue';
const props = defineProps({
    title: {
        type: String,
        default: 'Галерея работ'
    }
})
</script>

<style scoped>
/* Хэдер часть с заголовками */
.gallery__intro {
    max-width: 760px;
    margin-bottom: var(--space-16);
}

.gallery__title { /* Заголовок секции */
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.gallery__intro p { /* Описание секции */
    margin-top: var(--space-6);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}
</style>