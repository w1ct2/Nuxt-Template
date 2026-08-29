<template>
    <section class="features">
        <Container>
            <div class="features__intro">
                <h2>Stay on top of customer support</h2>
                <p>Everything your team needs to keep conversations moving and customers happy.</p>
            </div>
            <div class="features__grid">
                <article v-for="feature in features" :key="feature.title" class="feature">
                    <span class="feature__icon" aria-hidden="true">{{ feature.icon }}</span>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.text }}</p>
                    <a href="#" class="feature__link">Learn more <span aria-hidden="true">→</span></a>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';

const features = [
    { icon: '▱', title: 'Unlimited inboxes', text: 'Keep every customer request organized in one clear workspace.' },
    { icon: '◌', title: 'Manage team members', text: 'Assign conversations and give your team the context it needs.' },
    { icon: '♲', title: 'Spam report', text: 'Filter unwanted messages before they slow down your support.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    background-color: var(--color-surface);
}

.features__intro {
    max-width: 760px;
}

h2 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.features__intro p {
    max-width: 680px;
    margin-top: var(--space-4);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.features__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-12);
    margin-top: var(--space-20);
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.feature__icon {
    display: grid;
    width: 64px;
    height: 64px;
    place-items: center;
    border-radius: var(--radius-md);
    background: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-3xl);
}

h3 {
    margin-top: var(--space-8);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.feature p {
    margin-top: var(--space-4);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.feature__link {
    margin-top: var(--space-8);
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
    transition: color var(--transition-fast);
}

.feature__link:hover {
    color: var(--color-primary-hover);
}

@media (max-width: 800px) {
    .features {
        padding-block: var(--space-16);
    }

    .features__grid {
        grid-template-columns: 1fr;
        gap: var(--space-10);
        margin-top: var(--space-12);
    }

}
</style>
