<template>
    <section class="hero">
        <div class="hero__content-wrap">
            <Container class="hero__container">
                <div class="hero__content">
                    <p class="hero__badge">Nuxt starter template</p>
                    <h1 class="hero__title">Build clean interfaces faster</h1>
                    <p class="hero__text">
                        A ready hero section with reusable layout, clear content hierarchy,
                        and a flexible banner area for future media.
                    </p>
                    <div class="hero__actions">
                        <a class="hero__button hero__button--primary" href="#">
                            Get started
                        </a>
                        <a class="hero__button hero__button--secondary" href="#">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </Container>
        </div>

        <div class="hero__media" aria-label="Image placeholder" role="img" />
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
</script>

<style scoped>
.hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: calc(100dvh - var(--header-height));
    margin-top: var(--header-height);
    background-color: var(--color-surface);
}

.hero__content-wrap {
    display: flex;
    align-items: center;
    padding: var(--space-16) 0;
}

.hero__container {
    width: min(100% - (var(--container-padding) * 2), 600px);
    margin-inline: auto var(--space-12);
}

.hero__content {
    display: grid;
    justify-items: start;
    gap: var(--space-5);
}

.hero__badge {
    padding: var(--space-2) var(--space-4);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 50%;
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
}

.hero__title {
    max-width: 680px;
    font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hero__text {
    max-width: 560px;
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-top: var(--space-2);
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
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast),
        transform var(--transition-fast);
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

.hero__media {
    min-height: 100%;
    background-color: var(--color-surface-hover);
}

@media (max-width: 860px) {
    .hero {
        grid-template-columns: 1fr;
    }

    .hero__content-wrap {
        padding-block: var(--space-16);
    }

    .hero__container {
        width: min(100% - (var(--container-padding) * 2), var(--container-width));
        margin-inline: auto;
    }

    .hero__media {
        min-height: 320px;
    }
}

@media (max-width: 520px) {
    .hero__content-wrap {
        padding-block: var(--space-12);
    }

    .hero__text {
        font-size: var(--font-size-md);
    }

    .hero__actions {
        width: 100%;
    }

    .hero__button {
        flex: 1 1 180px;
    }

    .hero__media {
        min-height: 240px;
    }
}
</style>
