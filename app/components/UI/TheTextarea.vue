<template>
    <div class="textarea-wrapper">
        <label v-if="props.label" :for="props.id" class="textarea__label">
            {{ props.label }}
            <span v-if="props.required" class="textarea__required">*</span>
        </label>

        <div class="textarea" :class="[
            props.size,
            {
                error: props.error,
                success: props.success,
                disabled: props.disabled,
                readonly: props.readonly,
            },
        ]">
            <textarea 
                v-bind="$attrs" 
                :id="props.id" 
                :name="props.name" 
                :value="props.modelValue"
                :placeholder="props.placeholder" 
                :disabled="props.disabled" 
                :readonly="props.readonly"
                :required="props.required" 
                :rows="props.rows" 
                :maxlength="props.maxlength"
                :autocomplete="props.autocomplete" 
                class="textarea__field" 
                @input="handleInput" 
            />

            <span v-if="props.maxlength && props.showCounter" class="textarea__counter">
                {{ String(props.modelValue).length }}/{{ props.maxlength }}
            </span>
        </div>

        <span v-if="props.error" class="textarea__message textarea__message--error">
            {{ typeof props.error === "string" ? props.error : "" }}
        </span>

        <span v-else-if="props.hint" class="textarea__message textarea__message--hint">
            {{ props.hint }}
        </span>
    </div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
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
            ["minimum", "small", "medium", "large"].includes(value),
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

    rows: {
        type: Number,
        default: 4,
    },

    maxlength: {
        type: Number,
        default: undefined,
    },

    showCounter: {
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
</script>

<style scoped>
.textarea-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.textarea__label {
    margin-bottom: var(--space-2);
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
}

.textarea__required {
    margin-left: var(--space-1);
    color: var(--color-error);
}

.textarea {
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
    transition: border-color var(--transition-fast);
}

.textarea:focus-within {
    border-color: var(--color-primary);
}

.textarea.minimum {
    min-height: var(--input-blocks-height-md);
}
.textarea.small {
    min-height: 80px;
}
.textarea.medium {
    min-height: 120px;
}
.textarea.large {
    min-height: 180px;
}

.textarea__field {
    display: block;
    width: 100%;
    min-width: 0;
    min-height: inherit;
    padding: var(--space-3) 0;
    border: none;
    outline: none;
    background: transparent;
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-md);
    line-height: var(--line-height-normal);
    resize: vertical;
}

.textarea.small .textarea__field {
    font-size: var(--font-size-sm);
}

.textarea.medium .textarea__field {
    font-size: var(--font-size-md);
}

.textarea.large .textarea__field {
    font-size: var(--font-size-lg);
}

.textarea__field::placeholder {
    color: var(--color-text-muted);
}

.textarea__counter {
    position: absolute;
    right: 0;
    bottom: var(--space-2);
    color: var(--color-text-muted);
    font-family: var(--font-primary);
    font-size: var(--font-size-xs);
    pointer-events: none;
}

.textarea.error {
    border-color: var(--color-error);
}

.textarea.success {
    border-color: var(--color-success);
}

.textarea.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.textarea.disabled .textarea__field {
    cursor: not-allowed;
}

.textarea.readonly {
    background-color: var(--color-surface-dark);
}

.textarea__message {
    margin-top: var(--space-1);
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
}

.textarea__message--error {
    color: var(--color-error);
}

.textarea__message--hint {
    color: var(--color-text-muted);
}

@media (max-width: 640px) {
    .textarea.large {
        min-height: 160px;
    }

    .textarea.large .textarea__field {
        font-size: var(--font-size-md);
    }
}
</style>