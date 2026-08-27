<template>
    <footer class="footer">
        <Container class="footer__container">
            <div class="footer__brand">
                <a class="footer__logo" href="#" aria-label="Go to top">
                    {{ brand }}
                </a>
            </div>

            <nav class="footer__columns" aria-label="Footer navigation">
                <div
                    v-for="column in columns"
                    :key="column.title"
                    class="footer__column"
                >
                    <h3 class="footer__column-title">
                        {{ column.title }}
                    </h3>
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

        <FooterBottomBar />
    </footer>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
import FooterBottomBar from './components/FooterBottomBar.vue';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

withDefaults(defineProps<{
    brand?: string;
    columns?: FooterColumn[];
}>(), {
    brand: 'Footer',
    columns: () => [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#plans' },
                { label: 'FAQ', href: '#faq' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '#about' },
                { label: 'Careers', href: '#careers' },
                { label: 'Blog', href: '#blog' },
                { label: 'Press', href: '#press' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#docs' },
                { label: 'Help Center', href: '#help' },
                { label: 'Community', href: '#community' },
                { label: 'Webinars', href: '#webinars' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms of Service', href: '#terms' },
                { label: 'Cookie Policy', href: '#cookies' },
                { label: 'Licenses', href: '#licenses' },
            ],
        },
    ],
});
</script>

<style scoped>
.footer {
    border-top: 1px solid rgb(255 255 255 / 0.1);
    background-color: #111111;
}

.footer__container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: var(--space-12);
    padding-block: var(--space-16);
}

.footer__brand {
    display: grid;
    align-content: start;
    justify-items: start;
}

.footer__logo {
    color: var(--color-text-primary);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.footer__columns {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-8);
}

.footer__column {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.footer__column-title {
    color: var(--color-text-primary);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.footer__column-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    list-style: none;
}

.footer__column-link {
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
