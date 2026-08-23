<template>
    <section class="faq">
        <Container>
            <div class="faq__intro">
                <h2>Чо asked questions</h2>
                <p>Can’t find the answer you’re looking for? Reach out to our <a href="mailto:support@example.com">customer support</a> team.</p>
            </div>
            <div class="faq__list">
                <article v-for="item in faqItems" :key="item.question" class="faq__item">
                    <h3>{{ item.question }}</h3>
                    <p>{{ item.answer }}</p>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/faq';
import Container from '~/components/UI/Container.vue';
</script>

<style scoped>
.faq {
    padding-block: var(--space-6);
}

h2 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.faq__intro {
    max-width: fit-content;
}

.faq__intro p,
.faq__item p {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.faq__intro p {
    max-width: 1020px;
    margin-top: var(--space-6);
    border-bottom: 1px solid var(--color-primary);
    padding-bottom: var(--space-4);
}

a {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
}

.faq__list {
    margin-top: clamp(var(--space-12), 7vw, 112px);
}

.faq__item {
    display: grid;
    grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1fr);
    gap: var(--space-12);
    padding-block: var(--space-8);
    border-bottom: 1px solid var(--color-border-subtle);
}

.faq__item:first-child {
    padding-top: 0;
}

.faq__item:last-child {
    border-bottom: 0;
}

h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

p {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

@media (max-width: 700px) {
    .faq__item {
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }

    h3,
    p {
        font-size: var(--font-size-lg);
    }
}
</style>