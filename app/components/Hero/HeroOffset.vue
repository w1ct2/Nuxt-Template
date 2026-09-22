<template>
    <section class="hero">
        <Container class="hero__container">
            <!-- Контент hero-секции -->
            <div class="hero__content">
                <!-- <p class="hero__badge">Стартовый шаблон Nuxt</p> -->
                <h1 class="hero__title">Создавайте чистые интерфейсы быстрее</h1>
                <p class="hero__text">
                    Готовая hero-секция с повторно используемой разметкой, чёткой иерархией контента
                    и гибкой областью баннера для будущих медиафайлов.
                </p>
                <!-- Кнопки действий -->
                <div class="hero__actions">
                    <TheButton type="primary" size="medium">
                        <template #text>Начать бесплатно</template>
                    </TheButton>
                    <TheButton type="transparent" size="medium">
                        <template #text>Узнать больше</template>
                    </TheButton>
                </div>
            </div>
        </Container>
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
import TheButton from '../UI/TheButton.vue';
</script>

<style scoped>
.hero { /* Hero-секция */
    margin-top: var(--header-height);
    padding: var(--space-16);
    background-color: var(--color-surface);
    min-height: calc(100dvh - var(--header-height));
}

.hero__content { /* Основной контент */
    display: grid;
    justify-items: start;
    gap: var(--space-5);
}

.hero__badge { /* Бейдж */
    padding: var(--space-2) var(--space-4);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 50%;
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
}

.hero__title { /* Заголовок hero */
    max-width: 680px;
}

.hero__text { /* Описание hero */
    max-width: 560px;
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.hero__actions { /* Контейнер кнопок */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
    margin-top: var(--space-8);
}

.hero__button { /* Общие стили кнопки */
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

.hero__banner { /* Баннер-медиа */
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

/* Брикпоинты */
@media (max-width: 768px) {
    .hero {
        padding: var(--space-8);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 0;
        padding-top: var(--space-12);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__button {
        width: 100%;
    }
}

</style>
