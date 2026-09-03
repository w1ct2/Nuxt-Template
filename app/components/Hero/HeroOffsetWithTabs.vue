<template>
    <section class="hero">
        <Container class="hero__container">
            <div class="hero__content">
                <span class="hero__badge">primer@primer.ru</span>
                <h1 class="hero__title">Создавайте продукты, которые вдохновляют</h1>
                <p class="hero__text">
                    Изучите возможности, которые помогают вашей команде работать быстрее и создавать
                    единый опыт взаимодействия для каждого клиента.
                </p>

                <div class="hero__tabs" role="tablist" aria-label="Preview selection">
                    <button
                        v-for="tab in tabs"
                        :id="`hero-tab-${tab.id}`"
                        :key="tab.id"
                        class="hero__tab"
                        :class="{ 'hero__tab--active': activeTabId === tab.id }"
                        role="tab"
                        type="button"
                        :aria-controls="`hero-panel-${tab.id}`"
                        :aria-selected="activeTabId === tab.id"
                        @click="activeTabId = tab.id"
                    >
                        {{ tab.label }}
                    </button>
                </div>

                <div class="hero__actions">
                    <a class="hero__button hero__button--primary" href="#">Начать бесплатно</a>
                    <a class="hero__button hero__button--secondary" href="#">
                        Узнать больше <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div
                :id="`hero-panel-${activeTab.id}`"
                class="hero__media"
                role="tabpanel"
                :aria-labelledby="`hero-tab-${activeTab.id}`"
            >
                <span class="hero__media-badge">{{ activeTab.badge }}</span>
            </div>
        </Container>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Container from '~/components/UI/Container.vue';

interface Tab {
    id: string;
    label: string;
    badge: string;
    previewLabel: string;
    title: string;
}

const tabs: Tab[] = [
    { id: 'one', label: 'Дашборд', badge: 'Аналитика', previewLabel: 'Превью 01', title: 'Ваше рабочее пространство' },
    { id: 'two', label: 'Команда', badge: 'Участники', previewLabel: 'Превью 02', title: 'Аналитика команды' },
    { id: 'three', label: 'Проекты', badge: 'Задачи', previewLabel: 'Превью 03', title: 'Обзор проектов' },
];

const initialTab = tabs[0]!;
const activeTabId = ref<string>(initialTab.id);
const activeTab = computed<Tab>(
    () => tabs.find((tab) => tab.id === activeTabId.value) ?? initialTab,
);
</script>

<style scoped>
.hero {
    min-height: calc(100dvh - var(--header-height));
    margin-top: var(--header-height);
    padding-block: var(--space-20);
    background-color: var(--color-surface);
}

.hero__container {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: var(--space-16);
    align-items: center;
}

.hero__content {
    display: grid;
    justify-items: start;
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
    margin-top: var(--space-5);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hero__text {
    max-width: 560px;
    margin-top: var(--space-5);
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.hero__tabs {
    display: flex;
    gap: var(--space-2);
    margin-top: var(--space-8);
    padding: var(--space-1);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-full);
}

.hero__tab {
    min-height: 36px;
    padding-inline: var(--space-4);
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    transition: background-color var(--transition-fast), color var(--transition-fast);
}

.hero__tab:hover,
.hero__tab--active {
    background-color: var(--color-surface-hover);
    color: var(--color-text-primary);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
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
    transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
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
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.hero__media {
    position: relative;
    min-height: 480px;
    padding: var(--space-6);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-lg);
    background-color: var(--color-surface-hover);
}

.hero__media-badge {
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
    .hero {
        padding-block: var(--space-16);
    }

    .hero__container {
        grid-template-columns: 1fr;
    }

    .hero__media-wrap {
        padding: var(--space-4) var(--space-4) var(--space-6) 0;
    }
}

@media (max-width: 520px) {
    .hero {
        padding-block: var(--space-12);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__tabs {
        width: 100%;
    }

    .hero__tab {
        flex: 1;
        padding-inline: var(--space-2);
    }

    .hero__actions {
        width: 100%;
    }

    .hero__button {
        flex: 1 1 180px;
    }

    .hero__media {
        min-height: 340px;
        padding: var(--space-4);
    }

    .hero__preview {
        min-height: 300px;
        padding: var(--space-6);
    }

    .hero__media-badge {
        bottom: calc(var(--space-4) * -1);
        left: calc(var(--space-4) * -1);
    }
}
</style>
