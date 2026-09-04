<template>
    <header class="header">
        <Container class="header__container">
            <!-- Логотип -->
            <a class="header__logo" href="#" aria-label="На главную">
                ТехноСтарт
            </a>
            <!-- Основная навигация -->
            <nav class="header__nav" aria-label="Main navigation">
                <a
                    v-for="link in navLinks"
                    :key="link.href"
                    class="header__link"
                    :href="link.href"
                >
                    {{ link.label }}
                </a>
            </nav>
        </Container>
    </header>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';

const navLinks = [ // Массив ссылок навигации
    { label: 'Возможности', href: '#features' },
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Отзывы', href: '#social-proof' },
    { label: 'Тарифы', href: '#plans' },
    { label: 'Начать', href: '#cta' },
];
</script>

<style scoped>
.header { /* Фиксированная шапка */
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    min-height: var(--header-height);
    border-bottom: 1px solid rgb(255 255 255 / 0.1);
    background-color: rgb(13 13 13 / 0.82);
    backdrop-filter: blur(16px);
}
/* Контейнер шапки: логотип + навигация */
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--header-height);
    gap: var(--space-6);
}

.header__logo { /* Логотип */
    flex: 0 0 auto;
    color: var(--color-text-primary);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.header__nav { /* Панель навигации */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-2);
    overflow-x: auto;
    scrollbar-width: none;
}
.header__nav::-webkit-scrollbar {
    display: none;
}

.header__link { /* Ссылка навигации */
    flex: 0 0 auto;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast);
}

.header__link:hover {
    color: var(--color-text-primary);
}

/* Брикпоинты */
@media (max-width: 760px) {
    .header__container {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding-block: var(--space-3);
    }

    .header__nav {
        width: 100%;
        justify-content: flex-start;
    }
}

</style>
