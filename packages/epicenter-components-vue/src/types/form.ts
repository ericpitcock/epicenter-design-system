/** Option for EpSelect and pagination page-size dropdowns */
export interface SelectOption {
  disabled?: boolean
  label: string
  value: string | number
}

/**
 * A single validation rule function.
 * Returns `true` if the value is valid, `false` otherwise.
 */
export type ValidationRule<T = Record<string, unknown>> = (
  value: unknown,
  model: T
) => boolean

/** Map of field names to their validation rule functions */
export type ValidationRules<T = Record<string, unknown>> = Record<string, ValidationRule<T>>

/**
 * A function that returns additional validation rules based on the current model state.
 * Used for rules that only apply conditionally (e.g., field B required only when field A is set).
 */
export type ConditionalRules<T = Record<string, unknown>> = (
  model: T
) => ValidationRules<T>

/** Map of field names to their error state (true = has error) */
export type ValidationErrors = Record<string, boolean>
