<template>
    <section class="hero">
        <Container class="hero__container">
            <div class="hero__content">
                <p class="hero__badge">Стартовый шаблон Nuxt</p>
                <h1 class="hero__title">Создавайте чистые интерфейсы быстрее</h1>
                <p class="hero__text">
                    Готовая hero-секция с повторно используемой разметкой, чёткой иерархией контента
                    и гибкой областью баннера для будущих медиафайлов.
                </p>
                <div class="hero__actions">
                    <a class="hero__button hero__button--primary" href="#">
                        Начать бесплатно
                    </a>
                    <a class="hero__button hero__button--secondary" href="#">
                        Узнать больше <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div class="hero__banner" aria-label="Mock banner"></div>
        </Container>
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';

</script>

<style scoped>
.hero {
    margin-top: var(--header-height);
    padding: var(--header-height) var(--header-height);
    background-color: var(--color-surface);
    min-height: calc(100dvh - var(--header-height));
}

.hero__container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 520px);
    gap: var(--space-12);
    align-items: center;
}

.hero__content {
    display: grid;
    justify-items: start;
    gap: var(--space-5);
}

.hero__badge {
    padding: var(--space-2) var(--space-4);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 50%;
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
}

.hero__title {
    max-width: 680px;
    font-size: clamp(var(--font-size-3xl), 6vw, var(--font-size-5xl));
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hero__text {
    max-width: 560px;
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
    margin-top: var(--space-8);
}

.hero__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    min-height: 48px;
    padding-inline: var(--space-6);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-normal);
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast),
        transform var(--transition-fast);
}

.hero__button:hover {
    transform: translateY(-1px);
}

.hero__button--primary {
    background-color: var(--color-primary);
    color: var(--color-text-primary);
}

.hero__button--primary:hover {
    background-color: var(--color-primary-hover);
}

.hero__button--secondary {
    color: var(--color-text-primary);
}

.hero__button--secondary:hover {
    color: var(--color-primary);
}

.hero__banner {
    min-height: 360px;
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-lg);
    background:
        linear-gradient(135deg, rgb(255 255 255 / 0.14), rgb(255 255 255 / 0.04)),
        var(--color-surface-hover);
    color: #0f172a;
    box-shadow: var(--shadow-lg);
}

.hero__banner-bar {
    height: 56px;
    border-bottom: 1px solid rgb(15 23 42 / 0.08);
    background:
        linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.hero__banner-content {
    display: grid;
    gap: var(--space-4);
    align-content: center;
    min-height: 304px;
    padding: var(--space-8);
}

.hero__banner-kicker {
    width: fit-content;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    background-color: rgb(99 102 241 / 0.12);
    color: var(--color-primary-hover);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-normal);
    text-transform: uppercase;
}

.hero__banner-title {
    color: #0f172a;
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-tight);
}

.hero__banner-line {
    display: block;
    width: 62%;
    height: 12px;
    border-radius: var(--radius-full);
    background-color: rgb(15 23 42 / 0.14);
}

.hero__banner-line--wide {
    width: 84%;
}

@media (max-width: 860px) {
    .hero {
        padding-block: var(--space-16);
    }

    .hero__container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 520px) {
    .hero {
        padding-block: var(--space-12);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__button {
        width: 100%;
    }

    .hero__banner {
        min-height: 280px;
    }

    .hero__banner-content {
        min-height: 224px;
        padding: var(--space-6);
    }
}

</style>
