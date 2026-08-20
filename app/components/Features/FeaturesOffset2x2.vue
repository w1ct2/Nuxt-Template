<template>
    <section class="features">
        <Container class="features__layout">
            <header class="features__intro"><h2>Stay on top of<br>customer support</h2></header>
            <div class="features__grid">
                <article v-for="feature in features" :key="feature.title" class="feature">
                    <span class="feature__icon" aria-hidden="true">{{ feature.icon }}</span>
                    <h3>{{ feature.title }}</h3><p>{{ feature.text }}</p>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';
const features = [
    { icon: '♲', title: 'Spam report', text: 'Keep the inbox focused by reporting and filtering unwanted messages.' },
    { icon: '✎', title: 'Compose in markdown', text: 'Write polished replies quickly with clean formatting built in.' },
    { icon: '◌', title: 'Email commenting', text: 'Leave feedback right where your team needs to see it.' },
    { icon: '♡', title: 'Customer connections', text: 'Build a complete, shared picture of every customer relationship.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    background-color: var(--color-surface);
}

.features__layout {
    display: grid;
    grid-template-columns: minmax(260px, .8fr) minmax(0, 1.2fr);
    gap: var(--space-20);
    align-items: start;
}

h2 {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.features__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-16) var(--space-12);
}

.feature__icon {
    display: grid;
    width: 64px;
    height: 64px;
    place-items: center;
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-2xl);
}

h3 {
    margin-top: var(--space-6);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.feature p {
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

@media (max-width: 850px) {
    .features {
        padding-block: var(--space-16);
    }

    .features__layout {
        grid-template-columns: 1fr;
        gap: var(--space-12);
    }

    .features__grid {
        gap: var(--space-10) var(--space-6);
    }

}

@media (max-width: 560px) {
    .features__grid {
        grid-template-columns: 1fr;
    }

}
</style>
