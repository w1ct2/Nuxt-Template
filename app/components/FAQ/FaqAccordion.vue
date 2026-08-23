<template>
    <section class="faq">
        <Container>
            <div class="faq__intro">
                <h2>Чо asked questions</h2>
                <p>Can’t find the answer you’re looking for? Reach out to our <a href="mailto:support@example.com">customer support</a> team.</p>
            </div>
            <div class="faq__list">
                <article v-for="(item, index) in faqItems" :key="item.question" class="faq__item">
                    <button class="faq__trigger" type="button" :aria-expanded="openedItem === index"
                        :aria-controls="`faq-answer-${index}`" @click="toggleItem(index)">
                        <span>{{ item.question }}</span>
                        <span class="faq__icon" :class="{ 'faq__icon--open': openedItem === index }"
                            aria-hidden="true"></span>
                    </button>
                    <div :id="`faq-answer-${index}`" class="faq__answer"
                        :class="{ 'faq__answer--open': openedItem === index }">
                        <div class="faq__answer-inner">
                            <p class="faq__answer-content">{{ item.answer }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faqItems } from '~/data/faq';
import Container from '~/components/UI/Container.vue';

const openedItem = ref(0);

function toggleItem(index: number) {
    openedItem.value = openedItem.value === index ? -1 : index;
}
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
    max-width: 860px;
    margin-top: var(--space-16);
}

.faq__item {
    border-bottom: 1px solid var(--color-border-subtle);
}

.faq__trigger {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-6);
    padding-block: var(--space-6);
    color: var(--color-text-primary);
    text-align: left;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    cursor: pointer;
    background: none;
    border: none;
}

.faq__icon {
    position: relative;
    flex: 0 0 22px;
    height: 22px;
}

.faq__icon::before,
.faq__icon::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background: currentColor;
    content: '';
    transform: translate(-50%, -50%);
    transition: transform var(--transition-fast);
}

.faq__icon::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.faq__icon--open::after {
    transform: translate(-50%, -50%) rotate(0);
}

.faq__answer {
    display: grid;
    grid-template-rows: 0fr;
    max-width: 740px;
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
    transition: grid-template-rows var(--transition-slow), visibility var(--transition-slow);
    visibility: hidden;
}

.faq__answer--open {
    grid-template-rows: 1fr;
    visibility: visible;
}

.faq__answer-inner {
    overflow: hidden;
}

.faq__answer-content {
    padding: 0 40px var(--space-6) 0;
    margin: 0;
}

@media (max-width: 700px) {
    .faq__trigger,
    .faq__answer {
        font-size: var(--font-size-md);
    }
}
</style>
