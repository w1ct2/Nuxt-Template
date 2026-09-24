<template>
    <div class="input-wrapper">
        <label v-if="props.label" :for="props.id" class="input__label">
            {{ props.label }}
            <span v-if="props.required" class="input__required">*</span>
        </label>

        <div
            class="input"
            :class="[
                props.size,
                {
                    error: props.error,
                    success: props.success,
                    disabled: props.disabled,
                    readonly: props.readonly,
                },
            ]"
        >
            <span v-if="$slots.prefix" class="input__prefix">
                <slot name="prefix"></slot>
            </span>

            <input
                v-bind="$attrs"
                :id="props.id"
                :name="props.name"
                :type="props.type"
                :value="props.modelValue"
                :placeholder="props.placeholder"
                :disabled="props.disabled"
                :readonly="props.readonly"
                :required="props.required"
                :autocomplete="props.autocomplete"
                class="input__field"
                @input="handleInput"
            />

            <button
                v-if="props.clearable && props.modelValue"
                type="button"
                class="input__clear"
                :disabled="props.disabled"
                aria-label="Очистить"
                @click="clearInput"
            >
                ×
            </button>

            <span v-if="$slots.suffix" class="input__suffix">
                <slot name="suffix"></slot>
            </span>
        </div>

        <span v-if="props.error" class="input__message input__message--error">
            {{ typeof props.error === "string" ? props.error : "" }}
        </span>

        <span
            v-else-if="props.hint"
            class="input__message input__message--hint"
        >
            {{ props.hint }}
        </span>
    </div>
</template>

<script setup>
/**
 * Универсальный компонент input с поддержкой:
 * - v-model
 * - различных типов полей
 * - трех размеров
 * - label и required
 * - error / success состояний
 * - hint и сообщения об ошибке
 * - disabled / readonly состояний
 * - очистки поля
 * - prefix / suffix слотов
 * - стандартных HTML-атрибутов через $attrs
 *
 * Пример:
 *
 * <Input
 *     v-model="email"
 *     type="email"
 *     label="Email"
 *     placeholder="example@mail.com"
 * />
 *
 * Input с ошибкой:
 *
 * <Input
 *     v-model="email"
 *     label="Email"
 *     error="Введите корректный email"
 * />
 *
 * Input с иконкой:
 *
 * <Input
 *     v-model="search"
 *     placeholder="Поиск..."
 * >
 *     <template #prefix>
 *         <Icon name="mdi:magnify" />
 *     </template>
 * </Input>
 *
 * Input с возможностью очистки:
 *
 * <Input
 *     v-model="search"
 *     clearable
 * />
 */

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: "",
    },

    type: {
        type: String,
        default: "text",
        validator: (value) =>
            [
                "text",
                "password",
                "email",
                "number",
                "tel",
                "search",
                "url",
            ].includes(value),
    },

    label: {
        type: String,
        default: "",
    },

    placeholder: {
        type: String,
        default: "",
    },

    size: {
        type: String,
        default: "medium",
        validator: (value) =>
            ["small", "medium", "large"].includes(value),
    },

    disabled: {
        type: Boolean,
        default: false,
    },

    readonly: {
        type: Boolean,
        default: false,
    },

    required: {
        type: Boolean,
        default: false,
    },

    error: {
        type: [Boolean, String],
        default: false,
    },

    success: {
        type: Boolean,
        default: false,
    },

    hint: {
        type: String,
        default: "",
    },

    clearable: {
        type: Boolean,
        default: false,
    },

    autocomplete: {
        type: String,
        default: "off",
    },

    name: {
        type: String,
        default: "",
    },

    id: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event) => {
    emit("update:modelValue", event.target.value);
};

const clearInput = () => {
    emit("update:modelValue", "");
};
</script>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.input__label {
    margin-bottom: var(--space-2);
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
}

.input__required {
    margin-left: var(--space-1);
    color: var(--color-error);
}

.input {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
    transition: all var(--transition-fast);
}

.input:focus-within {
    border-color: var(--color-primary);
}

.input.small {
    min-height: 36px;
}

.input.medium {
    min-height: 44px;
}

.input.large {
    min-height: 52px;
}

.input__field {
    flex: 1;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: var(--color-text-primary);
    font-family: var(--font-primary);
}

.input.small .input__field {
    padding: var(--space-2);
    font-size: var(--font-size-sm);
}

.input.medium .input__field {
    padding: var(--space-3);
    font-size: var(--font-size-md);
}

.input.large .input__field {
    padding: var(--space-3) var(--space-4);
    font-size: var(--font-size-lg);
}

.input__field::placeholder {
    color: var(--color-text-muted);
}

.input__prefix,
.input__suffix {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--color-text-muted);
}

.input__prefix {
    margin-left: var(--space-3);
}

.input__suffix {
    margin-right: var(--space-3);
}

.input__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-right: var(--space-2);
    padding: 0;
    border: none;
    background: transparent;
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    cursor: pointer;
}

.input__clear:hover {
    color: var(--color-text-primary);
}

.input.error {
    border-color: var(--color-error);
}

.input.error:focus-within {
    outline-color: var(--color-error);
}

.input.success {
    border-color: var(--color-success);
}

.input.success:focus-within {
    outline-color: var(--color-success);
}

.input.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.input.disabled .input__field {
    cursor: not-allowed;
}

.input.readonly {
    background-color: var(--color-surface-dark);
}

.input__message {
    margin-top: var(--space-1);
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
}

.input__message--error {
    color: var(--color-error);
}

.input__message--hint {
    color: var(--color-text-muted);
}

@media (max-width: 640px) {
    .input.large {
        min-height: 48px;
    }

    .input.large .input__field {
        font-size: var(--font-size-md);
    }
}
</style>