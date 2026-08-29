<template>
    <section class="features">
        <Container class="features__layout">
            <div class="features__content">
                <p class="features__eyebrow">Deploy faster</p>
                <h2>A better workflow</h2>
                <p class="features__lead">Bring planning, deployments, and team communication together in one calm workspace.</p>
                <ul class="features__list">
                    <li v-for="feature in features" :key="feature.title">
                        <span aria-hidden="true">{{ feature.icon }}</span>
                        <p><strong>{{ feature.title }}.</strong> {{ feature.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="product" aria-label="Product interface mockup">
                
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';
const features = [
    { icon: '↥', title: 'Push to deploy', text: 'Release new work with a single predictable workflow.' },
    { icon: '▣', title: 'SSL certificates', text: 'Keep every custom domain secure automatically.' },
    { icon: '▰', title: 'Database backups', text: 'Restore important data whenever your team needs it.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    overflow: hidden;
    background-color: var(--color-surface);
}

.features__layout {
    display: grid;
    grid-template-columns: minmax(300px, .85fr) minmax(520px, 1.15fr);
    gap: var(--space-16);
    align-items: center;
}

.features__eyebrow {
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
}

h2 {
    margin-top: var(--space-3);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.features__lead {
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.features__list {
    display: grid;
    gap: var(--space-6);
    margin-top: var(--space-10);
}

.features__list li {
    display: grid;
    grid-template-columns: var(--space-6) 1fr;
    gap: var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.features__list li > span {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
}

.features__list strong {
    color: var(--color-text-primary);
}

.product {
    display: grid;
    grid-template-columns: 150px 1fr;
    min-height: 470px;
    overflow: hidden;
    border: 1px solid var(--color-border-hover);
    border-radius: var(--radius-xl);
    background-color: var(--color-background);
    box-shadow: var(--shadow-lg);
}

.product__sidebar {
    display: grid;
    align-content: start;
    gap: var(--space-4);
    padding: var(--space-6);
    border-right: 1px solid var(--color-border-hover);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
}

.product__sidebar b {
    margin-bottom: var(--space-8);
    color: var(--color-primary);
    font-size: var(--font-size-3xl);
}

.product__active {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-semibold);
}

.product__main {
    padding: var(--space-6);
}

.product__search {
    padding: var(--space-3) var(--space-4);
    border: 1px solid var(--color-border-hover);
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
}

.product__heading {
    display: flex;
    justify-content: space-between;
    margin-block: var(--space-6);
    font-size: var(--font-size-sm);
}

.product__heading span {
    color: var(--color-text-muted);
}

.project {
    display: grid;
    grid-template-columns: 10px 1fr auto;
    gap: var(--space-3);
    align-items: center;
    padding-block: var(--space-4);
    border-top: 1px solid var(--color-border-hover);
    font-size: var(--font-size-sm);
}

.project__status {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
}

.project__status--success {
    background: var(--color-success);
}

.project__status--pending {
    background: var(--color-warning);
}

.project__status--error {
    background: var(--color-error);
}

.project b, .project small {
    display: block;
}

.project small {
    margin-top: var(--space-1);
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
}

.project em {
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-full);
    background: var(--color-surface-hover);
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    font-style: normal;
}

@media (max-width: 950px) {
    .features {
        padding-block: var(--space-16);
    }

    .features__layout {
        grid-template-columns: 1fr;
    }

    .product {
        max-width: 720px;
    }

    .features__content {
        max-width: 680px;
    }

}

@media (max-width: 550px) {
    .product {
        grid-template-columns: 1fr;
        min-height: 0;
    }

    .product__sidebar {
        display: none;
    }

    .product__main {
        padding: var(--space-4);
    }

    .project {
        grid-template-columns: 8px 1fr;
    }

    .project em {
        display: none;
    }

}
</style>
