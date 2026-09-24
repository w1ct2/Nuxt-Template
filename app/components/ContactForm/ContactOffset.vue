<template>
    <section class="contact">
        <Container class="contact__layout">
            <!-- Хэдер часть с заголовками и списком -->
            <div class="contact__content">
                <h1>Оставьте заявку для связи</h1>
                <article class="contact__article">
                    <h4>Телефон: </h4>
                    <a>+7 9776 788 74 75</a>
                    <p>Ежедневно: 8:00-18:00</p>
                </article>
                <article class="contact__article">
                    <h4>Наш адрес: </h4>
                    <a>Показать на карте →</a>
                    <p>г. Екатеринбург ул. Ленина 78Б</p>
                </article>
                <article class="contact__article">
                    <h4>Email почта: </h4>
                    <a>hello@aveline-garden.ru →</a>
                </article>
                <article class="contact__article">
                    <h4>Мессенджеры: </h4>
                    <a>Telegram →</a>
                    <a>VK →</a>
                    <a>Max →</a>
                </article>
            </div>
            <!-- Медиа часть -->
            <form class="form">
                
            </form>
        </Container>
    </section>
</template>

<script setup lang="ts">
import Container from '~/components/UI/Container.vue';
</script>

<style scoped>
.contact {
    padding: var(--space-16);
    overflow: hidden;
    background-color: var(--color-surface);
    min-height: 100vh;
}
/* Макет с контентом и скриншотом */
.contact__layout {
    display: flex;
    justify-content: space-between;
    gap: var(--space-16);
    align-items: center;
    height: 100%;
}
/* Контент часть */
.contact__content {
    flex-basis: 35%;
    height: 100%;

}
.contact__content h1 {
    margin-top: var(--space-12);
    line-height: var(--line-height-minimum);
    margin-bottom: var(--space-16);
}
.contact__article {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-8);
}
.contact__article h4 {
    text-transform: uppercase;
    color: var(--color-text-muted);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
}
.contact__article a {
    cursor: pointer;
    color: var(--color-primary);
    &:hover {
        color: var(--color-primary-hover);
    }
}
.contact__article p {
    font-size: var(--font-size-sm);
}


.form { /* Форма  */
    flex-basis: 45%;
    min-height: 75vh;
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
}

/* Брикпоинты */
@media (max-width: 950px) {
    .contact {
        padding: var(--space-16);
    }

    .contact__layout {
        grid-template-columns: 1fr;
    }

    .form {
        max-width: 720px;
    }

    .contact__content {
        max-width: 680px;
    }

}
</style>
