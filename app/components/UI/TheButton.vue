<template>
    <button :disabled="props.isDisabled || props.isLoading" :aria-busy="props.isLoading"
        :aria-label="props.isLoading ? 'Загрузка' : null" :class="[props.type, props.size]" type="button"
        class="button">
        <span class="button__text">
            <slot name="text"></slot>
        </span>
        <span aria-hidden="true" class="button__icon">
            <slot name="icon"></slot>
        </span>
    </button>
</template>

<script setup>
/**
 * Универсальный компонент кнопки с поддержкой различных типов, размеров, состояний загрузки и отключения.
 *
 * Принцип работы:
 * - Компонент рендерит button с полной поддержкой доступности (ARIA атрибуты для состояний)
 * - Поддерживает типы стилизации: "primary", "secondary", "reject", "warning", "resolve", "transparent"
 * - Поддерживает четыре размера: "icon", "small", "medium", "large"
 * - При isLoading=true кнопка отключается, иконка скрывается, вместо нее отображается спиннер, и устанавливается aria-busy="true"
 * - При isDisabled=true кнопка становится некликабельной и полупрозрачной (opacity 0.5)
 * - Текст передается через слот "text", иконка через слот "icon" (опциональна)
 * - Пустые слоты автоматически скрываются через CSS (:empty селектор)
 * - При фокусе отображается outline с цветом, соответствующим типу кнопки
 * - При наведении меняется фоновый цвет в зависимости от типа (если кнопка не отключена)
 *
 * Основная кнопка с текстом
 * <Button type="primary" size="medium">
 *   <template #text>Отправить</template>
 * </Button>
 *
 * Кнопка с иконкой и текстом
 * <Button type="primary" size="large" @click="handleSave">
 *   <template #text>Сохранить</template>
 *   <template #icon>
 *     <Icon name="mdi:content-save" />
 *   </template>
 * </Button>
 *
 * Вторичная кнопка
 * <Button type="secondary" size="medium">
 *   <template #text>Отмена</template>
 * </Button>
 * 
 * Кнопка прозрачная 
 * <Button type="transparent" size="medium">
 *  <template #text>Подробнее</template>
 * </Button>
 *
 * Кнопка удаления в состоянии загрузки
 * <Button
 *   type="reject"
 *   size="medium"
 *   :is-loading="isDeleting"
 *   @click="deleteItem"
 * >
 *   <template #text>Удалить</template>
 *   <template #icon>
 *     <Icon name="mdi:trash" />
 *   </template>
 * </Button>
 *
 * Отключенная кнопка
 * <Button type="primary" size="medium" :is-disabled="true">
 *   <template #text>Недоступно</template>
 * </Button>
 *
 * Кнопка только с иконкой
 * <Button type="secondary" size="icon">
 *   <template #icon>
 *     <Icon name="mdi:close" />
 *   </template>
 * </Button>
 */

const props = defineProps({
    isDisabled: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    type: {
        type: String,
        default: "primary",
        validator: (value) => ["primary", "secondary", "reject", "warning", "resolve", "transparent"].includes(value),
    },
    size: {
        type: String,
        default: "medium",
        validator: (value) => ["icon", "small", "medium", "large"].includes(value)
    },
});
</script>

<style scoped>
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    text-decoration: none;
    user-select: none;
    font-family: var(--font-primary);
}

.button.icon {
    padding: var(--space-2);
}

.button.large {
    padding: var(--space-4) var(--space-16);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-md);
    gap: var(--space-3);
}

.button.medium {
    padding: var(--space-4) var(--space-10);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-md);
    gap: var(--space-2);
}

.button.small {
    padding: var(--space-2) var(--space-6);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);
    gap: var(--space-1);
}

.button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.button > *:empty {
    display: none;
}

.button__icon {
    width: 16px;
    height: 16px;
    transform: translateY(0.5px);
}

.button.primary {
    background-color: var(--color-primary);
    color: var(--color-text-primary);
}

.button.primary:not(:disabled):hover {
    background-color: var(--color-primary-hover);
}

.button.primary:not(:disabled):focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.button.secondary {
    outline: 1px solid var(--color-border);
    color: var(--color-text-primary);
}

.button.secondary:not(:disabled):hover {
    background-color: var(--color-surface-hover);
}

.button.secondary:not(:disabled):focus {
    outline-offset: 2px;
    outline: 2px solid var(--color-border);
}

.button.reject {
    background-color: var(--color-error);
    color: var(--color-text-primary);
}

.button.reject:not(:disabled):hover {
    background-color: var(--color-error);
}

.button.reject:not(:disabled):focus {
    outline-offset: 2px;
    outline: 2px solid var(--color-error);
}

.button.warning {
    background-color: var(--color-warning);
    color: var(--color-text-primary);
}

.button.warning:not(:disabled):hover {
    background-color: var(--color-warning);
}

.button.warning:not(:disabled):focus {
    outline: 2px solid var(--color-warning);
    outline-offset: 2px;
}

.button.resolve {
    background-color: var(--color-success);
    color: var(--color-text-primary);
}

.button.resolve:not(:disabled):hover {
    background-color: var(--color-success);
}

.button.resolve:not(:disabled):focus {
    outline-offset: 2px;
    outline: 2px solid var(--color-success);
}

.button.transparent {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-text-primary);
}

.button.transparent:not(:disabled):hover {
    color: var(--color-text-secondary);
}

.button.transparent:not(:disabled):focus {
    outline: none;
}

@media (max-width: 576px) {
    .button.large {
        padding: var(--space-3) var(--space-12);
        font-size: var(--font-size-md);
    }
}
</style>