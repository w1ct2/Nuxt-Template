<template>
    <section class="faq">
        <Container>
            <div class="faq__wrapper">
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
.faq__wrapper {
    display: flex;
    gap: var(--space-10);
}

h2 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.faq__intro p,
.faq__item p {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.faq__intro p {
    margin: var(--space-6) 0;
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-primary);
}

a {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
}

.faq__list {
    display: grid;
    align-content: start;
    gap: var(--space-10);
    max-width: 50%;
}

h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.faq__item p {
    margin-top: var(--space-4);
    font-size: var(--font-size-md);
}
</style>

