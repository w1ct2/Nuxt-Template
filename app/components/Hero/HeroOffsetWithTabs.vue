<template>
    <section class="hero">
        <Container class="hero__container">
            <div class="hero__content">
                <span class="hero__badge">hello@example.com</span>
                <h1 class="hero__title">Bring your product story into focus</h1>
                <p class="hero__text">
                    Explore the features that help your team move faster and create a
                    consistent experience for every customer.
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
                    <a class="hero__button hero__button--primary" href="#">Get started</a>
                    <a class="hero__button hero__button--secondary" href="#">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div class="hero__media-wrap">
                <div
                    :id="`hero-panel-${activeTab.id}`"
                    class="hero__media"
                    role="tabpanel"
                    :aria-labelledby="`hero-tab-${activeTab.id}`"
                >
                    <div class="hero__preview" :class="`hero__preview--${activeTab.id}`">
                        <span class="hero__preview-kicker">{{ activeTab.previewLabel }}</span>
                        <strong>{{ activeTab.title }}</strong>
                        <span class="hero__preview-line hero__preview-line--wide" />
                        <span class="hero__preview-line" />
                    </div>
                    <span class="hero__media-badge">{{ activeTab.badge }}</span>
                </div>
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
    { id: 'one', label: 'Tab 1', badge: 'Бэйдж 1', previewLabel: 'Preview 01', title: 'Your workspace' },
    { id: 'two', label: 'Tab 2', badge: 'Бэйдж 2', previewLabel: 'Preview 02', title: 'Team analytics' },
    { id: 'three', label: 'Tab 3', badge: 'Бэйдж 3', previewLabel: 'Preview 03', title: 'Project overview' },
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
    font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
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
    border: 1px solid rgb(255 255 255 / 0.2);
    color: var(--color-text-primary);
}

.hero__button--secondary:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.hero__media-wrap {
    padding-left: var(--space-8);
}

.hero__media {
    position: relative;
    min-height: 480px;
    padding: var(--space-6);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-lg);
    background-color: var(--color-surface-hover);
    box-shadow: var(--shadow-lg);
}

.hero__preview {
    display: grid;
    align-content: center;
    gap: var(--space-5);
    height: 100%;
    min-height: 430px;
    padding: var(--space-8);
    border-radius: var(--radius-md);
    background-color: #252627;
    color: var(--color-text-primary);
    transition: background-color var(--transition-normal);
}

.hero__preview--two {
    background-color: #2e3035;
}

.hero__preview--three {
    background-color: #363331;
}

.hero__preview-kicker {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
}

.hero__preview strong {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-tight);
}

.hero__preview-line {
    display: block;
    width: 58%;
    height: 12px;
    border-radius: var(--radius-full);
    background-color: rgb(255 255 255 / 0.16);
}

.hero__preview-line--wide {
    width: 82%;
}

.hero__media-badge {
    position: absolute;
    bottom: var(--space-2);
    left: var(--space-2);
    padding: var(--space-3) var(--space-5);
    border: 1px solid rgb(255 255 255 / 0.15);
    border-radius: var(--radius-full);
    background-color: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    box-shadow: var(--shadow-md);
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
