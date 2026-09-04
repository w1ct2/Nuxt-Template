<template>
    <footer class="footer">
        <Container class="footer__container">
            <!-- Блок бренда -->
            <div class="footer__brand">
                <a class="footer__logo" href="#" aria-label="Go to top">
                    {{ brand }}
                </a>
            </div>
            <!-- Колонки ссылок навигации -->
            <nav class="footer__columns" aria-label="Footer navigation">
                <div
                    v-for="column in columns"
                    :key="column.title"
                    class="footer__column"
                >
                    <h4 class="footer__column-title">
                        {{ column.title }}
                    </h4>
                    <ul class="footer__column-list">
                        <li v-for="link in column.links" :key="link.href">
                            <a
                                class="footer__column-link"
                                :href="link.href"
                            >
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
        <!-- низ футера -->
        <FooterBottomBar />
    </footer>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
import FooterBottomBar from './components/FooterBottomBar.vue';

interface FooterLink { // Тип для ссылки в колонке футера
    label: string;
    href: string;
}

interface FooterColumn { // Тип для колонки ссылок футера
    title: string;
    links: FooterLink[];
}

withDefaults(defineProps<{ // Пропсы компонента футера
    brand?: string;
    columns?: FooterColumn[];
}>(), {
    brand: 'ТехноСтарт', // Значение по умолчанию для названия бренда
    columns: () => [
        {
            title: 'Продукт',
            links: [
                { label: 'Возможности', href: '#features' },
                { label: 'Как это работает', href: '#how-it-works' },
                { label: 'Тарифы', href: '#plans' },
                { label: 'Частые вопросы', href: '#faq' },
            ],
        },
        {
            title: 'Компания',
            links: [
                { label: 'О нас', href: '#about' },
                { label: 'Вакансии', href: '#careers' },
                { label: 'Блог', href: '#blog' },
                { label: 'Пресса', href: '#press' },
            ],
        },
        {
            title: 'Ресурсы',
            links: [
                { label: 'Документация', href: '#docs' },
                { label: 'Справочный центр', href: '#help' },
                { label: 'Сообщество', href: '#community' },
                { label: 'Вебинары', href: '#webinars' },
            ],
        },
        {
            title: 'Правовая информация',
            links: [
                { label: 'Политика конфиденциальности', href: '#privacy' },
                { label: 'Условия использования', href: '#terms' },
                { label: 'Политика cookies', href: '#cookies' },
                { label: 'Лицензии', href: '#licenses' },
            ],
        },
    ],
});
</script>

<style scoped>
.footer {
    border-top: 1px solid rgb(255 255 255 / 0.1);
    background-color: #111111;
    margin-top: var(--space-16);
}
/* Контейнер футера: бренд + колонки */
.footer__container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: var(--space-12);
    padding-block: var(--space-16);
}

.footer__brand { /* Секция бренда */
    display: grid;
    align-content: start;
    justify-items: start;
}

.footer__logo { /* Логотип/название бренда */
    color: var(--color-text-primary);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.footer__columns { /* Сетка колонок навигации */
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-8);
}

.footer__column { /* Отдельная колонка ссылок */
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.footer__column-title { /* Заголовок колонки */
    color: var(--color-text-primary);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.footer__column-list { /* Список ссылок */
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    list-style: none;
}

.footer__column-link { /* Отдельная ссылка */
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
    transition:
        color var(--transition-fast),
        opacity var(--transition-fast);
    opacity: 0.8;
}

.footer__column-link:hover {
    color: var(--color-text-primary);
    opacity: 1;
}

/* Брикпоинты */
@media (max-width: 900px) {
    .footer__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 760px) {
    .footer {
        padding-top: var(--space-12);
    }

    .footer__container {
        grid-template-columns: 1fr;
        gap: var(--space-10);
    }
}

@media (max-width: 480px) {
    .footer__columns {
        grid-template-columns: 1fr;
    }
}
</style>
