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
                <select :id="id" class="select__field" :name="name" :disabled="disabled" :value="selectedValue"
                    :aria-invalid="Boolean(error) ? 'true' : 'false'" v-bind="$attrs" @change="onChange">
                    <option v-for="option in normalizedOptions" :key="option.valueKey" :value="option.valueKey"
                        :disabled="option.disabled">
                        {{ option.label }}
                    </option>
                </select>

                <span class="select__arrow" aria-hidden="true">v</span>
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

<style scoped lang="scss">
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
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
    white-space: nowrap;
}

.select__control {
    position: relative;
    flex: 1;
    min-width: 0;
}

.select__field {
    appearance: none;
    width: 100%;
    height: 44px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-background);
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-normal);
    padding: 0 var(--space-10) 0 var(--space-3);
    outline: none;
    transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
    cursor: pointer;
}

.select__field:hover:not(:disabled) {
    border-color: var(--color-border-hover);
}

.select__field:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgb(99 102 241 / 0.15);
}

.select__control.has-error .select__field {
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgb(239 68 68 / 0.15);
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
