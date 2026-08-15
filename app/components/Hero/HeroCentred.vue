<template>
    <section class="hero">
        <Container class="hero__container">
            <div class="hero__content">
                <p class="hero__announcement">
                    <span>Announcing our next round of funding.</span>
                    <a class="hero__announcement-link" href="#">
                        Read more <span aria-hidden="true">→</span>
                    </a>
                </p>

                <h1 class="hero__title">Data to enrich your online business</h1>

                <p class="hero__text">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
    </section>
</template>

<script lang="ts" setup>
import Container from '~/components/UI/Container.vue';
</script>

<style scoped>
.hero {
    margin-top: var(--header-height);
    background-color: var(--color-surface);
    min-height: calc(100dvh - var(--header-height));
}

.hero__container {
    display: grid;
    min-height: inherit;
    place-items: center;
}

.hero__content {
    display: grid;
    justify-items: center;
    max-width: 960px;
    text-align: center;
}

.hero__announcement {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-8);
    padding: var(--space-2) var(--space-4);
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: var(--radius-full);
    color: var(--color-text-muted);
    font-size: var(--font-size-md);
    line-height: var(--line-height-normal);
}

.hero__announcement-link {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
}

.hero__announcement-link:hover {
    color: var(--color-primary-hover);
}

.hero__title {
    max-width: 900px;
    font-size: clamp(var(--font-size-4xl), 6vw, 76px);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
}

.hero__text {
    max-width: 760px;
    margin-top: var(--space-8);
    color: var(--color-text-muted);
    font-size: var(--font-size-xl);
    line-height: var(--line-height-relaxed);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

@media (max-width: 640px) {
    .hero {
        padding-block: var(--space-16);
    }

    .hero__announcement {
        font-size: var(--font-size-sm);
    }

    .hero__title {
        font-size: clamp(var(--font-size-3xl), 12vw, var(--font-size-5xl));
    }

    .hero__text {
        margin-top: var(--space-6);
        font-size: var(--font-size-md);
    }

    .hero__actions {
        width: 100%;
        margin-top: var(--space-6);
    }

    .hero__button {
        flex: 1 1 180px;
    }
}
</style>
