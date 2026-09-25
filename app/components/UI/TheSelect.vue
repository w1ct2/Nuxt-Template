<template>
    <div class="select">
        <div class="select__row">
            <label v-if="label" :for="id" class="select__label">
                {{ label }}
            </label>

            <div class="select__control" :class="{
                'has-error': Boolean(error),
                'is-disabled': disabled,
            }">
                <select 
                    :id="id" 
                    class="select__field" 
                    :class="{ 'is-placeholder': !selectedValue }"
                    :name="name" 
                    :disabled="disabled" 
                    :value="selectedValue"
                    :aria-invalid="Boolean(error) ? 'true' : 'false'" v-bind="$attrs" @change="onChange">
                    <option 
                        v-for="option in normalizedOptions" 
                        :key="option.valueKey" 
                        :value="option.valueKey"
                        :disabled="option.disabled"
                        :selected="modelValue === option.value">
                        {{ option.label }}
                    </option>
                </select>

                <span class="select__arrow" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
                </span>
            </div>
        </div>

        <p v-if="error" class="select__error">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type SelectPrimitive = string | number
type SelectOption =
    | SelectPrimitive
    | {
        label: string
        value: SelectPrimitive
        disabled?: boolean
    }

const props = defineProps({
    modelValue: { type: [String, Number], default: null },
    options: { type: Array as () => SelectOption[], default: () => [] },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    error: { type: String, default: '' },
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: SelectPrimitive | null): void
    (e: 'change', value: SelectPrimitive | null): void
}>()

const normalizedOptions = computed(() =>
    props.options.map((option) => {
        if (typeof option === 'object') {
            return {
                label: option.label,
                value: option.value,
                valueKey: String(option.value),
                disabled: Boolean(option.disabled),
            }
        }

        return {
            label: String(option),
            value: option,
            valueKey: String(option),
            disabled: false,
        }
    }),
)

const selectedValue = computed(() =>
    props.modelValue === null || props.modelValue === undefined
        ? ''
        : String(props.modelValue),
)

const onChange = (event: Event) => {
    const target = event.target as HTMLSelectElement
    const valueKey = target.value

    if (!valueKey) {
        emit('update:modelValue', null)
        emit('change', null)
        return
    }

    const selectedOption = normalizedOptions.value.find((option) => option.valueKey === valueKey)
    const nextValue = selectedOption ? selectedOption.value : valueKey

    emit('update:modelValue', nextValue)
    emit('change', nextValue)
}
</script>

<style scoped>
.select {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;
}

.select__row {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: 100%;
}

.select__label {
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    white-space: nowrap;
}

.select__control {
    position: relative;
    flex: 1;
    min-width: 0;
}

/* Само поле */
.select__field {
    appearance: none;
    width: 100%;
    height: 44px;
    background: transparent;
    color: var(--color-text-primary);
    padding: 0 var(--space-10) 0 0;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--color-border);
    font-size: var(--font-size-md);
    transition:
        border-color var(--transition-fast);
    cursor: pointer;
}

.select__field.is-placeholder {
    color: var(--color-text-muted);
}

.select__field:hover:not(:disabled) {
    border-color: var(--color-border-hover);
}

.select__field:focus {
    border-color: var(--color-primary);
}

.select__control.has-error .select__field {
    border-color: var(--color-error);
}

.select__control.is-disabled .select__field {
    opacity: 0.65;
    cursor: not-allowed;
    background: var(--color-surface);
}

.select__arrow {
    position: absolute;
    top: 50%;
    right: var(--space-3);
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    line-height: 1;
}

.select__error {
    margin: 0;
    color: var(--color-error);
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-normal);
}
</style>
