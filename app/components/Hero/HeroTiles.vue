<template>
    <section class="hero">
        <Container class="hero__container">
            <div class="hero__content">
                <p class="hero__badge">Nuxt starter template</p>
                <h1 class="hero__title">We’re changing the way people connect</h1>
                <p class="hero__text">
                    Create meaningful experiences with a flexible foundation for your
                    product, team, and community.
                </p>
                <div class="hero__actions">
                    <a class="hero__button hero__button--primary" href="#">Get started</a>
                    <a class="hero__button hero__button--secondary" href="#">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div class="hero__tiles" aria-label="Decorative tile composition">
                <div class="hero__tiles-column">
                    <span class="hero__tile" />
                </div>
                <div class="hero__tiles-column">
                    <span class="hero__tile" />
                    <span class="hero__tile" />
                </div>
                <div class="hero__tiles-column">
                    <span class="hero__tile" />
                    <span class="hero__tile" />
                </div>
            </div>
        </Container>
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
</script>

<style scoped>
.hero {
    position: relative;
    min-height: calc(100dvh - var(--header-height));
    margin-top: var(--header-height);
    padding-block: var(--space-20);
    overflow: hidden;
    background-color: var(--color-surface);
}

.hero::before {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px),
        radial-gradient(circle at 82% 74%, rgb(99 102 241 / 0.2), transparent 28%);
    background-size: 160px 160px, 160px 160px, 100% 100%;
    content: '';
    pointer-events: none;
}

.hero__container {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(400px, 0.85fr);
    gap: var(--space-12);
    align-items: center;
    min-height: calc(100dvh - var(--header-height) - var(--space-20) * 2);
}

.hero__content {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: start;
}

.hero__badge {
    padding: var(--space-2) var(--space-4);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
}

.hero__title {
    max-width: 760px;
    margin-top: var(--space-5);
    font-size: clamp(var(--font-size-3xl), 5.2vw, var(--font-size-5xl));
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hero__text {
    max-width: 580px;
    margin-top: var(--space-6);
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-top: var(--space-8);
}

.hero__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    min-height: 48px;
    padding-inline: var(--space-6);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-normal);
    transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.hero__button:hover {
    transform: translateY(-1px);
}

.hero__button--primary {
    background-color: var(--color-primary);
    color: var(--color-text-primary);
}

.hero__button--primary:hover {
    background-color: var(--color-primary-hover);
}

.hero__button--secondary {
    color: var(--color-text-primary);
}

.hero__button--secondary:hover {
    color: var(--color-primary);
}

.hero__tiles {
    position: relative;
    min-height: 80vh;
    display: flex;
    justify-content: end;
    gap: var(--space-6);
    width: 130%;
}

.hero__tile {
    display: flex;
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    min-width: 0;
    height: 100vh;
    width: 100vh;
    max-height: 280px;
    max-width: 180px;
    background: linear-gradient(145deg, #667a56, #263957 55%, #7e486f);
}

.hero__tiles-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}
.hero__tiles-column:nth-child(3) {
    margin-bottom: auto;
}
.hero__tiles-column:nth-child(2) {
    margin-top: auto;
}
.hero__tiles-column:nth-child(1) {
    margin-top: auto;
    margin-bottom: 20%;
}

@media (max-width: 960px) {
    .hero__container {
        grid-template-columns: minmax(0, 1fr) minmax(300px, 0.7fr);
        gap: var(--space-8);
    }

    .hero__tiles {
        min-height: 500px;
    }
}

@media (max-width: 760px) {
    .hero {
        padding-block: var(--space-16);
    }

    .hero__container {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .hero__tiles {
        min-height: 360px;
    }
}

@media (max-width: 520px) {
    .hero {
        padding-block: var(--space-12);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__button {
        width: 100%;
    }

    .hero__tiles {
        min-height: 280px;
    }
}
</style>
