<template>
    <div class="gallery-grid" aria-label="Галерея работ">
        <GalleryItem v-for="(item, index) in works" :key="item.id" :item="item" @open="openPreview(index)" />
        <GalleryModal v-if="previewOpen" :works="works" :start-index="previewStartIndex" @close="previewOpen = false" />
    </div>
</template>

<script setup>
import GalleryItem from './GalleryItem.vue'
import GalleryModal from './GalleryModal.vue'

const works = [
    {
        id: 1,
        title: 'Aveline Garden',
        description:
            'Концепт лендинга для цветочного магазина с акцентом на визуальную подачу.',
        imageThumb:
            'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1400'
    },
    {
        id: 2,
        title: 'Floral Collection',
        description:
            'Визуальная концепция коллекции букетов в мягкой цветовой палитре.',
        imageThumb:
            'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1400'
    },
    {
        id: 3,
        title: 'Spring Bouquet',
        description:
            'Минималистичная композиция с акцентом на цветочную фотографию.',
        imageThumb:
            'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1400'
    },
    {
        id: 4,
        title: 'Botanical Studio',
        description:
            'Концепт страницы студии с натуральной визуальной стилистикой.',
        imageThumb:
            'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1400'
    },
    {
        id: 5,
        title: 'Lilac Dreams',
        description:
            'Экспериментальная композиция с сиреневыми оттенками и воздушной подачей.',
        imageThumb:
            'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=1400'
    },
    {
        id: 6,
        title: 'Garden Stories',
        description:
            'Концепция визуального рассказа о сезонной коллекции цветов.',
        imageThumb:
            'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800',
        imageFull:
            'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1400'
    }
]

const previewOpen = ref(false)
const previewStartIndex = ref(0)

function openPreview(index) {
    previewStartIndex.value = index
    previewOpen.value = true
}
</script>

<style scoped>
.gallery-grid {
    width: 100%;
    column-count: 3;
    column-gap: var(--space-5);
}

.gallery-grid :deep(.gallery-item) {
    margin-bottom: var(--space-5);
}

@media (max-width: 768px) {
    .gallery-grid {
        column-count: 2;
        column-gap: var(--space-3);
    }

    .gallery-grid :deep(.gallery-item) {
        margin-bottom: var(--space-3);
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        column-gap: var(--space-2);
    }

    .gallery-grid :deep(.gallery-item) {
        margin-bottom: var(--space-2);
    }
}
</style>