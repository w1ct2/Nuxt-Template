<template>
    <section class="hit-sales">
        <Container>
            <div class="hit-sales__intro">
                <h2 class="hit-sales__title">{{ title }}</h2>
                <p>Build, ship, and scale with a reliable platform that stays out of your way.</p>
            </div>

            <div class="hit-sales__list">
                <div class="hit-sales__row">
                    <div class="hit-sales__content">
                        <h3 class="hit-sales__row-title">
                            {{ first.title }}
                        </h3>
                        <ul class="hit-sales__ul">
                            <li v-for="item in first.description" :key="item">{{ item }}</li>
                        </ul>
                        <a class="hit-sales__button" :href="first.buttonHref">
                            {{ first.buttonLabel }}
                        </a>
                    </div>

                    <div class="hit-sales__media">
                        <article v-if="first.mediaBadge">{{ first.mediaBadge }}</article>
                    </div>
                </div>

                <div class="hit-sales__row hit-sales__row--reverse">
                    <div class="hit-sales__content">
                        <h3 class="hit-sales__row-title">
                            {{ second.title }}
                        </h3>
                        <ul class="hit-sales__ul">
                            <li v-for="item in second.description" :key="item">{{ item }}</li>
                        </ul>
                        <a class="hit-sales__button" :href="second.buttonHref">
                            {{ second.buttonLabel }}
                        </a>
                    </div>

                    <div class="hit-sales__media">
                        <article v-if="second.mediaBadge">{{ second.mediaBadge }}</article>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';

interface HitSalesItem {
    title: string;
    description: string[];
    buttonLabel: string;
    buttonHref: string;
    mediaBadge?: string;
}

withDefaults(defineProps<{
    title?: string;
    first?: HitSalesItem;
    second?: HitSalesItem;
}>(), {
    title: 'Хиты продаж',
    first: () => ({
        title: 'Популярный продукт',
        description: ['– Короткое описание преимущества. Расскажите, почему это действительно хит.', '– Ещё немного текста про продукт: быстро, понятно, с акцентом на ценность.'],
        buttonLabel: 'Заказать',
        buttonHref: '#',
        mediaBadge: 'Хит осеннего сезона',
    }),
    second: () => ({
        title: 'Ещё один хит',
        description: ['– Ещё немного текста про продукт: быстро, понятно, с акцентом на ценность.', '– Ещё немного текста про продукт: быстро, понятно, с акцентом на ценность.', '– Ещё немного текста про продукт: быстро, понятно, с акцентом на ценность.'],
        buttonLabel: 'Заказать',
        buttonHref: '#',
        mediaBadge: 'Куплен 200+ раз'
    }),
});
</script>

<style scoped>
.hit-sales {
    padding-block: var(--space-16);
}
.hit-sales__intro {
    max-width: 760px;
    margin-bottom: var(--space-16);
}

.hit-sales__title {
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hit-sales__intro p {
    margin-top: var(--space-6);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.hit-sales__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
}

.hit-sales__row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: var(--space-10);
    height: 480px;
    min-height: 0;
    width: 100%;
}

.hit-sales__row--reverse {
    flex-direction: row-reverse;
}

.hit-sales__content {
    display: flex;
    flex-direction: column;
    justify-items: start;
    gap: var(--space-4);
    height: 100%;
    max-width: 480px;
    align-self: stretch;
    flex: 1 1 0;
}

.hit-sales__row-title {
    color: var(--color-text-primary);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.hit-sales__ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin: var(--space-2) 0;
    max-width: 560px;
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.hit-sales__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    min-height: 32px;
    padding-inline: var(--space-6);
    border-radius: var(--radius-full);
    background-color: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    transition:
        background-color var(--transition-fast),
        transform var(--transition-fast);
}

.hit-sales__button:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-1px);
}

.hit-sales__media {
    position: relative;
    height: 100%;
    max-width: 560px;
    width: 100%;
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
    overflow: hidden;
    flex: 1 1 0;
}

.hit-sales__media :slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hit-sales__media article {
    width: fit-content;
    background-color: var(--color-primary);
    position: absolute;
    bottom: var(--space-4);
    left: var(--space-6);
    color: var(--color-text-primary);
    font-weight: var(--font-weight-bold);
    padding: var(--space-2) var(--space-6);;
    border-radius: var(--radius-full);
}

@media (max-width: 900px) {
    .hit-sales__row,
    .hit-sales__row--reverse {
        flex-direction: column;
        align-items: stretch;
    }

    .hit-sales__content {
        flex: 1 1 auto;
    }

    .hit-sales__media {
        flex: 1 1 auto;
        min-height: 260px;
    }
}

@media (max-width: 520px) {
    .hit-sales {
        padding-block: var(--space-12);
    }

    .hit-sales__title {
        font-size: var(--font-size-2xl);
    }
}
</style>
