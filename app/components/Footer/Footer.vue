<template>
    <footer class="footer">
        <Container class="footer__container">
            <div class="footer__brand">
                <a class="footer__logo" href="#" aria-label="Go to top">
                    Footer
                </a>

                <nav class="footer__nav" aria-label="Footer navigation">
                    <a
                        v-for="link in navLinks"
                        :key="link.href"
                        class="footer__link"
                        :href="link.href"
                    >
                        {{ link.label }}
                    </a>
                </nav>
            </div>

            <div class="footer__contacts">
                <h2 class="footer__title">Contacts</h2>

                <address class="footer__address">
                    24 Landing Street, Suite 120<br>
                    San Francisco, CA 94105
                </address>

                <a class="footer__phone" href="tel:+15550142024">
                    +1 (555) 014-2024
                </a>

                <div class="footer__socials" aria-label="Social links">
                    <a
                        v-for="social in socials"
                        :key="social"
                        class="footer__social"
                        href="#"
                        :aria-label="social"
                    />
                </div>
            </div>
        </Container>
    </footer>
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

const socials = ['Twitter', 'LinkedIn', 'Instagram'];
</script>

<style scoped>
.footer {
    padding-block: var(--space-16);
    border-top: 1px solid rgb(255 255 255 / 0.1);
    background-color: #111111;
}

.footer__container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
    gap: var(--space-12);
}

.footer__brand {
    display: grid;
    align-content: start;
    justify-items: start;
    gap: var(--space-6);
}

.footer__logo {
    color: var(--color-text-primary);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.footer__nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: var(--space-2);
    max-width: 620px;
}

.footer__link {
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast);
}

.footer__link:hover {
    background-color: rgb(255 255 255 / 0.08);
    color: var(--color-text-primary);
}

.footer__contacts {
    display: grid;
    align-content: start;
    gap: var(--space-4);
}

.footer__title {
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
}

.footer__address,
.footer__phone {
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    font-style: normal;
    line-height: var(--line-height-relaxed);
}

.footer__phone {
    width: fit-content;
    transition: color var(--transition-fast);
}

.footer__phone:hover {
    color: var(--color-text-primary);
}

.footer__socials {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding-top: var(--space-2);
}

.footer__social {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background-color: var(--color-secondary);
    transition:
        background-color var(--transition-fast),
        transform var(--transition-fast);
}

.footer__social:hover {
    background-color: var(--color-secondary-hover);
    transform: translateY(-1px);
}

@media (max-width: 760px) {
    .footer {
        padding-block: var(--space-12);
    }

    .footer__container {
        grid-template-columns: 1fr;
        gap: var(--space-10);
    }
}

</style>
