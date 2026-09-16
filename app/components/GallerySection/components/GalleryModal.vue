<template>
    <Teleport to="body">
        <div class="gallery-modal" role="dialog" aria-modal="true" aria-label="Предпросмотр работы" @click.self="close">
            <div class="gallery-modal__backdrop" aria-hidden="true" @click="close"/>

            <div class="gallery-modal__panel">
                <!-- Кнопка закрытия -->
                <button type="button" class="gallery-modal__close" aria-label="Закрыть" @click="close">×</button>
                <!-- Кнопки навигации -->
                <button v-if="works.length > 1" type="button"
                    class="gallery-modal__navigation gallery-modal__navigation--prev" aria-label="Предыдущая работа"
                    @click="previous">
                    ‹
                </button>
                <!-- Контент модального окна -->
                <div class="gallery-modal__content">
                    <p class="gallery-modal__title">
                        {{ currentWork.title }}
                    </p>

                    <div class="gallery-modal__media">
                        <img :src="currentWork.imageFull" :alt="currentWork.title" class="gallery-modal__img"
                            decoding="async" />
                    </div>

                    <p class="gallery-modal__desc">
                        {{ currentWork.description }}
                    </p>

                    <div v-if="works.length > 1" class="gallery-modal__counter">
                        {{ currentIndex + 1 }} / {{ works.length }}
                    </div>
                </div>
                <!-- Кнопки навигации -->
                <button v-if="works.length > 1" type="button"
                    class="gallery-modal__navigation gallery-modal__navigation--next" aria-label="Следующая работа"
                    @click="next">
                    ›
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    works: {
        type: Array,
        required: true
    },

    startIndex: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['close'])

const currentIndex = ref(
    Math.min(
        Math.max(0, props.startIndex),
        Math.max(0, props.works.length - 1)
    )
)

const currentWork = computed(() => {
    return props.works[currentIndex.value]
})

function next() {
    if (props.works.length <= 1) return
    currentIndex.value =
        (currentIndex.value + 1) % props.works.length

    console.log('next', currentIndex.value)
}

function previous() {
    if (props.works.length <= 1) return

    currentIndex.value =
        (currentIndex.value - 1 + props.works.length) %
        props.works.length
}

function close() {
    emit('close')
    console.log('close')
}

function onKeydown(event) {
    if (event.key === 'Escape') {
        close()
    }

    if (event.key === 'ArrowRight') {
        next()
    }

    if (event.key === 'ArrowLeft') {
        previous()
    }
}

onMounted(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.gallery-modal {
    position: fixed;
    inset: 0;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-6);
    cursor: pointer;
}

.gallery-modal__backdrop {
    position: absolute;
    inset: 0;
    background: rgb(0 0 0 / 0.78);
    backdrop-filter: blur(6px);
    cursor: pointer;
}

.gallery-modal__panel {
    position: relative;
    z-index: 1;
    width: min(920px, 100%);
    max-height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.gallery-modal__content {
    position: relative;
    width: min(720px, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4);
    pointer-events: auto;
}

.gallery-modal__title {
    margin: 0;
    font-size: var(--font-size-sm);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
    text-align: center;
}

.gallery-modal__media {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: min(62vh, 640px);
    min-height: 0;
    cursor: pointer;
}

.gallery-modal__img {
    display: block;
    max-width: 100%;
    max-height: min(62vh, 640px);
    width: auto;
    height: auto;
    object-fit: contain;
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-md);
}

.gallery-modal__desc {
    margin: 0;
    max-width: 52ch;
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    text-align: center;
}

.gallery-modal__counter {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
}

.gallery-modal__close {
    position: absolute;
    z-index: 3;
    top: var(--space-3);
    right: var(--space-3);
    width: var(--space-10);
    height: var(--space-10);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-full);
    background: var(--color-surface);
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-regular);
    cursor: pointer;
    pointer-events: auto;
    transition:
        background var(--transition-fast),
        border-color var(--transition-fast),
        transform var(--transition-fast);
}

.gallery-modal__close:hover {
    background: var(--color-surface-hover);
    border-color: var(--color-primary);
    transform: scale(1.05);
}

.gallery-modal__navigation {
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);
    width: var(--space-10);
    height: var(--space-10);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: var(--space-1);
    border: 1px solid var(--color-primary-hover);
    border-radius: var(--radius-full);
    background: var(--color-surface);
    color: var(--color-text-primary);
    font-size: var(--font-size-2xl);
    cursor: pointer;
    pointer-events: auto;
    transition:
        background var(--transition-fast),
        transform var(--transition-fast),
        box-shadow var(--transition-fast);
}
.gallery-modal__navigation:hover {
    background: var(--color-surface-hover);
    box-shadow: var(--shadow-md);
    transform:
        translateY(-50%) scale(1.05);
}
.gallery-modal__navigation--prev {
    left: 0;
}
.gallery-modal__navigation--next {
    right: 0;
}

@media (max-width: 640px) {
    .gallery-modal {
        padding: var(--space-4);
    }

    .gallery-modal__content {
        padding: var(--space-3);
    }

    .gallery-modal__navigation {
        width: var(--space-8);
        height: var(--space-8);
        font-size: var(--font-size-xl);
    }

    .gallery-modal__close {
        width: var(--space-8);
        height: var(--space-8);
        font-size: var(--font-size-lg);
    }

    .gallery-modal__navigation--prev {
        left: calc(-1 * var(--space-2));
    }

    .gallery-modal__navigation--next {
        right: calc(-1 * var(--space-2));
    }
}
</style>