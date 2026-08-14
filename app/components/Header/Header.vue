<template>
    <header class="header">
        <Container class="header__container">
            <a class="header__logo" href="#" aria-label="Go to top">
                Header
            </a>

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

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Social Proof', href: '#social-proof' },
    { label: 'Plans', href: '#plans' },
    { label: 'CTA', href: '#cta' },
];
</script>

<style scoped>
.header {
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

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--header-height);
    gap: var(--space-6);
}

.header__logo {
    flex: 0 0 auto;
    color: var(--color-text-primary);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.header__nav {
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

.header__link {
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
    background-color: rgb(255 255 255 / 0.08);
    color: var(--color-text-primary);
}

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
