<template>
    <section class="features">
        <Container class="features__layout">
            <!-- Хэдер часть с заголовками -->
            <div class="features__intro">
                <h2>Контролируйте<br>поддержку клиентов</h2>
                <p>Всё необходимое вашей команде для поддержки диалогов и удовлетворённости клиентов.</p>
            </div>
            <!-- Список возможностей -->
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
const features = [ // Массив карточек возможностей
    { icon: '♲', title: 'Отчёты о спаме', text: 'Поддерживайте фокус входящих, сообщая и фильтруя нежелательные сообщения.' },
    { icon: '✎', title: 'Составление в Markdown', text: 'Быстро создавайте аккуратные ответы со встроенным форматированием.' },
    { icon: '◌', title: 'Комментарии к письмам', text: 'Оставляйте обратную связь там, где ваша команда должна её увидеть.' },
    { icon: '♡', title: 'Взаимосвязи с клиентами', text: 'Создавайте полную и общую картину каждого отношения с клиентом.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    background-color: var(--color-surface);
}
/* Макет с смещением интро и списка */
.features__layout {
    display: grid;
    grid-template-columns: minmax(260px, .8fr) minmax(0, 1.2fr);
    gap: var(--space-20);
    align-items: start;
}
/* Хэдер часть с заголовками */
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
/* Список возможностей */
.features__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-16) var(--space-12);
}

.feature__icon { /* Иконка возможности */
    display: grid;
    width: 50px;
    height: 50px;
    place-items: center;
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
}

h3 {
    margin-top: var(--space-6);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.feature p {
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

/* Брикпоинты */
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
