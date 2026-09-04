<template>
    <section class="faq">
        <Container> 
            <!-- Хэдер часть с заголовками -->
            <div class="faq__intro">
                <h2>Часто задаваемые вопросы</h2>
                <p>Не нашли ответ на ваш вопрос? Свяжитесь с нашей командой <a href="mailto:support@technostart.ru">поддержки клиентов</a>.</p>
            </div>
            <!-- Список вопросов -->
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
/* Хэдер часть с заголовками */
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
.faq__intro a {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
}
/* Список вопросов */
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
.faq__item p {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}
/* Элемент списка вопросов */
@media (max-width: 700px) {
    .faq__item {
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }
}
</style>