<template>
    <section class="features">
        <Container>
            <div class="features__intro">
                <p class="features__eyebrow">Развёртывайте быстрее</p>
                <h2>Всё необходимое<br>для запуска вашего приложения</h2>
                <p>Создавайте, запускайте и масштабируйте проекты с надёжной платформой, которая не мешает работать.</p>
            </div>
            <div class="features__grid">
                <article v-for="feature in features" :key="feature.title" class="feature">
                    <span class="feature__icon" aria-hidden="true">{{ feature.icon }}</span>
                    <div><h3>{{ feature.title }}</h3><p>{{ feature.text }}</p></div>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';
const features = [
    { icon: '↥', title: 'Развёртывание в один клик', text: 'Разворачивайте каждое обновление за секунды с помощью рабочего процесса, которому доверяет вся команда.' },
    { icon: '▣', title: 'SSL-сертификаты', text: 'Автоматически защищайте каждый домен без необходимости самостоятельно управлять сертификатами.' },
    { icon: '⟳', title: 'Очереди задач', text: 'Надёжно выполняйте фоновые задачи, сохраняя отзывчивость вашего приложения.' },
    { icon: '◉', title: 'Расширенная безопасность', text: 'Защищайте приложение разумными настройками по умолчанию и детальными правами доступа.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    background-color: var(--color-surface);
}

.features__intro {
    max-width: 760px;
    margin-inline: auto;
    text-align: center;
}

.features__eyebrow {
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
}

h2 {
    margin-top: var(--space-4);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.features__intro > p:last-child {
    margin-top: var(--space-6);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

.features__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-16) var(--space-20);
    margin-top: var(--space-16);
}

.feature {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: var(--space-5);
    align-items: start;
}

.feature__icon {
    display: grid;
    width: 50px;
    height: 50px;
    place-items: center;
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    margin: auto 0;
}

h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.feature p {
    margin-top: var(--space-2);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-relaxed);
}

@media (max-width: 700px) {
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
