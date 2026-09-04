<template>
    <section class="features">
        <Container>
            <!-- Хэдер часть с заголовками -->
            <div class="features__intro">
                <h2>Контролируйте поддержку клиентов</h2>
                <p>Всё необходимое вашей команде для поддержки диалогов и удовлетворённости клиентов.</p>
            </div>
            <!-- Список возможностей -->
            <div class="features__grid">
                <article v-for="feature in features" :key="feature.title" class="feature">
                    <span class="feature__icon" aria-hidden="true">{{ feature.icon }}</span>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.text }}</p>
                    <a href="#" class="feature__link">Подробнее <span aria-hidden="true">→</span></a>
                </article>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';

const features = [ // Массив карточек возможностей
    { icon: '▱', title: 'Безлимитные входящие', text: 'Организуйте все запросы клиентов в одном понятном рабочем пространстве.' },
    { icon: '◌', title: 'Управление командой', text: 'Назначайте диалоги и предоставляйте команде необходимый контекст.' },
    { icon: '♲', title: 'Отчёты о спаме', text: 'Фильтруйте нежелательные сообщения до того, как они замедлят поддержку.' },
];
</script>

<style scoped>
.features {
    padding-block: var(--space-24);
    background-color: var(--color-surface);
}
/* Хэдер часть с заголовками */
.features__intro {
    max-width: 760px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-12);
    margin-top: var(--space-20);
}
.feature { /* Элемент списка возможностей */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.feature__icon { /* Иконка возможности */
    display: grid;
    width: 64px;
    height: 64px;
    place-items: center;
    border-radius: var(--radius-md);
    background: var(--color-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-3xl);
}
.feature h3 {
    margin-top: var(--space-8);
}
.feature p {
    margin-top: var(--space-4);
    color: var(--color-text-muted);
}
.feature__link { /* Ссылка */
    margin-top: var(--space-8);
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
    transition: color var(--transition-fast);
}
.feature__link:hover {
    color: var(--color-primary-hover);
}

/* Брикпоинты */
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
