<template>
    <section class="faq">
        <Container>
            <div class="faq__intro">
                <h2>Часто задаваемые вопросы</h2>
                <p>Не нашли ответ на ваш вопрос? Свяжитесь с нашей командой поддержки, <a href="mailto:support@technostart.ru">отправив нам email</a>, и мы ответим вам как можно скорее.</p>
            </div>
            <div class="faq__grid">
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
    padding-bottom: var(--space-4);
}

a {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
}

.faq__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-16) var(--space-12);
    margin-top: clamp(var(--space-12), 7vw, 112px);
}

h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.faq__item p {
    margin-top: var(--space-4);
}

@media (max-width: 900px) {
    .faq__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .faq__grid {
        grid-template-columns: 1fr;
        gap: var(--space-10);
    }

    .faq__intro p,
    .faq__item p,
    h3 {
        font-size: var(--font-size-lg);
    }
}
</style>
